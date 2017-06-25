import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import index from './components/index/index.vue';
import enroll from './components/enroll/enroll.vue';
import equip from './components/equip/equip.vue';
import column from './components/column/column.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from 'vue-lazyload';
// swiper
Vue.use(VueAwesomeSwiper);
// lazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '../static/loading.gif',
  attempt: 1
});
// 路由
Vue.use(VueRouter);
// 配置路由
const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/enroll',
    component: enroll
  },
  {
    path: '/equip',
    component: equip
  },
  {
    path: '/column',
    component: column
  }
];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
