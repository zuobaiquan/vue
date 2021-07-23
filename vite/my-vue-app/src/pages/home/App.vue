<template>
  <div class="wrapper">
    <span>我是 home 页面</span>
    <div @click="handleClick">{{message}}</div>
    <HelloWorld />
    <img :src="require('@/assets/logo.png')" alt="">
  </div>
</template>
<script>
require('@/assets/js/rem.js')
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      message:'123456'
    };
  },
  components:{
    HelloWorld
  },
  methods:{
    handleClick(){
      this.message = '12'
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  div{
    color:red;
    background: url('../../assets/logo.png') no-repeat;
  }
}
</style>
