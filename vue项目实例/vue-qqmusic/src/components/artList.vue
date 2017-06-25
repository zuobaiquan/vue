<template>
  <div class="main-bg">
    <div class="main">
      <div class="mod_data">
        <img :src="songList[0].album.picUrl" :alt="songList[0].album.name" class="avatar">
        <div class="data__cont">
          <div class="data__name">
            <h1>{{songList[0].artists[0].name}}</h1>
            <p>歌手描述：暂无</p>
            <p>歌曲年份：暂无</p>
            <p>描述：暂无</p>
          </div>
        </div>
      </div>
      <div class="mod_part">
        <div class="part_hd">
          <h2>热门歌曲</h2>
        </div>
        <div class="mod_songlist">
          <ul class="songlist__header">
            <li class="songlist__header_name">歌曲</li>
            <li class="songlist__header_album">专辑</li>
            <li class="songlist__header_time">时长</li>
          </ul>
          <ul class="songlist__list">
            <li v-for="(item, index) in songList">
              <p class="songNum">{{index+1}}</p>
              <div class="songName">
                <p>{{item.name}}</p>
                <div class="mod_list_menu noShow" @mouseover="iconShow">
                  <router-link  :to="{ name: 'player', params:{ id: index }}">
                    <!-- <audio v-bi>

                    </audio> -->
                    <i class="song_play" @click="playSong(index)"></i>
                  </router-link>
                </div>
              </div>
              <p class="songAlbum">{{item.album.name}}</p>
              <p class="songTime">{{transformTime(item.mMusic.playTime/1000)}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-desc">到底啦~</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data () {
      return {
        download: false,
        totalTime: ''
      }
    },
    computed: {
      ...mapState([
        'songList'
      ])
    },
    mounted () {
      this.totalTime = this.transformTime(this.songList.Mmusic.play)
    },
    methods: {
      iconShow: function () {
        let playlist = document.querySelectorAll('.mod_list_menu')
      },
      playSong: function() {
        console.log(this.songList[1])
      },
      transformTime: function(seconds) {
        let m, s;
        m = Math.floor(seconds / 60);
        m = m.toString().length == 1 ? ('0' + m) : m;
        s = Math.floor(seconds - 60 * m);
        s = s.toString().length == 1 ? ('0' + s) : s;
        return m + ':' + s;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-bg {
    background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg) no-repeat;
  }
  .main {
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
  }
  .mod_data {
    position: relative;
    height: 250px;
    padding-left: 305px;
    margin-bottom: 35px;
    .avatar {
      position: absolute;
      left: 0;
      top: 25px;
      width: 200px;
      height: 200px;
      border-radius: 30px;
    }
    .data__cont {
      margin-left: 20px;
      h1 {
        font-size: 40px;
        padding-top: 30px;
        font-weight: 300;
      }
    }
  }
  .part_hd {
    height: 54px;
    line-height: 54px;
    h2 {
      font-size: 25px;
      font-weight: 400;
      float: left;
    }
    .part_more {
      float: right;
      line-height: 54px;
      &:hover {
        color: #2eb674;
      }
    }
  }
  .mod_songlist {
    font-size: 16px;
    color: #363535;
    overflow: hidden;
    .songlist__header {
      height: 50px;
      line-height: 50px;
      color: #999;
      padding-left: 30px;
      padding-right: 100px;
      background-color: #cdcdcd;
      box-shadow: 0 1.5px 2px rgba(0, 0, 0, .4);
    }
    .songlist__header_name {
      float: left;
      width: 48%;
      padding-left: 15px;
      position: relative;
      white-space: normal;
    }
    .songlist__album, .songlist__artist,
    .songlist__header_album,
    .songlist__header_author {
      float: left;
      padding-left: 20px;
      width: 24%;
    }
    .songlist__header_time, .songlist__time {
      float: right;
      top: 0;
      right: 38px;
      width: 50px;
    }
  }
  .songlist__list {
    position: relative;
    li {
      height: 50px;
      line-height: 50px;
      &:nth-child(even) {
        background-color: #cdcdcd;
        box-shadow: 0 1.5px 2px rgba(0, 0, 0, .4);
      }
    }
    .mod_list_menu {
      position: absolute;
      top: 0;
      right: 10%;
      .song_play,.song_download {
        width: 36px;
        height: 36px;
        display: block;
        float: left;
        margin-top: 7px;
        margin-left: 5px;
        background: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_list_menu.png?max_age=2592000&v=4566a1a62ecad72fe9b9205d1ad62d2b) no-repeat;
      }
      .song_play:hover {
        background-position: -40px 0;
        transform: scale(1.2);
      }
      .song_download {
        background-position: 0 -120px;
      }
      .song_download:hover {
        background-position: -40px -120px;
      }
    }
    .songNum {
      top: 0;
      float: left;
      text-align: center;
      left: 10px;
      color: #999;
      width: 45px;
    }
    .songName {
      width: 44.5%;
      float: left;
      height: 50px;
      position: relative;
      p{
        float: left;
        &:hover {
          color: #2eb674;
          cursor: pointer;
        }
      }
    }
    .songAlbum {
      float: left;
    }
    .songTime {
      font-size: 14px;
      float: right;
      margin-right: 114px;
      color: #999;
    }
  }
  .data__name {
    h1 {
      text-shadow: 2px 2px 1px rgba(77, 77, 77, .5);
    }
    p {
      line-height: 35px;
      font-size: 18px;
      margin-left: 10px;
    }
  }
  .bottom-desc {
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    margin: 20px;
    opacity: .6;
  }
</style>
