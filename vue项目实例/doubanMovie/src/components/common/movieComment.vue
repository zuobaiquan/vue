<template>
  <div class="movie-comment">
    <p class="movie-comment-title">{{title}}的短评 · · · · · ·</p>
    <p>没有豆瓣数据权限</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        msg: 'hello vue'
      }
    },
    mounted () {
    //  this.$store.dispatch('getMovieComment')
    },
    computed: {
      ...mapGetters([
        'movieComment'
      ])
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .movie-comment{
    float: left;
    clear: both;
    margin-top: 20px;
    .movie-comment-title{
      color: #007722;
      font-size: 16px;
    }
  }
</style>
