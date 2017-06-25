<template>
  <div class="play">
    <un-login v-show="this.isLogin?false:true"></un-login>
  </div>
</template>

<script>
import unLogin from './myMusic-c/unlogin.vue'
export default {
  data () {
    return {
      isLogin: ''
    }
  },
  components: {
    unLogin
  },
  mounted() {
    this.$store.commit('changeLinkIndex', 2)
    this.$store.commit('changeTagIndex', 1)
  },
  computed() {
    this.isLogin=this.$store.state.isLogin
  }
}
</script>

<style lang="scss">
</style>
