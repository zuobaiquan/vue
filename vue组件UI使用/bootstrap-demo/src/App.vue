<template>
  <div id="app">
    <button class="btn btn-default">普通按钮</button>
    <button class="btn btn-danger">普通按钮</button>
    <div class="row">
      <div class="col-sm-8 my-border">8</div>
      <div class="col-sm-4 my-border">4</div>
    </div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my-border{
    border:1px solid #000;
}
</style>
