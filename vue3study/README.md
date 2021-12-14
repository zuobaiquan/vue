# vue3study

vue3 新特性
Composition API
响应式变更
全新的全家桶
新的ts支持
vite


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

template 支持多个根标签
<template>
  <p>111</p>
  <div>111</div>
</template>


```
vue2 中的
Options API ，又叫选项 API
以vue为后缀的文件，通过定义methods，computed，watch，data等属性与方法，共同处理页面逻辑

优缺点
条例清晰，相同的放在相同的地方;
但随着组件功能的增大，关联性会大大降低，组件的阅读和理解难度会增加;
调用使用this，但逻辑过多时this会出现问题，比如指向不明等;
其本身并不是有效的js代码 我们在使用options API 的时候，需要确切了解我们具体可以访问到哪些属性，以及我们访问到的当前属性的行为在后台，VUE需要将此属性转换为工作代码，因为我们无法从自动建议和类型检查中受益，因此给我们在使用相关属性时，造成了一定弊端

vue3 中的
Composition API 又叫组合式API
组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）
即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API

定义数据和使用数据放一起处理，易读更方便扩展

优势 :

其代码更易读，更易理解和学习，没有任何幕后操作
Composition API的好处不仅仅是以不同的方式进行编码，更重要的是对于代码的重用
不受模板和组件范围的限制，也可以准确的知道我们可以使用哪些属性
由于幕后没有什么操作，所以编辑器可以帮助我们进行类型检查和建议


比较：
在逻辑组织和逻辑复用方面，Composition API是优于Options API
因为Composition API几乎是函数，会有更好的类型推断。
Composition API对 tree-shaking 友好，代码也更容易压缩
Composition API中没有对this的使用，减少了this指向不明的情况
如果是小型组件，可以继续使用Options API，也是十分友好的
