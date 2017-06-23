<template>
  <div class="grid-950 clearfix">
      <article class="container">
        <div class="tit">
          <h1>{{city}}-影讯</h1>
          <div id="" class="locat">
            <el-dropdown trigger="click" @command="changeCity">
              <a class="el-dropdown-link" href="javascript:;">
                [切换城市]
              </a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">{{city.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="hd">
              <h2>影院上映</h2>
              <ul class="tab-hd clearfix">
                  <li class="on">即将上映</li>
              </ul>
          </div>
        </div>
        <div class="two-list" v-loading="this.loadingMoving">
          <ul class="clearfix">
            <li class="item" v-for="(item, index) in this.upcoming.subjects" :key="index">
              <a class="thumb" @click="showDetail(item.id)">
                  <img class="movieImg" :src="item.images.large">
              </a>
              <div class="intro">
                  <h3>
                      <a v-bind:href="item.alt" class="">{{item.title}}</a>
                      <span class="icon"></span>
                  </h3>
                  <ul>
                          <li class="dt">03月17日</li>
                          <li class="dt"><em v-for="it in item.genres">{{it}}/</em></li>
                          <li class="dt">美国</li>
                          <li class="dt last"><span class="">{{item.collect_count}}人想看</span></li>
                          <a href="https://movie.douban.com/trailer/211279/#content" class="trailer_icon">预告片</a>
                          <li>
                              <a href="https://movie.douban.com/subject/25900945/cinema/hangzhou/" class="ticket_btn">
                                  6家影院有影讯 »
                              </a>
                          </li>
                  </ul>
              </div>
            </li>
          </ul>
          <div class="load-more">
            <el-button type="text" @click="moredata" v-show="!pageload && !nodata">加载更多</el-button>
            <el-button type="text" v-show="pageload">加载中...</el-button>
            <el-button type="text" v-show="nodata">没有更多了</el-button>
          </div>
        </div>
      </article>
      <aside class="right-side">
      </aside>
    <!-- <p>{{upcomBody}}</p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'upcoming',
    data () {
      return {
        showCity: false,
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
      ],
      nodata: false
      }
    },
    mounted () {
      this.$store.commit('MOVING_LOADING', {loading: true})
      this.$store.dispatch('getUpcoming')
    },
    methods: {
      changeCity(command) {
        this.$store.commit('MOVIE_CITY', {city: command})
        this.showCity = false
        this,$store.dispatch('getUpcoming')
      },
      moredata() {
        this.$store.commit('PAGE_LOAD', {pageload: true})
        this.$store.dispatch('getUpcoming')
        if (this.upcoming.start * this.upcoming.count > this.upcoming.total) {
          this.nodata = true
        }
      },
      showDetail(id) {
        this.$store.commit('MOVIE_LOADING', {loading: true})
        this.$router.push({ path: '/moviesDetail', query: {id: id} })
      }
    },
    computed: {
      ...mapGetters([
        'upcoming',
        'city',
        'loadingMoving',
        'pageload'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style rel="stylesheet/less" lang="less">
@import '../../style/base.less';
.container{
  float: left;
  width: 590px;
}
.right-side{
  float: right;
  width: 310px;
}
.two-list{
  min-height: 500px;
}
.tit{
    margin-top: 20px;
  h1{
    display: inline-block;
    width: 90px;
    font-size: 20px;
    color: #000;
  }
  .locat{
    position: relative;
    display: inline-block;
  }
}
.locat{
  .cities-list{
    position: absolute;
    left: 0;
    top: 18px;
    padding: 10px;
    background: #fff;
    z-index: 999;
    border: 1px solid #ccc;
    span{
      display: block;
    }
  }
}
.item{
  position: relative;
  float: left;
  padding: 20px 0 20px 120px;
  width: 173px;
  height: 140px;
  border-bottom: 1px dashed #ccc;
}
.item .thumb{
  position: absolute;
  left: 0;
  width: 100px;
  height: 140px;
  overflow: hidden;
  img{
    width: 100%;
    height: 140px;
  }
}
.tab-hd{
  vertical-align: bottom;
  li{
    margin: 0 5px;
    float: left;
  }
  .on{
    background-color: #69c;
    color: #fff;
    padding: 0 10px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
}
.hd{
  padding: 10px 0;
  border-bottom: 1px dashed #ccc;
  h2,.tab-hd{
    display: inline-block;
  }
}
.load-more{
  text-align: center;
}
</style>
