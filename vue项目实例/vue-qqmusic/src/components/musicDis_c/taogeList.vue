<template>
  <div class="mod_index mod_index--new mod_slide_box"
   id="albumlist_box" @mouseover="arrow" @mouseout="arrowL">
    <div class="section_inner" >
      <div class="index__hd">
        <h2 class="index__tit">
          <i class="index__tit_sprite" style="background-position:0 -60px"></i>
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
      <div class="mod_slide_switch js_switch">
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
      </div>
    </div>
    <div class="mod_slide_action" id="mod_slide_action">
      <div class="slide_action slide_action--left">
        <a href="javascript:;" class="slide_action__btn
          slide_action__btn--left js_jump">
            <i class="icon_txt">上一页</i>
            <i class="slide_action__arrow slide_action__arrow--left"></i>
          </a>
      </div>
      <div class="slide_action slide_action--right">
        <a href="javascript:;" class="slide_action__btn
          slide_action__btn--right js_jump">
            <i class="icon_txt">下一页</i>
            <i class="slide_action__arrow slide_action__arrow--right"></i>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        playList: [
          {
            src: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeuUneZQTUL489DXnNEkpG9Ltz39j6dBOsfw/300?n=1',
            title: '望',
            name: '张碧晨'
          },
          {
            src: 'https://p.qpic.cn/music_cover/6aGRubo8UtU3O6E5dy98Jv2s6T2H1p2qSQK3icND00WznbssoCDn3bg/300?n=1',
            title: '揭穿',
            name: '黄子韬'
          },
          {
            src: 'https://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDL7Cq7yHGEsEPqLdwvcoNC8p4CZic8e6icb6w/300?n=1',
            title: '金曲捞 第七期',
            name: '金曲捞'
          },
          {
            src: 'https://p.qpic.cn/music_cover/Q5MtyhqyicZRIFMHk9v3tflKkLNRVG0opUMd0rm0Oe6U3iam0Es6pd3Q/300?n=1',
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
@import "./style/newCD.scss";
</style>
