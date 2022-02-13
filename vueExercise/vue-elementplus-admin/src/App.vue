<template>
  <router-view></router-view>
</template>

<script setup>
// 在刷新页面后，新主题会失效
// 应用加载后，写入 `style` 即可
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { watchSwitchLang } from '@/utils/i18n'

/**
 * 监听 语言变化，重新获取个人信息
 */
watchSwitchLang(() => {
  if (store.getters.token) {
    store.dispatch('user/getUserInfo')
  }
})
const store = useStore()
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})
</script>

<style></style>
