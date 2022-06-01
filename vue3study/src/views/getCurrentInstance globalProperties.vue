<template>
  <div class="home">
    1
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, getCurrentInstance, ComponentInternalInstance } from 'vue'
export default defineComponent({
  components: {

  },
  setup() {
    // getCurrentInstance 返回的就是当前组件的实例
    // 注意 Vue3获取当前组件实例的 getCurrentInstance 方法上 ctx 生产获取不到上面的全局方法

    const { proxy: ctx } = getCurrentInstance() as ComponentInternalInstance
    console.log('ctx', ctx)
    console.log('ctx', ctx?.$myProperty)
    console.log('ctx', ctx?.showText)
    console.log(ctx?.formatPhone('13500000001'))

    console.log(123456,ctx?.$router)
    // setup 函数里如何拿到 vue-router 的$router，$route
    // 拿到  $router
    const $router2 = useRouter()
    console.log('$router',$router2)

    const $route3 = useRoute()
    console.log('$route3',$route3.query)

  }
})
</script>
