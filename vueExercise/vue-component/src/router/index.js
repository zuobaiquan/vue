import Vue from 'vue'
import Router from 'vue-router'
import parent01 from '@/components/01/parent'
import parent02 from '@/components/02/parent'
import parent03 from '@/components/03/parent'
import testcustom from '@/components/custom/test'
import testmixins from '@/components/mixins/mixins'

import message from '@/components/message/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/01',
      name: 'parent01',
      component: parent01
    },
    {
      path: '/02',
      name: 'parent02',
      component: parent02
    },
    {
      path: '/03',
      name: 'parent03',
      component: parent03
    },
    {
      path: '/custom',
      name: 'custom',
      component: testcustom
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/mixins',
      name: 'mixins',
      component: testmixins
    },
    {
      path: '/range',
      name: 'range',
      component: () => import('@/components/range/test')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('@/components/myinput/test')
    }
  ]
})
