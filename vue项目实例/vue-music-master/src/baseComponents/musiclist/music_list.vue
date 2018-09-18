<template>
  <iscroll-view ref='scrollView' class='scroll_view' @pullUp="pullUp"  :options="{preventDefault: true}">
    <ul class="music_list">
      <li @click=selectMusic(item,index) v-for="(item, index) in list" v-bind:key="index">
        <h2>{{item.musicData.songname}}</h2>
        <p>{{item.musicData.singer[0].name}}   {{item.musicData.albumdesc}}</p>
      </li>
    </ul>
    <load-more @loadmore="dispachload()" v-bind:isLoading="isLoading" v-bind:hasMore="hasMore"></load-more>
  </iscroll-view>
</template>

<script type="text/ecmascript-6">
import LoadMore from '../../baseComponents/loadermore/loademore.vue'
export default {
  props: {
    list: {
      type: Array,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasMore: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.$refs.scrollView.refresh()
  },
  watch: {
    list: function () {
      this.$refs.scrollView.refresh()
    }
  },
  components: {
    'load-more': LoadMore
  },
  methods: {
    dispachload () {
      this.$emit('loadmore')
    },
    pullUp () {
      this.dispachload()
    },
    selectMusic (item, index) {
      this.$emit('selectMusic', item, index)
    }
  }
}
</script>

<style>
  .music_list li{
    padding: 1rem;
    border-bottom: 1px solid whitesmoke;
  }
  .music_list li h2{
    font-size: 1rem;
  }
  .music_list li p{
    font-size: 0.8rem;
    margin-top: 10px;
    color: orange;
    line-height: 1rem;
  }
  .scroll_view{
    touch-action:none;
    position: fixed;
    left: 0;
    right: 0;
    top: 280px;
    bottom: 0;
    overflow: hidden;
  }
</style>
