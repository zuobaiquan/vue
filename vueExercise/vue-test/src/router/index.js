import Vue from 'vue'
import Router from 'vue-router'

import bargraph from '@/views/bargraph/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bargraph',
      name: 'bargraph',
      component: bargraph
    }
  ]
})
