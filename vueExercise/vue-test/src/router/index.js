import Vue from 'vue'
import Router from 'vue-router'

import bargraph from '@/views/bargraph/index'
import vueset1 from '@/views/vue-set1/index'
import vueset2 from '@/views/vue-set2/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bargraph',
      name: 'bargraph',
      component: bargraph
    },
    {
      path: '/vueset2',
      name: 'vueset2',
      component: vueset2
    }
  ]
})
