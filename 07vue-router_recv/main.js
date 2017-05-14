import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import News from './components/News.vue'

import routerConfig from './router.config.js'

Vue.use(VueRouter);//使用路由必不可少

//配置路由
const router=new VueRouter();


//把路由单独写一个配置文件
router.map(routerConfig);
//router.map({
	//'home':{
	//	component:Home
	//},
	//'news':{
	//	component:News
	//}
//});

//初次加载跳转到/home
router.redirect({
	'/':'/home'
});

router.start(App,'#app');





