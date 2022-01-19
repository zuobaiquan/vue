module.exports = class HelloWorldPlugins {
  // apply方法
  apply(compiler) {
    // 指定一个（这个插件中为多个）绑定到 webpack 自身的事件钩子。
    // 订阅 start 钩子
    // console.log('compiler',compiler.hooks)
    // compiler.hooks.start.tap('HelloWorldPlugin', () => {
    //   console.log('webpack开始编译')
    // });

    // 订阅 compile 钩子
    compiler.hooks.compile.tap('HelloWorldPlugin', () => {
      console.log('编译中')
    })

    // 订阅 afterCompile 钩子
    compiler.hooks.afterCompile.tap('HelloWorldPlugin', () => {
      console.log('webpack编译结束')
    })

    // 订阅 emit 钩子
    compiler.hooks.emit.tap('HelloWorldPlugin', (filename) => {
      console.log('开始打包文件，文件名为： ', filename)
    })

    // 订阅 afterEmit 钩子
    compiler.hooks.afterEmit.tap('HelloWorldPlugin', (path) => {
      console.log('文件打包结束，打包后文件路径为： ', path)
    })

    // 订阅 done 钩子
    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('webpack打包结束')
    })
  }
}

// webpack 插件由以下组成：

// 一个 JavaScript 命名函数。
// 在插件函数的 prototype 上定义一个 apply 方法。
// 指定一个绑定到 webpack 自身的事件钩子。
// 处理 webpack 内部实例的特定数据。
// 功能完成后调用 webpack 提供的回调。

