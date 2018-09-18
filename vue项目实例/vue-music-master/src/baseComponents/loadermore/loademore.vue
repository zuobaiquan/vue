<template>
  <div v-if='hasMore' ref="loaddiv" v-show="!isLoading" v-on:click="dispachload()" class="loaddiv">上拉加载更多</div>
  <div class="loaddiv" v-else>我是有底线的</div>
</template>

<script type="text/ecmascript-6">
export default{
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    hasMore: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dispachload () {
      this.$emit('loadmore')
    }
  }
}

</script>

<style>
 .loaddiv{
    text-align: center;
    line-height: 1rem;
  }
</style>
