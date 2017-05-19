import Vue from 'vue'
import Router from 'vue-router'
import showContent from '@/components/showContent'
import detail from '@/components/detail'
//import detailHeader from '@/components/detailHeader'
import message from '@/components/message'
//import messageHeader from '@/components/messageHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show',
      name: 'showContent',
      component: showContent
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component: detail
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
