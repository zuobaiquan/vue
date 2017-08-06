import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResource  from 'vue-resource'
Vue.use(VueResource)
import 'element-ui/lib/theme-default/index.css'
//引入全局的base文件
require('./style/app.scss')
import routes from './router/index.js'
const router=new VueRouter({
  mode:'history',
  routes:routes
});
// import store from './store'
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
