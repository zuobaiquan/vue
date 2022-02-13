// 在 Vue3中取消了 过滤器的概念，其中：

// 局部过滤器被完全删除
// 全局过滤器虽然被移除，但是可以使用 全局属性 进行替代
// 那么在列表中的时间处理部分，在 vue2 时代通常我们都是通过 全局过滤器 来进行实现的，所以在 vue3 中我们就顺理成章的通过 全局属性 替代实现
import dayjs from 'dayjs'
// 在 发布时间 列中，我们希望展示相对时间，并且希望相对时间具备国际化的能力。那么我们就去需要到 filters 中对 dayjs 进行处理
import rt from 'dayjs/plugin/relativeTime'
// 语言包
import 'dayjs/locale/zh-cn'
import store from '@/store'
export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}
// 加载相对时间插件
dayjs.extend(rt)
function relativeTime (val) {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  // 相对时间国际化
  return dayjs()
    .locale(store.getters.language === 'zh' ? 'zh-cn' : 'en')
    .to(dayjs(val))
}
export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter,
    relativeTime
  }
}
