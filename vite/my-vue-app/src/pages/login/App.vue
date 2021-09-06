<template>
  <div class="wrapper">
    <span>我是login 页面</span>
    <div>{{message}}</div>
    <HelloWorld />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      message:'123456'
    }
  },
  components:{
    HelloWorld
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  div{
    color:red;
  }
}
</style>
