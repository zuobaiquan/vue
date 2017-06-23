<template>
  <div id="app">
     <router-view></router-view>
     <router-view name="search"></router-view>
     <router-view name="rankListInfo"></router-view>
     <router-view name="songListInfo"></router-view>
     <router-view name="singerListInfo"></router-view>
     <router-view name="singerInfo"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  min-height: 100%;
}
</style>
