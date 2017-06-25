<template>
  <div id="app">
    <div class="inner">
      <nav class="nav">
        <div class="logo"></div>
        <div class="item">
          <router-link to="/index" class="title">首页</router-link>
        </div>
        <div class="item">
          <router-link to="/enroll" class="title">赛事报名</router-link>
        </div>
        <div class="item">
          <router-link to="/equip" class="title">跑步装备</router-link>
        </div>
        <div class="item">
          <router-link to="/column" class="title">益跑专栏</router-link>
        </div>
      </nav>
      <keep-alive>
          <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import footer from './components/footer/footer.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },

  components: {
    'v-footer':footer
  }
}
</script>

<style lang="scss">
#app{
  .inner{
    width: 1200px;
    margin: 0 auto;
    .nav{
      height: 80px;
      background: #fff;
      font-size: 0;
      .logo{
        display: inline-block;
        vertical-align: top;
        width: 112px;
        height: 38px;
        margin-top: 23px;
        margin-right: 59px;
        background: url('./assets/logo.png');
        background-size: cover;  
      }
      .item{
        display: inline-block;
        height: 17px;
        line-height: 80px;
        font-size: 17px;
        margin-right: 28px;
        .title{
          color: #87a5b3;
        }
      }
    }
  }
}
</style>
