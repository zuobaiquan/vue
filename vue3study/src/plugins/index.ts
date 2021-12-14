const showTime = () => console.log(new Date())
export default {
  install(app: any) {
    // 原型绑定 属性或方法
    app.config.globalProperties.showText = 'showText'
    app.config.globalProperties.formatTime = showTime

    // 注册全局指令
    // Object.keys(directives).forEach(k => app.directive(k, directives[k]))

    console.log(app)
  }
}
