import Vue from 'vue'
import Router from 'vue-router'

import bargraph from '@/views/bargraph/index'
import vueset1 from '@/views/vue-set/index01'
import vueset2 from '@/views/vue-set/index02'
import swiper from '@/views/swiper/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bargraph',
      name: 'bargraph',
      component: bargraph
    },
<<<<<<< HEAD
    // {
    //   path: '/vueset1',
    //   name: 'vueset1',
    //   component: vueset1
    // }
=======
    {
      path: '/vueset1',
      name: 'vueset1',
      component: vueset1
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    }
>>>>>>> 91ea3d0b76d8533031fb1c1f2e9d49519edb0368
  ]
})
