<template>
  <div class="jzxer">
    <div class="mask"></div>
    <div class="content">
      <div class="jzxer-avatar">
        <div class="jzxer-avatar-pic">
          <img src="https://avatars0.githubusercontent.com/u/21166338?v=3&s=460" alt="">
        </div>
        <div class="jzxer-avatar-about">
          <span>江志雄</span>
          <p>向往诗歌和远方</p>
          <p>技术栈：vue vuex vue-router element-UI scss</p>
          <p>Email: 710328466@qq.com</p>
          <a href="https://github.com/j710328466">gitHub</a>
          <br>
          <a href="http://jzxer.cn/">Blog</a>
        </div>
      </div>
      <div class="jzxer-desc">
        <h1>大三求前端实习中...</h1>
        <div><p>rocker. JS</p></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted() {
      this.$store.commit('changeLinkIndex', 3)
    }
  }
</script>

<style lang="scss" scoped>
  .jzxer {
    width: 100%;
    height: 666px;
    position: relative;
    z-index: 1;
    background: url(https://y.gtimg.cn/mediastyle/music_svip/img/gallery/banner_thumb_1.jpg?max_age=2592000) center center;
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: rgba(0, 0, 0, .2);
    }
    .content {
      position: relative;
      color: #fff;
      margin: 0 auto;
      max-width: 1200px;
      height: 100%;
      z-index: 3;
    }
  }
  .jzxer-avatar {
    position: relative;
    width: 40%;
    z-index: 10;
    height: 100%;
    float: left;
    background-color: rgba(244, 244, 244, .2);
    .jzxer-avatar-pic {
      text-align: center;
    }
    img {
      margin-top: 50px;
      height: 180px;
      width: 180px;
      border-radius: 10px;
      z-index: 999;
    }
    .jzxer-avatar-about {
      text-align: center;
      text-shadow: 2px 2px 4px rgb(20, 20, 20);
      span {
        font-size: 40px;
      }
      p {
        line-height: 50px;
        font-size: 20px;
      }
    }
  }
  .jzxer-desc {
    width: 60%;
    height: 100%;
    float: right;
    h1 {
      text-align: center;
      font-size: 48px;
      padding-top: 50px;
      width: 100%;
      /*height: 300px;*/
      text-shadow: 2px 2px 4px rgb(20, 20, 20);
    }
    p {
      display: block;
      text-align: center;
      font-size: 40px;
      text-shadow: 2px 2px 4px rgb(20, 20, 20);
    }
  }
</style>
