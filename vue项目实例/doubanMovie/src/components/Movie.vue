<template>
  <div class="moving">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div id="" class="locat">
        <el-dropdown trigger="click" @command="changeCity">
            <span class="el-dropdown-link">
              [切换城市]
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">{{city.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="hd">
        <h2>影院上映</h2>
        <ul class="tab-hd clearfix">
          <li class="on">正在上映</li>
        </ul>
      </div>
    </div>
    <div class="content-container">
      <MoviesTag :data="this.movingData"></MoviesTag>
      <div class="aside">
        <div class="aside-top">
          <ul>
            <li>
              <a class="bg-hover">豆瓣电影评分八问</a>
            </li>
          </ul>
        </div>
        <img src="../assets/adv.jpg" width="300" height="250" />
        <div class="aside-top">
          <h2> 电影活动 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;· </h2>
          <ul>
            <li>
              <a class="bg-hover">《异星觉醒》指缝观影，挑战心理极限！</a>
            </li>
            <li>
              <a class="bg-hover">有奖 | 给憋神们支个招 #告白支招#</a>
            </li>
            <li>
              <a class="bg-hover">燃！《亚瑟王》首批观众点评滚烫来袭</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MoviesTag from './common/moviesTag.vue'
export default {
  name: 'movie',
  data () {
    return {
      citys: [
        {
          name: '北京'
        },
        {
          name: '上海'
        },
        {
          name: '广州'
        },
        {
          name: '深圳'
        },
        {
          name: '杭州'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('MOVING_LOADING', {loading: true})
    this.$store.dispatch('getMoving')
  },
  methods: {
    changeCity(command) {
      this.$store.commit('MOVING_LOADING', {loading: true})
      this.$store.commit('MOVIE_CITY', {city: command})
      this.$store.dispatch('getMoving')
    }
  },
  components: {
    MoviesTag
  },
  computed: {
    ...mapGetters([
      'movingData',
      'city'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../style/color";
@import "../../style/base";
.moving {
  margin-bottom: 20px;
  p {
    color: red;
  }
  .tit {
    width: 950px;
    margin: 0 auto;
    margin-top: 20px;
    h1 {
      display: inline-block;
      width: 126px;
      font-size: 20px;
      color: #000;
    }
    .locat {
      position: relative;
      display: inline-block;
    }
    .hd{
      border: none;
      margin: 15px 0;
    }
  }
  .content-container{
    width: 950px;
    overflow: hidden;
    margin: 10px auto;
    padding-bottom: 20px;
    .aside{
      width: 300px;
      float: right;
      padding-top: 20px;
      img{
        margin: 20px 0;
      }
      .aside-top{
        background-color: #f2f7f6;
        border-radius: 4px;
        padding: 6px 0 6px 18px;
        li{
          color: @doubanColor;
          margin: 10px 0;
        }
        h2{
          color:#072;
          font-size: 15px;
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
