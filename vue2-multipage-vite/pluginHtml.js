import fs, { promises as fsp } from 'fs'
import path from 'path'

import { Buffer } from 'buffer'

export default (htmlOptions) => {
  const { pages, indexPage = '/home/index' } = htmlOptions
  let outDir
  return {
    name: 'vite-plugin-html',
    config(config, { command }) {
      if (command === 'build') {
        outDir = config.build && config.build.outDir || 'dist'
        // inject build.rollupOptions.input from pages directly.
        config.build = {
          ...config.build,
          rollupOptions: {
            input: {
              ...pages,
            },
          },
        }
      }
    },
    configureServer(server) {
      // other html handled after vite's inner middlewares.
      return () => {
        server.middlewares.use('/', async (req, res, next) => {
          // if request is not html , directly return next()
          let url = decodeURI(generateUrl(req.url))
          if (!url.endsWith('.html') && url !== '/') {
            return next()
          }
          // if request / means it request indexPage page
          // read indexPage config ,and response indexPage page
          if (url === '/' || url.indexOf('index.html') >= 0) {
            res.end(await readHtml(url, pages, indexPage))
            return
          }
          const otherHtmlBuffer = await readHtml(url, pages, indexPage)
          res.end(otherHtmlBuffer)
        })
      }
    },
    async closeBundle() {
      const pageKeys = Object.keys(pages)
      const pathToRemove = []
      for (const pageKey of pageKeys) {
        // original build html path
        const src = path.resolve(process.cwd(), `${outDir}/${newPages[pageKey]}`)
        const pageArr = newPages[pageKey].split('/')
        const pageName = pageArr[pageArr.length - 1]
        // dest html path
        const dest = path.resolve(process.cwd(), `${outDir}/${pageName}`)
        if (fs.existsSync(src)) {
          await fsp.copyFile(src, dest)
          pathToRemove.push(pageArr[1])
        }
      }
      for (const toRemove of pathToRemove) {
        if (fs.existsSync(`${outDir}/${toRemove}`)) {
          await fsp.rmdir(path.resolve(process.cwd(), `${outDir}/${toRemove}`), { recursive: true })
        }
      }
    },
    async transform(code, id) {
      if (id.endsWith('html')) {
        return generateHtml(code, id)
      }
      return code
    },
  }
}

async function readHtml(url, pages, indexPage) {
  const htmlName = url.replace('.html', '')
  let htmlPath = pages[htmlName]
  if (!fs.existsSync(htmlPath)) {
    htmlPath = pages[indexPage]
    if (!fs.existsSync(htmlPath)) {
      const err = `${htmlName} page is not exists,please check your indexPage configuration `
      console.error(err)
      return Buffer.from(err)
    }
  }
  return await fsp.readFile(htmlPath).then(async (buffer) => {
    const htmlCode = await generateHtml(buffer.toString(), htmlPath)
    return Buffer.from(htmlCode)
  })
}

async function generateHtml(code, htmlPath) {
  const viteScriptSrcRegex = /src=['"]\/.*\.(js|ts)['"]/
  // is the html code contains src='/a/b/c.js' or src='/a/b/c.ts',if it contains ,then return code directly
  // it means, the html code has the vite's js entry.
  // otherwise, auto inject the js/ts file near by the html file, and use the html's name
  if (viteScriptSrcRegex.test(code)) {
    return code
  }
  const pathUrl = htmlPath.substring(0, htmlPath.lastIndexOf("\/"))
  const jsPath = pathUrl + '/main.js'
  const tsPath = pathUrl + '/main.ts'
  let realEntryPath = jsPath
  if (fs.existsSync(jsPath)) {
    realEntryPath = jsPath
  } else if (fs.existsSync(tsPath)) {
    realEntryPath = tsPath
  } else {
    console.error(`There is no such ${jsPath} or ${tsPath} exists near by ${htmlPath}`)
    return `There is no such ${jsPath} or ${tsPath} exists near by ${htmlPath}`
  }

  const insertModuleScript = `
  <script type="module" src="${realEntryPath}"></script>
  </head>
  `
  return code.replace('</head>', insertModuleScript)
}

function generateUrl(url) {
  if (!url) {
    return '/'
  }
  // url with parameters
  if (url.indexOf('?') > 0) {
    return url.split('?')[0]
  }
  return url
}