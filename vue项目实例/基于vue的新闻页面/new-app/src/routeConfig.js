//import Vue from 'vue'

import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'
import Atcdetail from './components/Atcdetail.vue'

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
    path:'/user-info',
    component:UserInfo
  },
  {
    path:'/article/:id',
    component:Article,
    /*children:[
     {
     path:'/:id',
     component:Article
     }
     ]*/
  },
  {
     path:'/atcdetail/:id',
     component:Atcdetail,
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

