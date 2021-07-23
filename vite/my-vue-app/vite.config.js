import { resolve } from 'path'
import { defineConfig } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2')
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
const { getEntry, srcPath } = require('./config/utils.js')
const config = require('./config/index.js')
import htmlPlugin from './config/injectScript'

const pages = getEntry(`${srcPath}/**/*.html`)
// console.log('pages', pages)
// https://vitejs.dev/config/
export default defineConfig({
  root: `${srcPath}/pages`,
  base: './',
  plugins: [
    htmlPlugin({

    }),
    createVuePlugin(),
    viteCommonjs()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve(__dirname, 'src')
    },
    // extensions: ['.vue', '.js']
  },
  server: {
    port: 6001,
    open: true
  },
  build: {
    outDir: `../../${config.outputPath}`, //打包文件名称
    assetsDir: `${config.assetsDir}`, //打包静态文件的存储地址
    rollupOptions: {
      input: pages
    }
  }
})
