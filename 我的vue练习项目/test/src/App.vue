<template>
  <div id="app">
      <input type="button" value="增加" @click="increment" />
      <div class="">
          现在的数字{{count}}
      </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'app',
  components:{

  },
  data () {
    return {
      msg: 'zuobaiquan'
    }
  },
  computed:mapGetters(['count']),
  methods:mapActions(['increment'])
}
</script>

<style lang="scss">

</style>
