<template>
  <div id="app">
      <cnodeHead></cnodeHead>
      <router-view></router-view>
  </div>

</template>

<script>
import cnodeHead from './components/cNodeHeader.vue';
export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
        cnodeHead
    }
};
</script>

<style lang="scss">

</style>
