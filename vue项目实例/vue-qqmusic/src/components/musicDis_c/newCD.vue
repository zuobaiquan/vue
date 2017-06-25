<template>
  <div class="mod_index mod_index--new mod_slide_box"
    style="background: #000 url(https://y.gtimg.cn/mediastyle/yqq/img/bg_index_new.jpg) 50% 0 repeat-x;"
   id="albumlist_box" @mouseover="arrow" @mouseout="arrowL">
    <div class="section_inner" >
      <div class="index__hd">
        <h2 class="index__tit">
          <i class="index__tit_sprite"></i>
          <i class="icon_txt">新碟首发</i>
        </h2>
        <i class="index__line index__line--left"></i>
        <i class="index__line index__line--right"></i>
      </div>
      <a href="y.qq.com/portal/album_lib.html#stat=y_new.index.album.more"
        class="index__more index__more--white js_album_more">
        全部
        <i class="icon_index_arrow"></i>
      </a>
      <div class="mod_index_tab">
        <a href="" class="index_tab__item js_tab" v-for="item in navList">{{item}}</a>
      </div>
      <el-carousel :interval="5000" arrow="always" indicator-position="outside" height="450px" >
        <el-carousel-item v-for="item in 4" :key="item"">
          <div class="mod_playlist mod_slide">
            <ul class="playlist__list slide__list" id="albumlist" style="left:-1200px;">
              <li class="playlist__item slide__item" v-for="item in playList">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover">
                    <a href="" class="js_album">
                      <img :src='item.src' alt=""
                        class="playlist__pic">
                      <i class="mod_cover__mask"></i>
                      <i class="mod_cover__icon_play js_play"></i>
                    </a>
                  </div>
                  <h4 class="playlist__title">
                    <span class="playlist__title_txt">
                      <a href="" class="js_album">{{item.title}}</a>
                    </span>
                    <a href="#" class="btn_opera_menu js_albumlist_more">
                      <span class="icon_txt">更多</span>
                    </a>
                  </h4>
                  <div class="playlist__author">
                    <a href="#" class="js_singer">{{item.name}}</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: ['内地', '港台', '欧美', '韩国', '日本'],
        playList: [
          {
            src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000mbhaG00NiAJ.jpg?max_age=2592000',
            title: '望',
            name: '张碧晨'
          },
          {
            src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000klxir01BBlq.jpg?max_age=2592000',
            title: '揭穿',
            name: '黄子韬'
          },
          {
            src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004ScoT0orlN2.jpg?max_age=2592000',
            title: '金曲捞 第七期',
            name: '金曲捞'
          },
          {
            src: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001B4oow41ntZj.jpg?max_age=2592000',
            title: '从心出发',
            name: '庄心妍'
          }
        ]
      }
    },
    methods: {
      arrow: function () {
        const sab = document.querySelectorAll('.slide_action__btn')
        for (var i = 0; i < sab.length; i++) {
          sab[i].style.transform = 'translatex(0)'
        }
      },
      arrowL: function () {
        const sab = document.querySelectorAll('.slide_action__btn')
        sab[0].style.transform = 'translatex(-100%)'
        sab[1].style.transform = 'translatex(100%)'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "./style/newCD.scss"
</style>
