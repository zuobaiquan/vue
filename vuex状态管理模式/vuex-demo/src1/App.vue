<template>
  <div id="app">
    <h3>welcome src1</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击+" @click="clickOdd">
    <input type="button" value="点击异步" @click="clickAsync">

    <div>
      现在数字为: {{count}}, 它现在是 {{getOdd}}
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default{
    computed:mapGetters([
      'count',
      'getOdd'
    ]),
    methods:mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickAsync'
    ])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
