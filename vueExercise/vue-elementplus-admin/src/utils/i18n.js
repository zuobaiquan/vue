import i18n from '@/i18n'
import {
  watch
} from 'vue'
import store from '@/store'
export function generateTitle (title) {
  return i18n.global.t('msg.route.' + title)
}
// 监听语言变化，重新计算数据源初始化
/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang (...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach(cb => cb(store.getters.language))
    }
  )
}