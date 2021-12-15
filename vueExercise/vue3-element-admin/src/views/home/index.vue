<template>
  <div class="home">home</div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'home',
  setup() {
    const { proxy: ctx } = getCurrentInstance()
    console.log('ctx', ctx)
    ctx.$message.success({
      message: '提示',
      duration: 3000,
    })
  },
})
</script>

<style lang="scss" scoped>
.home {
  color: $mainColor;
}
</style>
