<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>Hello:{{msg}}</div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
      name: 'dashboard',
      data() {
        return {
          msg: 'world'
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
