<template>
  <div>
      <range @rightChange="rightChange" @leftChange="leftChange"></range>
      {{salary}}
  </div>
</template>
<script>
import range from './index.vue'
export default {
  name: 'Range',
  data(){
    return {
      leftText: '',
      rightText: '',
    }
  },
  methods:{
    leftChange(value) {
      this.leftText = value;
    },
    rightChange(value) {
      this.rightText = value;
    }
  },
  components:{
    range
  },
  computed: {
    salary() {
      if (this.leftText === '不限' && this.rightText === '不限') return '不限';
      if (!this.leftText) return '不限';
      return `${this.leftText}-${this.rightText}`;
    }
  }
}
</script>
<style media="screen" lang="scss">

</style>
