<template>
  <div class="child01">
      <child-box :username="zuobaiquan"></child-box>
  </div>
</template>
<script>
import childBox from './child.vue'
export default {
  name: 'child01',
  data () {
    return {
      zuobaiquan:'zuobaiquan'
    }
  },
  components:{
    'child-box':childBox
  }
}
</script>
