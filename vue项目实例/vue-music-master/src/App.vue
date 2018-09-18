<template>
  <div id="app">
    <div class="header">
      <main-header></main-header>
      <tab></tab>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from './components/m_header/m_header.vue'
import Tab from './components/tab/tab.vue'
import Player from './components/player/player.vue'
export default {
  components: {
    'main-header': MHeader,
    'tab': Tab,
    'player': Player
  }
}
</script>

<style>
  @import "./assets/css/reset-min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    z-index: 1;
}
  .content{
    margin-top:94px;
  }

</style>
