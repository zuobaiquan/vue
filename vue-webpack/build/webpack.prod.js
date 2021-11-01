const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// css、js压缩、优化插件
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HappyPack = require('happypack')

const happyThreadPool = HappyPack.ThreadPool({ size: 6 })
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const InjectScript = require('./plugin')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
var config = require('../config')
var { srcPath, resolve, getNetworkIp } = require('./util')
var projectName = require('../package.json').name

var prod = process.env.NODE_ENV || 'prod'
var projectEnv = `${projectName}_${prod}`
if (process.env.npm_config_report) {
  webpackBase.plugins.push(new BundleAnalyzerPlugin({
    analyzerHost: getNetworkIp(),
    analyzerPort: 8888
  }))
}
module.exports = webpackMerge(webpackBase, {
  devtool: prod !== 'prod' ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  mode: 'production',
  output: {
    filename: `${projectEnv}js/[name].[chunkhash].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
        use: ['happypack/loader?id=babel'],
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: config.cdnUrl+`/`,
              publicPath: '../'
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
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i,
        // 图片加载器，较小的图片转成 base64
        loader: 'url-loader',
        options: {
          name: `${projectEnv}img/[name]_[hash:7].[ext]`,
          esModule: false,
          limit: config.limitSize // 超过limitSize 就输出文件，否则base64输出
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: `./${projectEnv}fonts/[name].[hash:7].[ext]`
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IS_DEV': 0,
      'process.env.VUE_ENV': '""'
    }),
    new MiniCssExtractPlugin({
      filename: `${projectEnv}css/[name].css`,
      ignoreOrder: true // 坑，需要升级下版本，才有效
    }),
    new HappyPack({
      // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
      loaders: ['cache-loader', 'babel-loader?cacheDirectory'],
      // 使用共享进程池中的子进程去处理任务
      threadPool: happyThreadPool
    }),
    new HtmlWebpackPlugin({
      filename: resolve('./dist/index.html'),
      template: 'index.html',
      inject: true,
      // favicon: resolve("favicon.ico"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new InjectScript({
      path: ['config.js']
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          output: {
            comments: false
          },
          compress: {
            drop_console: true
          }
        },
        // chunkFilter: (chunk) => {
        //   if (chunk.name === 'vendors') {
        //     return false;
        //   }
        //   return true;
        // },
        // sourceMap: false,
        cache: false,
        // test: /\.js(\?.*)?$/i,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({
        // 压缩css
        cssProcessorOptions: {
          safe: true
        },
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true }}]
        }
      })
    ]
  }
})
