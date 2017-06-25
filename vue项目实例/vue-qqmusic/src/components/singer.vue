<template>
  <div class="main">
    <div class="singer-nav">
      <div class="singer-nav-cont"></div>
      <ul class="singer-nav-tag">
        <li class="tag-all">全部</li>
        <li>华语男</li>
        <li>华语女</li>
        <li>华语组合</li>
        <li>韩国男</li>
        <li>韩国女</li>
        <li>欧美男</li>
        <li>欧美女</li>
        <li>欧美组合</li>
        <li>其他</li>
      </ul>
    </div>
    <ul>
      <li v-for="item in this.singer" class="hot">
        <div class="hot-singer">
          <img :src="item.picUrl" alt="">
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        singer: ''
      }
    },
    computed () {
    },
    mounted() {
      this.$store.commit('changeTagIndex', 2)

      this.axios.get(`http://182.254.147.168:3000/top/artists`)
        .then(res => {
          res.data.artists.map(item => {
            this.$store.commit('save_singer', res.data.artists)
          })
        })
      this.singer = this.$store.state.singer
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    height: 2770px;
    opacity: .95;
    position: relative;
    background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_singer.jpg);
    color: #fff;
    ul {
      margin: 0 auto;
      height: 100%;
      max-width: 1200px;
    }
    .singer-nav {
      max-width: 1200px;
      height: 200px;
      margin: 0 auto;
      padding: 40px 0;
      .singer-nav-cont {
        width: 494px;
        height: 60px;
        background: url(https://y.gtimg.cn/mediastyle/yqq/img/singer_tit.png?max_age=2592000&v=249247c5ab05c2a5833fdb4132d36331);
        background-repeat: no-repeat;
        background-position: 0 0;
        margin: 30px auto;
      }
      .singer-nav-tag {
        display: block;
        height: 80px;
        margin: 20px 20px;
        text-align: center;
        .tag-all {
          width: 60px;
          height: 35px;
          background-color: #31c27c;
          &:hover {
            color: #fff;
          }
        }
        li {
          margin-left: 30px;
          margin-top: 10px;
          font-size: 20px;
          float: left;
          line-height: 35px;
          &:hover {
            color: #31c27c;
            cursor: pointer;
          }
        }
      }
    }
  }
  .hot {
    overflow: hidden;
    text-align: center;
    float: left;
    width: 20%;
    height: 240px;
    .hot-singer {
      background-color: rgba(128, 128, 128, .7);
      height: 210px;
      width: 210px;
      margin-left: 12px;
      border-radius: 8px;
    }
    img {
      width: 120px;
      height: 120px;
      margin-top: 20px;
      border-radius: 99px;
      box-sizing: border-box;
      &:hover {
        border: 1px solid rgb(0, 0, 0);
        cursor: pointer;
        opacity: .9;
        transform: rotate(360deg);
        transition: 2s ease-out;
      }
    }
    p {
      margin-top: 10px;
      &:hover {
        cursor: pointer;
        color: #31c27c;
      }
    }
  }
</style>
