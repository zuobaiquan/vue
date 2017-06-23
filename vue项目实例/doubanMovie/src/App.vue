<template>
  <div id="app">
    <Dheader></Dheader>
    <transition name="fade">
      <keep-alive exclude-"movieDetail">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Dheader from './header.vue'
export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Dheader
  },
}
</script>

<style lang="less" rel="stylesheet/less">
* {
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
}
</style>
