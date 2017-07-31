import Vue from 'vue'
//import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/animate.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'

//Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)

//引入自定义组件

import slide from './components/public/slide.vue'
import backup_header from './components/public/backup_header.vue'
import home from './components/page/home.vue'
import article from './components/page/article.vue'
import weather_search from './components/page/weather_search.vue'
import weather from './components/page/weather.vue'
import weather_all from './components/page/weather_all.vue'
import hot_point from './components/page/hot_point.vue'
import article_list from './components/page/article_list.vue'
import index_main from './components/home/index_main.vue'
import index_swipe from './components/home/index_swipe.vue'
import index_header from './components/home/index_header.vue'
import weather_form from './components/part/weather_form.vue'
import article_main from './components/part/article_main.vue'


const router = new VueRouter({
	mode : 'hash',
	base : __dirname,
	routes : [
		{
			path : '/',
			component : home,
			children : [
				{
					path : '',
					components : {
						index_header,
						slide,
						index_main,
						index_swipe
					}
				}
			]
		},
		{
			path : '/article',
			component : article,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/weather_search',
			component : weather_search,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/weather',
			component : weather,
			children : [
				{
					path : '',
					components : {
						backup_header,
						weather_form
					}
				}
			]
		},{
			path : '/weather_all',
			component : weather_all,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/hot_point',
			component : hot_point,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/article_list',
			component : article_list,
			children : [
				{
					path : '',
					components : {
						backup_header,
						article_main,
					}
				}
			]
		}
	]
})
//每次进入新组件后滚动条回到顶部
router.afterEach(function(to){
	window.scrollTo(0,0)
});



new Vue({
	el: '#app',
	router : router,
	store,
	render: h => h(App)
})
