
import '@/styles/index.less' // global css

import Vue from 'vue'

import App from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
