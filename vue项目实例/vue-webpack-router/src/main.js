import Vue from 'vue'
import VueRouter from "vue-router"
import Hello from './components/hello.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Blog from './components/blog.vue'
import Music from './components/music.vue'
import Album from './components/ablum.vue'
import AlbumDetail from './components/subComponent/albumDetail.vue'
import News from './components/News.vue'
import Message from './components/message.vue'
import NewsDetail from './components/NewsDetail.vue'

Vue.use(VueRouter)


const routes = [{
	path: '/Album',
	component: Album,
	children: [{
		name: 'albums',
		path: 'albums/:id',
		component: AlbumDetail
	}]
}, {
	path: '/Music',
	component: Music
}, {
	path: '/Blog',
	component: Blog
}, {
	path: '/Hello',
	component: Hello
}, {
	path: '/Home',
	component: Home,
	children: [{
		path: 'news',
		component: News,
		children: [{
			name: 'detail',
			path: 'detail/:id',
			component: NewsDetail
		}]
	}, {
		path: 'message',
		component: Message
	}]
}, {
	path: '/About',
	component: About
}];
// routes.linkActiveClass = 'active';
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

const App = Vue.extend(require('./App.vue'))

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');


//获取flickr的照片
// $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=56a8221a406f0c4f150601ed15512173&user_id=146067095@N06&format=json', function(result) {
// 	$.each(result, function(i, val) {
// 		console.log('test');
// 		console.log(val);
// 	})
// })

// import routes from './router-config.js'
// import App from './App.vue'
// import index from './App.vue'
// import list from './components/hello.vue'
// import hello from './components/hello.vue'
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 vue.use(vuerouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来

// const Foo = {
// 	template: '<div>foo</div>'
// }
// const Bar = {
// 	template: '<div>bar</div>'
// }


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

// 定义在routeConfig中

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。

// const router = new VueRouter({
// 	routes // （缩写）相当于 routes: routes
// })


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能



// const app = new Vue({
// 	router
// }).$mount('#app')


// 现在，应用已经启动了！