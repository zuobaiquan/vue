const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
var { srcPath, getNetworkIp } = require('./util')

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // devtool: '#source-map',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: srcPath
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              publicPath: '../../'
            }
          },
          { loader: 'css-loader', options: { minimize: false }},
          'postcss-loader',
          {
            loader: 'less-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [srcPath + '/styles/variables.less']
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        // 图片加载器，较小的图片转成 base64
        loader: 'url-loader',
        options: {
          name: './img/[name].[hash:7].[ext]',
          esModule: false,
          limit: 10240 // 超过10k 就输出文件，否则base64输出
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: './fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  devServer: {
    port: 6002,
    host: getNetworkIp(),
    // host: '0.0.0.0',
    stats: 'errors-only',
    open: false,
    hot: true,
    inline: true, // 实时刷新
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IS_DEV': 1,
      'process.env.VUE_ENV': '""'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
      // favicon: "favicon.ico",
    })
  ]
})
