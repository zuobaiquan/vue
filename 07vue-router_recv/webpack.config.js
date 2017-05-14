var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: {
    path:__dirname,
	filename:'build.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
  
}
