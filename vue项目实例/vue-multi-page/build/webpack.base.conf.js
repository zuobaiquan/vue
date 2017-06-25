/**
 * @Author: le
 * @Date: 2016/11/2
 */
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var glob = require('glob')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

var projectRoot = path.resolve(__dirname, '../')
var srcDir = path.resolve(__dirname, '../src')
var entries = getEntry(srcDir + '/module/**/*.js')

var autoprefixerConf = autoprefixer({ browsers: ['last 2 versions'] });

// 获取入口文件
function getEntry (globPath) {
    var entries = {},
        filename;

    glob.sync(globPath).forEach(function (entry) {
        filename = path.basename(entry, path.extname(entry));
        entries[filename] = entry;
    });

    return entries;
}

// 生成html
function createHtml () {
    var r = [], filename, conf;

    glob.sync(srcDir + '/module/**/*.html').forEach(function (filePath) {
        filename = path.basename(filePath, path.extname(filePath));

        conf = {
            template: 'html!' + filePath,
            filename: filename + '.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        }

        if (filename in entries) {
            conf.inject = 'body';
            conf.chunks = [filename, 'vendor', 'manifest', 'bootstrap']
        }

        r.push(new HtmlWebpackPlugin(conf))
    })

    return r;
}

module.exports = {
    entry: entries,

    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            'jquery$': 'jquery/dist/jquery',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'js': path.resolve(__dirname, '../src/js'),
            'components': path.resolve(__dirname, '../src/components'),
            'scss': path.resolve(__dirname, '../src/scss')
        }
    },

    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },

    module: {
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    // js 中引入的样式处理
    postcss: [autoprefixerConf],
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        // .vue 中的样式处理
        loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
        postcss: [autoprefixerConf]
    },

    plugins: createHtml()
}
