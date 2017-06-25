<template>
  <div class="enroll">
    <div class="swiper-wrraper">
      <swiper :options="swiperOption"
              ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img :src="enrollData.tabImg[0]">
        </swiper-slide>
        <swiper-slide>
          <img :src="enrollData.tabImg[1]">
        </swiper-slide>
        <swiper-slide>
          <img :src="enrollData.tabImg[2]">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
    <div class="screach-wrapper">
      <div class="top_content">
        <span class="title">赛事搜索</span>
        <input type="text"
               class="text"
               placeholder="请输入赛事名称">
        <div class="button">搜索</div>
        <span class="pro"
              @click="proSreach">高级搜索</span>
      </div>
      <transition name="slow">
        <div class="bottom-content"
             v-show="proFlag">
          <p class="area">
            地区：<span class="active">全部</span><span>国内</span><span>国外</span>
          </p>
          <p class="time">
            时间：<span class="active">全部</span><span>最近一个月</span><span>1-3个月</span><span>3-6个月</span><span>已结束赛事</span>
          </p>
          <p class="type">
            类型：<span class="active">全部</span><span>超级马拉松</span><span>全程马拉松</span><span>半程马拉松</span><span>路跑</span><span>越野跑</span><span>其他</span>
          </p>
        </div>
      </transition>
    </div>
    <div class="chineseMatch">
      <h2>国内赛事  <a class="fr" href="http://www.erun360.com/Competetion/SearchEvent.aspx?g=1">更多国内精彩赛事>></a></h2>
      <ul class="clearfix">
        <li v-for="v in enrollData.chineseMatch"
            class="fl">
          <a :href="v.href"
             class="a1"><img v-lazy="v.imgSrc"></a>
          <a :href="v.href"
             class="a2">{{v.title}}</a>
          <p>{{v.time}}</p>
          <a :href="v.href"
             class="a3">立即报名</a>
        </li>
      </ul>
    </div>
    <div class="internationalMatch">
      <h2>国外赛事  <a class="fr" href="http://www.erun360.com/Competetion/SearchEvent.aspx?g=2">更多国外精彩赛事>></a></h2>
      <ul class="clearfix">
        <li v-for="v in enrollData.internationalMatch"
            class="fl">
          <a :href="v.href"
             class="a1"><img v-lazy="v.imgSrc"
                 alt=""></a>
          <a :href="v.href"
             class="a2">{{v.title}}</a>
          <p>{{v.time}}</p>
          <a :href="v.href"
             class="a3">立即报名</a>
        </li>
      </ul>
    </div>
    <div class="hotMatch">
      <h2>热门赛事报名</h2>
      <div class="redline"></div>
      <ul>
        <li v-for="v in enrollData.hotMatch">
          <a :href="v.href"
             class="clearfix">
            <img :src="v.imgSrc"
                 alt=""
                 class="fl">
            <p class="fl">{{v.title}}</p>
            <i class="fl">{{v.time}}</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'carrousel',
  data() {
    return {
      "enrollData": {
        "errno": 0,
        "tabImg": [
          './static/enroll/tab01.jpg',
          './static/enroll/tab02.jpg',
          './static/enroll/tab03.jpg'
        ],
        "chineseMatch": [
          {
            "href": "",
            "imgSrc": "./static/enroll/c_enroll-1.jpg",
            "title": "2017台北万人城市路跑",
            "time": "比赛时间:2017/2/19 6:00:00"
          },
          {
            "href": "",
            "imgSrc": "./static/enroll/c_enroll-2.png",
            "title": "2017上海樱花节首届女子10KM路跑",
            "time": "比赛时间：2017/3/12 12:00:00"
          },
          {
            "href": "",
            "imgSrc": "./static/enroll/c_enroll-3.jpg",
            "title": "2017宁波山地马拉松赛",
            "time": "比赛时间：2017/4/16 12:00:00"
          },
          {
            "href": "",
            "imgSrc": "./static/enroll/c_enroll-4.jpg",
            "title": "HST帝都100公里越野挑战赛",
            "time": "比赛时间：2017/4/2 12:00:00"
          },
          {
            "href": "",
            "imgSrc": "./static/enroll/c_enroll-5.jpg",
            "title": "2017哈尼梯田超级跑",
            "time": "比赛时间：2017/3/25 12:00:00"
          },
          {
            "href": "",
            "imgSrc": "./static/enroll/c_enroll-6.jpg",
            "title": "2017上海Honey Run",
            "time": "比赛时间：2017/2/12 12:00:00"
          }
        ],
        "internationalMatch": [{
          "href": "",
          "imgSrc": "./static/enroll/i_enroll-1.jpg",
          "title": "2017年首尔马拉松",
          "time": "比赛时间：2017/3/19 8:00:00"
        },
        {
          "href": "",
          "imgSrc": "./static/enroll/i_enroll-2.jpg",
          "title": "2017年波尔多红酒马拉松",
          "time": "比赛时间：2017/9/9 8:00:00"
        },
        {
          "href": "",
          "imgSrc": "./static/enroll/i_enroll-3.jpg",
          "title": "2017年火山马拉松",
          "time": "比赛时间：2017/11/13 8:00:00"
        },
        {
          "href": "",
          "imgSrc": "./static/enroll/i_enroll-4.png",
          "title": "2017年布拉格马拉松益跑跑团",
          "time": "比赛时间：2017/5/7 9:00:00"
        },
        {
          "href": "",
          "imgSrc": "./static/enroll/i_enroll-5.jpg",
          "title": "2017年第40届芝加哥马拉松",
          "time": "比赛时间：2017/10/8 7:00:00"
        },
        {
          "href": "",
          "imgSrc": "./static/enroll/i_enroll-6.jpg",
          "title": "2017年海军陆战队马拉松",
          "time": "比赛时间：2017/10/22 6:00:00"
        }
        ],
        "hotMatch": [
          {
            "imgSrc": "./static/enroll/hot-1.jpg",
            "title": "2017Jeep极致酷跑4X4",
            "time": "比赛时间：2017/5/13"
          },
          {
            "imgSrc": "./static/enroll/hot-2.jpg",
            "title": "2017唐山湾国际旅游岛·东方园林海滩半程马拉松",
            "time": "比赛时间：2017/7/23"
          },
          {
            "imgSrc": "./static/enroll/hot-3.jpg",
            "title": "渔歌踏浪 心海连江 I 黄岐村跑！",
            "time": "比赛时间：2017/4/16"
          },
          {
            "imgSrc": "./static/enroll/hot-4.jpg",
            "title": "2017中国黄山·歙县新安江山水画廊国际马拉松",
            "time": "比赛时间：2017/5/20"
          },
          {
            "imgSrc": "./static/enroll/hot-5.jpg",
            "title": "2017享跑就跑越野赛-暨北京黑夜越野挑战赛",
            "time": "比赛时间：2017/4/2"
          },
          {
            "imgSrc": "./static/enroll/hot-6.jpg",
            "title": "2017年北海道马拉松",
            "time": "比赛时间：2017/8/27"
          }
        ]
      },
      proFlag: true,
      swiperOption: {
        autoplay: 5000,
        initialSlide: 0,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        notNextTick: true,
        onTransitionStart(swiper) {
          console.log(swiper)
        },
      }
    }
  },
  methods: {
    proSreach: function () {
      this.proFlag = !this.proFlag;
    }
  }
}
</script>
<style lang="scss">
.enroll {
  position: relative;
  .swiper-wrraper {
    width: 870px;
    height: 348px;
    overflow: hidden;
    position: relative;
    .swiper-pagination {
      position: absolute;
      display: inline-block;
      bottom: 50px;
      left: 655px;
      width: 30%;
    }
  }
  .screach-wrapper {
    margin-bottom: 30px;
    .top_content {
      height: 65px;
      width: 870px;
      background: #efefef;
      font-size: 0;
      .title {
        display: inline-block;
        vertical-align: top;
        font-size: 17px;
        line-height: 65px;
        margin-left: 158px;
        margin-right: 15px;
        color: #ff6633;
      }
      .text {
        display: inline-block;
        width: 374px;
        height: 42px;
        background-color: #fff;
        margin-top: 12px;
        font-size: 12px;
        text-indent: 2em;
        color: #adadad;
        border-radius: 2px;
        margin-right: 5px;
      }
      .button {
        display: inline-block;
        padding: 15px;
        color: #fff;
        background: #ef6224;
        vertical-align: top;
        margin-top: 12px;
        font-size: 12px;
        margin-right: 23px;
      }
      .pro {
        display: inline-block;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .slow-enter-active,
    .slow-leave-active {
      transition: opacity .5s;
    }
    .slow-enter,
    .slow-leave-active {
      opacity: 0
    }
    .bottom-content {
      background: #f6f6f6;
      height: 120px;
      width: 870px;
      padding-left: 159px;
      padding-top: 16px;
      box-sizing: border-box;
      .area {
        height: 22px;
        line-height: 22px;
        font-size: 11px;
        margin-bottom: 10px;
        span {
          padding: 5px 12px;
          vertical-align: top;
          cursor: pointer;
          &.active {
            background: #dd8649;
          }
        }
      }
      .time {
        height: 22px;
        line-height: 22px;
        font-size: 11px;
        margin-bottom: 10px;
        span {
          padding: 5px 12px;
          vertical-align: top;
          cursor: pointer;
          &.active {
            background: #f5b849;
          }
        }
      }
      .type {
        height: 22px;
        line-height: 22px;
        font-size: 11px;
        margin-bottom: 10px;
        span {
          padding: 5px 12px;
          vertical-align: top;
          cursor: pointer;
          &.active {
            background: #72c2b1;
          }
        }
      }
      &.active {
        height: 0;
      }
    }
  }
  .chineseMatch {
    width: 868px;
    border-bottom: 1px solid #afafaf;
    h2 {
      border-left: 3px solid #66a93e;
      padding-left: 10px;
      font-size: 17px;
      color: #333;
      height: 17px;
      margin-bottom: 11px;
      font-weight: bold;
      a {
        font-size: 12px;
        color: #333;
        line-height: 16px;
        font-weight: bold;
      }
    }
    ul {
      margin-right: -11px;
      li {
        width: 282px;
        height: 222px;
        margin-right: 11px;
        margin-bottom: 22px;
        .a1 {
          display: block;
          width: 282px;
          height: 152px;
          img {
            width: 282px;
            height: 152px;
          }
        }
        .a2 {
          display: block;
          font-size: 15px;
          color: #333;
          margin-top: 5px;
        }
        p {
          font-size: 11px;
          color: #999;
          margin-top: 5px;
          margin-bottom: 4px;
        }
        .a3 {
          display: block;
          width: 68px;
          height: 23px;
          background: #5db528;
          line-height: 22px;
          text-align: center;
          border: 1px solid #57a926;
          border-radius: 2px;
          color: white;
          font-size: 12px;
        }
      }
    }
  }

  .internationalMatch {
    width: 868px;
    margin-top: 30px;
    h2 {
      border-left: 3px solid #c65abd;
      padding-left: 10px;
      font-size: 17px;
      color: #333;
      height: 17px;
      margin-bottom: 11px;
      font-weight: bold;
      a {
        font-size: 12px;
        color: #333;
        line-height: 16px;
        font-weight: bold;
      }
    }
    ul {
      margin-right: -11px;
      li {
        width: 282px;
        height: 222px;
        margin-right: 11px;
        margin-bottom: 22px;
        .a1 {
          display: block;
          width: 282px;
          height: 152px;
          img {
            width: 282px;
            height: 152px;
          }
        }
        .a2 {
          display: block;
          font-size: 15px;
          color: #333;
          margin-top: 5px;
        }
        p {
          font-size: 11px;
          color: #999;
          margin-top: 5px;
          margin-bottom: 4px;
        }
        .a3 {
          display: block;
          width: 68px;
          height: 23px;
          background: #5db528;
          line-height: 22px;
          text-align: center;
          border: 1px solid #57a926;
          border-radius: 2px;
          color: white;
          font-size: 12px;
        }
      }
    }
  }
  .hotMatch {
    width: 299px;
    height: 465px;
    border: 1px solid #bcbcbc;
    position: absolute;
    right: 0;
    top: 0;
    h2 {
      font-size: 16px;
      color: #f05312;
      margin-left: 21px;
      margin-top: 10px;
    }
    .redline {
      width: 263px;
      height: 1px;
      background: #f79870;
      margin: 0 auto;
      margin-top: 11px;
    }
    ul {
      margin-left: 22px;
      li {
        margin-top: 14px;
        width: 250px;
        height: 54px;
        overflow: hidden;
        a {
          display: block;
          width: 250px;
          height: 54px;
          img {
            width: 90px;
            height: 54px;
          }
          p {
            width: 146px;
            color: #333;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 13px;
            margin-top: 11px;
          }
          i {
            font-size: 11px;
            color: #999;
            margin-left: 11px;
            margin-top: 11px;
          }
        }
      }
    }
  }
}
</style>