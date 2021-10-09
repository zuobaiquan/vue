import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'homeindex',
    component: () => import('@/views/index'),
    meta: { title: '首页', icon: 'home' }
  }
]

export default new Router({
  // 常规路由表
  mode: 'hash',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRouterMap
})
