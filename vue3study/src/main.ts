import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'

// console.log('store', store.state.count)
// store.commit('add')
// console.log('store', store.state.count)
const app = createApp(App)
app.use(plugins)
app.use((vue) => {
  vue.config.globalProperties.$myProperty = '测试全局属性'
  vue.config.globalProperties.formatPhone = (phone:string) => {
    return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
  }
})
app.use(store).use(router).mount('#app')
