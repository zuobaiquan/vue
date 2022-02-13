// 1. 通过一个变量来控制语言环境
// 2. 所有语言环境下的数据源要预先定义好
// 3. 通过一个方法来获取当前语言下指定属性的值
// 4. 该值即为国际化下展示值

// // 1. 定义 msg 值的数据源
// const messages = {
//   en: {
//     msg: 'hello world'
//   },
//   zh: {
//     msg: '你好世界'
//   }
// }
// // 2. 定义切换变量
// let locale = 'en'
// // 3. 定义赋值函数
// function t(key) {
//   return messages[locale][key]
// }
// // 4. 为 msg 赋值
// let msg = t('msg')
// console.log(msg);
// // 修改 locale， 重新执行 t 方法，获取不同语言环境下的值

import {
  createI18n
} from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import store from '@/store'
// 定义 msg 值的数据源
const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}
// // 2. 定义切换变量
// const locale = 'en'

// 国际化缓存处理
// vuex缓存,LocalStorage缓存
/**
 * 返回当前 lang
 */
function getLanguage () {
  return store && store.getters && store.getters.language
}

// 初始化 i18n实例
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})
export default i18n