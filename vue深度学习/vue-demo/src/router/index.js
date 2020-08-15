import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/test')
    },
    {
      path: '/watch',
      component: () => import('@/views/watchDemo')
    },
    {
      path: '/computed',
      component: () => import('@/views/computedDemo')
    },
    {
      path: '/customVModel',
      component: () => import('@/views/CustomVModel/index')
    },
    {
      path: '/nextTick',
      component: () => import('@/views/NextTick')
    }
  ]
})
