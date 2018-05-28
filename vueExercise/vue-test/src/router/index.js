import Vue from 'vue'
import Router from 'vue-router'

import bargraph from '@/views/bargraph/index'
import vueset1 from '@/views/vue-set/index01'
import vueset2 from '@/views/vue-set/index02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bargraph',
      name: 'bargraph',
      component: bargraph
    },
    {
      path: '/vueset1',
      name: 'vueset1',
      component: vueset1
    }
  ]
})
