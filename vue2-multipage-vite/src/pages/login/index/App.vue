<template>
  <div class="test-wrapper">
    <p>login</p>
    <div class="banner_wrap">
      <img v-for="item in imgList" :key="item" :src="item" alt />
    </div>
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
export default {
  name: "demo",
  created() {
    wx.ready(() => {
      //  监听分享到朋友圈
      wx.onMenuShareTimeline({
        title: document.title,
        link: window.location.href,
        imgUrl:
          "https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png",
        desc: document.title,
        success: function () {},
        cancel: function () {},
      });

      //  监听分享给朋友
      wx.onMenuShareAppMessage({
        title: document.title,
        link: window.location.href,
        desc: document.title,
        imgUrl:
          "https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png",
        success: function () {},
        cancel: function () {},
      });
    });
  },
  data() {
    return {
      imgList: [
        require("../../../assets/book.png"),
        require("../../../assets/bookicon.png"),
      ],
    };
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
