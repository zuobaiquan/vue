//import Vue from 'vue'



import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
  },
  { 
    path: '/',
    redirect: '/home' 
  },
  { 
    path: '*', 
    redirect: '/home' 
  }
];

/*const router={
	mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
	routes:[
		{
			path:'/home',
			component:Home
		},
    {
      path:'/follow',
      component:Follow
    },
    {
      path:'/column',
      component:Column
    },
		{ 
      path: '/', 
      redirect: '/home' 
    }
	]
};*/

//export default new VueRouter(router);

