<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0 ;
  padding:0;
  font-size: 14px;
}
.pop-mask{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  transition: all 0.3s;
  background:rgba(0,0,0,0.3);
  z-index: 1;
}
</style>
