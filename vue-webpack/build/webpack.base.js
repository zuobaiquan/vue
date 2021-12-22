const VueLoaderPlugin = require('vue-loader/lib/plugin')

const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var { srcPath, resolve } = require('./util')
var config = require('../config')
const HelloWorldPlugins = require('./HelloWorldPlugins')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: resolve(`${config.outputPath}/public`), /* html, css, js 图片等资源文件的输出路径，将所有资源文件放在 public 目录 */
    publicPath: './public/', /* html, css, js 图片等资源文件的 server 上的路径 */
    filename: 'js/[name].[hash].js' /* 每个入口 js 文件的生成配置 */
  },
  resolve: {
    // 尽可能的减少后缀尝试的可能性
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': srcPath
    }
  },
  stats: { children: false },
  module: {
    rules: [
      {
        // vue-loader，加载 vue 组件
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    }),
    new VueLoaderPlugin(),
    new HelloWorldPlugins()
  ],
  optimization: {
    // splitChunks: {
    //   //缓存组
    //   cacheGroups: {
    //     vendors: {
    //       // test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       priority: 100, //添加权重
    //       chunks: 'all',
    //       minChunks: 6,   // //重复6次使用的时候需要抽离出来
    //     },
    //   }
    // },
  }
}
