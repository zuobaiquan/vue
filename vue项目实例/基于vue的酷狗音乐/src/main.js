// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/js/fontSize'
import './assets/css/reset.css'
import './assets/css/animated.css'
import './assets/css/mint_reset.css'

Vue.use(VueResource)
Vue.use(mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
