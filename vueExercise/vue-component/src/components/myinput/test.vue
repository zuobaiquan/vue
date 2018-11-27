<template>
  <div>
    <div class="input-box">
      <myInput placeholder="正常输入文本类型" />
    </div>
    <div class="input-box">
      <myInput placeholder="输入文本带星加密类型" :star=true />
    </div>
    <div class="input-box">
      <myInput placeholder="文本带星加密并且靠右输入类型"  :right=true :star=true />
    </div>
  </div>
</template>
<script>
import myInput from './input.vue'
export default {
  name: 'myinput',
  data(){
    return {

    }
  },
  methods:{

  },
  components:{
    myInput
  },
  computed: {

  }
}
</script>
<style media="screen" lang="scss">
*{margin:0;padding:0;}
input{
  border:0;
  outline: none;
}
.input-box{
  width: 90%;
  margin:10px auto;
  height: 35px;
  display: flex;
  align-items: center;
  border:1px solid #e5e5e5;
}
</style>
