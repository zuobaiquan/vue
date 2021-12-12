import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'
console.log('store', store.state.count)
store.commit('add')
console.log('store', store.state.count)
createApp(App).use(store).use(router).mount('#app')
