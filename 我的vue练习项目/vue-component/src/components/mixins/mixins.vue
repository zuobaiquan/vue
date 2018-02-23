<template>
<div class="">
  sss
</div>
</template>
<script>
//参考 https://cn.vuejs.org/v2/guide/mixins.html
// 定义一个混合对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!');
    },
    goodBye(){
      console.log('goodbye from mixin!');
    }
  }
}
export default {
  name: 'mixins',
  mixins: [myMixin],
  data(){
    return {

    }
  },
  mounted(){
    this.goodBye();
  },
  methods:{
    //两个对象键名冲突时，取组件对象的键值对。
    goodBye(){
      console.log('goodbye from component!');
    }
  }
}
</script>
<style media="screen" lang="scss">

</style>
