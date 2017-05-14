<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input type="button" @click="change" value="点击我">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'zuobaiquan'
    }
  },
  methods:{
    change(){
      var str=this.msg;
      str=str.split('').reverse().join("-");
      this.msg=str;
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
