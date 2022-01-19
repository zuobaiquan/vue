const fs = require('fs')
const path = require('path')

const jsConfig = {
  compilerOptions: {
    'module': 'commonjs',
    'target': 'es6',
    'baseUrl': './',
    'paths': {
    }
  },
  exclude: [
    'node_modules'
  ],
  include: [
    'src/**/*'
  ]
}

class AliasPlugin {
  constructor(options) {
    this.options = {
      ...options
    }
  }
  apply(compiler) {
    const { resolve } = compiler.options
    const aliasList = resolve ? (resolve.alias || {}) : {}
    const cwd = process.cwd()
    const file = path.join(cwd, 'jsconfig.json')
    let exsits = true
    fs.open(file, (err) => {
      if (err) exsits = false
    })
    let result = jsConfig
    let baseUrl = './'
    if (exsits) {
      try {
        const res = fs.readFileSync(file, 'utf-8')
        result = JSON.parse(res)
      } catch (e) {
        result = jsConfig
      }
      result.compilerOptions = result.compilerOptions || {}
      baseUrl = result.compilerOptions.baseUrl || './'
      result.compilerOptions.paths = {}
    }

    baseUrl = path.join(cwd, baseUrl)
    for (const key in aliasList) {
      const relative = path.relative(baseUrl, aliasList[key])
      result.compilerOptions.paths[`${key}/*`] = [`${relative}/*`]
    }
    try {
      fs.writeFileSync(file, JSON.stringify(result, null, 2))
    } catch (e) {
      throw e
    }
  }
}

module.exports = AliasPlugin
