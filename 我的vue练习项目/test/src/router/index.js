import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/MainSec.vue'
import User from '../components/Userinfo.vue'

export default
	[
		{
      path:'/',
      component:Home
    },
    {
      path: '/user/:name',
      name: 'User',
      component:User
    }
	]
