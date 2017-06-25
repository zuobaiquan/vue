<template>
  <div>
    <div class="mod_header">
      <div class="section_inner">
        <h1 class="qqmusic_title">
          <router-link to="/">
            <img class="qqmusic_logo" src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png" alt="qqmusic">
          </router-link>
        </h1>
        <ul class="mod_top_nav">
          <li class="top_nav__item top_nav__item--room">
            <router-link class="top_nav_link" :class="{'top_nav_link--current': linkIndex==1}" to="/">音乐馆</router-link>
          </li>
          <li class="top_nav__item top_nav__item--mine">
            <router-link class="top_nav_link" :class="{'top_nav_link--current': linkIndex==2}" to="/myMusic">我的音乐</router-link>
          </li>
          <li class="top_nav__item top_nav__item--down">
            <router-link class="top_nav_link" :class="{'top_nav_link--current': linkIndex==3}" to="resume">关于我</router-link>
          </li>
        </ul>
        <ul class="mod_top_subnav">
          <li class="top_subnav__item" >
            <router-link to="/" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==1}">首页</router-link>
          </li>
          <li class="top_subnav__item" >
            <router-link  to="/singer" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==2}">歌手</router-link>
          </li>
          <li class="top_subnav__item" >
            <router-link  to="/cd" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==3}">专辑</router-link>
          </li>
          <li class="top_subnav__item" >
            <router-link  to="/mv" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==4}">MV</router-link>
          </li>
        </ul>
        <div class="mod_top_search" @mouseout="schleave">
          <div class="mod_search_input">
            <input type="text" class="search_input__input" v-model="keyword" placeholder="先搜一下好吗？" @click="dropmenu">
            <button class="search_input__btn">
              <i class="icon_search" @click="search(keyword)"></i>
              <span class="icon_text"></span>
            </button>
          </div>
          <div class="js_smartbox">
            <div class="mod_search_other" :class="drop?'drop':''">
              <div class="search_hot">
                <dl class="search_hot__list">
                  <dt class="search_hot__tit">热门搜索</dt>
                  <dd>
                    <a href="javascript:;" class="search_hot__link js_smartbox_search
                      js_left" data-name="">
                        <span class="search_hot__number">1</span>
                        <span class="search_hot__name">鹿晗</span>
                        <span class="search_hot__listen">100.6万</span>
                    </a>
                    <a href="javascript:;" class="search_hot__link js_smartbox_search
                      js_left" data-name="">
                        <span class="search_hot__number">2</span>
                        <span class="search_hot__name">薛之谦</span>
                        <span class="search_hot__listen">80.6万</span>
                    </a>
                    <a href="javascript:;" class="search_hot__link js_smartbox_search
                      js_left" data-name="">
                        <span class="search_hot__number">3</span>
                        <span class="search_hot__name">周杰伦</span>
                        <span class="search_hot__listen">78.6万</span>
                    </a>
                    <a href="javascript:;" class="search_hot__link js_smartbox_search
                      js_left" data-name="">
                        <span class="search_hot__number">4</span>
                        <span class="search_hot__name">bigbang</span>
                        <span class="search_hot__listen">66.6万</span>
                    </a>
                  </dd>
                </dl>
              </div>
              <div class="search_history">
                <dl class="search_history__list">
                  <dt class="search_history__tit">
                    搜索历史
                    <a href="" class="search_history__clear js_smartbox_delete_all">
                      <i class="icon_history_clear"></i>
                      <span class="icon_txt">清空</span>
                    </a>
                  </dt>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="header__opt">
          <span class="mod_top_login">
            <img class="avatar" v-show='isLogin?true:false'
              src="https://p.qpic.cn/music_cover/Q5MtyhqyicZRIFMHk9v3tflKkLNRVG0opUMd0rm0Oe6U3iam0Es6pd3Q/300?n=1" alt="">
            <a href="#" class="top_login__link js_login" @click="login" v-show='isLogin?false:true'>登录</a>
            <a href="#" class="mod_btn_green top_login__btn_vip js_openvip">开通绿钻豪华版</a>
            <a href="#" class="mod_btn top_login__btn_vip js_openmusic">开通付费包</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
  export default {
    data () {
      return {
        drop: false,
        keyword: '',
        isLogin: false
      }
    },
    mounted () {
      console.log(this.$route.path)
      console.log(this.$store.state)
    },
    computed: {
      linkIndex () {
        return this.$store.state.linkIndex
      },
      tagLink () {
        return this.$store.state.tagLink
      }
    },
    methods: {
      search: function (keyword) {
        if (keyword.trim()) {
          console.log('获得数据')
          this.axios.get(`http://182.254.147.168:3000/search?keywords=${keyword}`)
            .then(res => {
              // console.log(res.data.result.songs);
              this.$store.commit('save_songList', res.data.result.songs)
              this.$router.push({path: '/artList', query: {keyword: this.keyword}})
            })

        } else {
          alert('请输入好吗?')
        }
      },
      schleave: function () {
        setTimeout(
          () => {
            this.drop = false
          }, 1000)
      },
      dropmenu: function () {
        this.drop = true
      },
      login: function() {
        console.log(!this.$store.state.isLogin);
        this.isLogin =!this.$store.state.isLogin
      }
    }
  }
</script>

<style lang="css" scoped>
  @import "./style/header.css";
</style>
