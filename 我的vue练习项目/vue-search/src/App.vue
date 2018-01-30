<template>
  <div id="app">
    <panel></panel>
  </div>
</template>

<script>
import panel from './components/search-panel.vue';

export default {
  components: {
    panel
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  background:url('./assets/background.png') no-repeat;
  background-size: 100% 100%
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
