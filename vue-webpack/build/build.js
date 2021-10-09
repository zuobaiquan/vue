
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var log = require('./log')
// var env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"")
// env=env=='dev'?'dev':'prod'
// var webpackConfig = require(`./webpack.${env}.js`)
var webpackConfig = require(`./webpack.prod.js`)
var spinner = ora({ color: 'green', text: 'building for production...' })
spinner.start()
rm(path.join(`${config.outputPath}`, 'public'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    const timeSize = parseInt(stats.endTime - stats.startTime) / 1000
    log.success(`  打包完成，消耗时间：${timeSize}s !\n`)
  })
})
