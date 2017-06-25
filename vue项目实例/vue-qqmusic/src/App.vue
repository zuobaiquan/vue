<template>
  <div id="app">
    <v-head></v-head>
    <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
import vHead from './components/public/header'
import vFoot from './components/public/footer'

export default {
  name: 'app',
  components: {
    // 'v-head': vhead,
    // 'v-foot': vfoot
    vHead,
    vFoot
  },
  mounted () {
    console.log(this.$router)
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    min-width: 1240px;
    overflow-y: scroll;
  }
  body, button, input, select, textarea, th, a{
    color: #000;
    /*background-color: #fff;*/
    font-size: 14px;
    line-height: 1.5;
    font-family: poppin, 'PingFang SC',Tahoma,Arial,sans-serif;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    border: 0 none;
  }
</style>
