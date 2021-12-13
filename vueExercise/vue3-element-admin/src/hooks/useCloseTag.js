import { reactive, toRefs, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

// 关闭当前标签
export default () => {
  const instance = getCurrentInstance()
  const store = useStore()
  const router = useRouter()
  const route = useRoute()
  const state = reactive({
    /**
     * @param {String} fullPath 要跳转到那个页面的地址
     * @param {Boolean} reload 是否在跳转后重新渲染页面组件
     * @param {Boolean} f5 是否在跳转后刷新页面
     * @return {*}
     */
    closeTag({ fullPath, reload, f5 } = {}) {
      store.dispatch('tags/delTag', route)
      fullPath ? router.push(fullPath) : router.back()
      reload &&
        setTimeout(() => {
          instance.appContext.config.globalProperties.$tagsbar.refreshSelectedTag(
            route
          )
        }, 500)

      f5 && setTimeout(() => window.location.reload(), 500)
    },
  })

  return toRefs(state)
}
