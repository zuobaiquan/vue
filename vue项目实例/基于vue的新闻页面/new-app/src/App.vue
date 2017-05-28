<template>
<div id="app">
    <NavHeader></NavHeader>
    <router-view class="router-view"></router-view>
    <FooterView></FooterView>
</div>
</template>

<script>

import NavHeader from './components/Nav.vue'
import FooterView from './components/Footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      NavHeader,
      FooterView
  }
}
</script>

<style>
.router-view{
    margin-top:2rem;
}
</style>
