const glob = require('glob')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
// 根据项目具体需求，输出正确的 js 和 html 路径
function getEntry(globPath) {
  var entries = {}, pathname;
  if (globPath) {
    glob.sync(globPath).forEach(function (entry) {
      pathname = entry.split('/').splice(-3, 2).join('/') // 正确输出 js 和 html 的路径
      pathname = pathname.replace('pages/', '')
      entries[pathname] = entry
    })
    return entries
  }

}

const srcPath = resolve('src')

function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

module.exports = {
  getEntry,
  srcPath,
  resolve
}
