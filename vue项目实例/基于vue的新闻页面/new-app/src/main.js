import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerconfig from './routeConfig.js'

require('./assets/css/base.css'); //引入全局的base文件

Vue.use(VueRouter);
const router=new VueRouter({
    routes:routerconfig
});
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
