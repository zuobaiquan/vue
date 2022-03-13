import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils'
import mUI from './components'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
// el-icon-xx
for(let i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}
app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
