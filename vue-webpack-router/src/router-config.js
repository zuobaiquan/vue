import Hello from './components/hello.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
// export default {
// 	'home': {
// 		component: Home
// 	},
// 	'about': {
// 		component: About
// 	}

// }
module.exports = {
	routes: function() {
		return routes = [{
			path: '/Hello',
			component: Hello
		}, {
			path: '/Home',
			component: Home
		}, {
			path: '/About',
			component: About
		}]
	}
}