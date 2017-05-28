import Vue from 'vue'
import App from './App.vue'

import Loading from './components/loading'
//之所以这里能够install，是因为定义时有 install
Vue.use(Loading)
new Vue({
  el: '#app',
  render: h => h(App)
})
