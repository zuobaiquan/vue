/**
 * 通过按需导入的createApp方法来构建vue实例
 * 通过vue实例.use方法来挂载插件（router,vuex）
 * 没有了Vue构造方法，无法再挂载原型
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
// 导入 svgicon
import installIcons from './icons'
// 导入路由鉴权
import './permission'
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
// filter
import installFilter from '@/filters'
import installDirective from '@/directives'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)
app.use(i18n).use(store).use(router).mount('#app')
