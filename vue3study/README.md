# vue3study

vue3 新特性
Composition API
响应式变更
全新的全家桶
新的ts支持
vite
组件不再强制单个根元素  Fragment，template 支持多个根标签
teleport（传送）
移除过滤器filters
组件支持多个v-model


文档：https://v3.cn.vuejs.org/guide/introduction.html

全局 API 修改
Vue.config -> app.config

https://v3.vuejs.org/guide/migration/global-api.html

https://v5.bootcss.com/docs/forms/form-control/

全局注册api
Vue.component  -> app.component
Vue.directive  -> app.directive

行为扩展类
Vue.mixin   -> app.mixin
Vue.use  -> app.use   // 安装全局的插件

更好的TreeShaking优化

import Vue from 'vue'
Vue.nextTick(()=>{})

const obj = Vue.observable({})

Vue3
import Vue,{ nextTick,observable } from 'vue'
Vue.nextTick  // undefined，不在这么使用

nextTick(()=>{

})


Vue3 的修改

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// 这个时候 app 就是一个 App 的实例，现在再设置任何的配置是在不同的 app 实例上面的，不会像vue2 一样发生任何的冲突。
// 挂在到app实例上
app.config.isCustomElement = tag => tag.startsWith('app-')
app.use(/* ... */)
app.mixin(/* ... */)
app.component(/* ... */)
app.directive(/* ... */)

app.config.globalProperties.customProperty = () => {}

// 当配置结束以后，我们再把 App 使用 mount 方法挂载到固定的 DOM 的节点上。
app.mount(App, '#app')

```

Vue2 的全局配置
```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [/^app-/]
Vue.use(/* ... */)
Vue.mixin(/* ... */)
Vue.component(/* ... */)
Vue.directive(/* ... */)

Vue.prototype.customProperty = () => {}

new Vue({
  render: h => h(App)
}).$mount('#app')


Vue2 这样写在一定程度上修改了 Vue 对象的全局状态。

第一，在单元测试中，全局配置非常容易污染全局环境，用户需要在每次 case 之间，保存和恢复配置。有一些 api （vue use vue mixin）甚至没有方法恢复配置，这就让一些插件的测试非常的困难。
第二，在不同的 APP 中，如果想共享一份有不同配置的 vue 对象，也变得非常困难。


```
vue2 中的
Options API ，又叫选项 API
以vue为后缀的文件，通过定义methods，computed，watch，data等属性与方法，共同处理页面逻辑


vue3 中的
Composition API 又叫组合式API
组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）
即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API

定义数据和使用数据放一起处理，易读更方便扩展

优势 :

其代码更易读，更易理解和学习，没有任何幕后操作
Composition API的好处不仅仅是以不同的方式进行编码，更重要的是对于代码的重用
不受模板和组件范围的限制


比较：
在逻辑组织和逻辑复用方面，Composition API是优于Options API
因为Composition API 几乎是函数，会有更好的类型推断。
Composition API对 tree-shaking 友好，代码也更容易压缩
Composition API中没有对 this 的使用，减少了this指向不明的情况
如果是小型组件，可以继续使用Options API
