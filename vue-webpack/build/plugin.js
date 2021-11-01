
class injectScriptPlugin {
  constructor({ path }) {
    this.modules = Array.isArray(path) ? path : [path]
  }
  apply(compiler) {
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData) => {
        for (var i = this.modules.length - 1; i >= 0; i--) {
          htmlPluginData.assets.js.unshift(this.modules[i])
        }
      })
    })
  }
}

module.exports = injectScriptPlugin
