
<template>
  <div class="home">
    1
  </div>
</template>

<script lang="ts">
// defineComponent 是个函数，为了服务ts的
// 在 ts 中，为组件 提供正确的参数类型推断，代码提示
import { defineComponent } from 'vue'
const component =
 defineComponent({
   name: 'HelloWorld',
   props: {
     msg: {
       required: true,
       type: String
     }
   },
   setup(props, context) {
     console.log(props.msg)
     // context.attrs
     // context.slots
     // context.emit
     //  context.expose
     console.log(context)
   }
 })
export default component
</script>
