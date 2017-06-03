import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import routerconfig from './routeConfig.js'
import filters from './filters'
import Loading from './components/loading'

//引入全局的base文件
require('./assets/css/base.css');

//之所以这里能够install，是因为定义时有 install
Vue.use(Loading)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(VueRouter);
const router=new VueRouter({
    routes:routerconfig
});


//axios.interceptors.request.use();发送请求配置
//axios.interceptors.response.use();接受请求配置
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    return response;
}, function (error) {
    return Promise.reject(error);
});
//其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
