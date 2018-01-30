// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 貌似没用用到
// var vueResource = require('vue-resource');
import vueResource  from 'vue-resource'
Vue.use(vueResource );

// Vue.config.productionTip = false  // 来关闭生产模式下给出的提示

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
new Vue({
  el: '#app',
  render: h => h(App)
})
