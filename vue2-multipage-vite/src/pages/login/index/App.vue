<template>
  <div class="test-wrapper">
    <p>login1</p>
    <div class="banner_wrap">
      <img v-for="item in imgList" :key="item" :src="item" alt>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'

export default {
  name: 'Demo',
  data() {
    return {
      imgList: [
        require('../../../assets/book.png'),
        require('../../../assets/bookicon.png')
      ]
    }
  },
  created() {
    wx.ready(() => {
      //  监听分享到朋友圈
      wx.onMenuShareTimeline({
        title: document.title,
        link: window.location.href,
        imgUrl:
          'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
        desc: document.title,
        success: function () {},
        cancel: function () {}
      })

      //  监听分享给朋友
      wx.onMenuShareAppMessage({
        title: document.title,
        link: window.location.href,
        desc: document.title,
        imgUrl:
          'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
        success: function () {},
        cancel: function () {}
      })
    })
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
