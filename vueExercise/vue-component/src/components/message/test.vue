<template>
  <div>
    <label id="msgbox" @click.stop="showMsgbox">点击我显示msgbox</label>
  </div>
</template>
<script>
import Vue from 'vue'
import vMessage from './index' 
Vue.use(vMessage)
export default {
  name: 'test',
  data(){
    return {

    }
  },
  methods:{
    showMsgbox(){
       this.$message.info('普通消息') 
	   this.$message.error('错误消息') 
	   this.$message.warning('警告消息') 
	   this.$message.success('成功消息')
    }
  }
}
</script>
<style media="screen" lang="scss">

</style>
