<template>
  <div class="index-container">
    a: {{ a }} b:{{ b }}
  </div>
</template>

<script>
import { formatNum } from '@/utils/util'

export default {
  data() {
    return {
      a: '',
      b: ''
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    console.log(111, formatNum(1))
    // const a = [1, 2, 3].includes(1)
    // this.a = a

    // const sum = (a, b) => a + b

    // // 新的 API
    // Promise.resolve(100).then(data => data);

    // // 新的 API
    // [10, 20, 30].includes(20)

    // this.b = sum(1, 5)
  },
  destroyed() {
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
