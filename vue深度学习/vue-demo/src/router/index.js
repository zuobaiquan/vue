import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testView',
      component: () => import('@/views/test')
    },
    {
      path: '/watch',
      name: 'watchView',
      component: () => import('@/views/watchDemo')
    }
  ]
})
