<template>
  <div class="player-cont">
    <div class="player-mask"></div>
    <div class="player-bg"
     style="background: url(songList[id].album.picUrl);"></div>
    <div class="mod-player">
      <div class="imgUrl">
        <img :src="songList[id].album.picUrl" alt="">
      </div>
      <div class="mod-footer">
        <a href="javascript:;" class="btn_big_prev"></a>
        <a href="javascript:;" class="btn_big_play"></a>
        <a href="javascript:;" class="btn_big_next"></a>
        <div class="player_music">
          <div class="music_info">
            <a href="" class="song_info">{{songList[id].name}}</a>
            -
            <a href="" class="singer">{{songList[id].artists[0].name}}</a>
          </div>
          <div class="play_music_time">
            <p class="startT">00:00</p>
            -
            <p class="endT">{{(transformTime(songList[id].mMusic.playTime/1000))}}</p>
          </div>
          <div class="player_progress">
            <div class="player_progress__inner">
              <div class="player_progress__load"></div>
              <div class="player_progress__play" >
                <i class="player_progress__dot"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="player_progress player_voice">
          <a href="" class="btn_big_voice">
            <i class="icon_txt"></i>
          </a>
          <div class="player_progress__inner">
            <div class="player_progress__play">
              <i class="player_progress__dot"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio :src="this.songUrl[0]" autoplay id="audio"></audio>
  </div>
</template>

<script>
import {mapState, mapAction} from 'vuex'
  export default {
    data () {
      return {
        id: '',
        audio: '',
        songUrl: []
      }
    },
    computed: {
      ...mapState([
        'songList'
      ])
    },
    mounted() {
      this.id = this.$route.params.id
      this.axios.get(`http://182.254.147.168:3000/music/url?id=${this.songList[this.id].id}`)
        .then(res => {
          // console.log(res.data.data[0].url);
          this.songUrl.push(res.data.data[0].url)
        })
        // console.log(this.songUrl);
      // this.audio = document.getElementById('audio')
      // console.log(this.audio);
    },
    methods: {
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
  .player-cont {
    color: #fff;
    height: 600px;
    position: relative;
  }
  a {
    color: #fff;
  }
  .player-mask,.player-bg,.mod-player {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .player-bg {
    background-size: cover;
    background-position: 50%;
    filter: blur(54px);
    opacity: .7;
    transform: translateZ(0);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .player-mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 2;
    box-shadow: 0 3px 4px rgba(255, 255, 255, 0.5);
  }
  .mod-player {
    position: relative;
    z-index: 3;
  }
  .imgUrl {
    position: absolute;
    display: block;
    top: 16%;
    left: 39%;
    img {
      height: 300px;
      width: 300px;
      border-radius: 10px;
      box-shadow: -2px 2px 2px rgba(0, 0, 0,.5);
    }
    &:after {
      content: '';
      position: absolute;
      left: 124px;
      top: 58px;
      width: 201px;
      height: 180px;
      background: url(https://y.gtimg.cn/mediastyle/yqq/img/album_cover_player.png) 0 0 no-repeat;
    }
  }
  .btn_big_down, .btn_big_like, .btn_big_next,
  .btn_big_only, .btn_big_play, .btn_big_prev,
  .btn_big_style_list, .btn_big_style_order,
  .btn_big_style_random, .btn_big_style_single,
  .btn_big_voice, .btn_lang, .player_progress__dot {
    background: url(https://y.gtimg.cn/mediastyle/yqq/img/player.png?max_age=2592000&v=749f8d7b865b29877500567512879e12);
    background-repeat: no-repeat;
    position: absolute;
    opacity: .8;
  }
  .mod-footer {
    position: absolute;
    margin: 0 100px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 11%;
  }
  .btn_big_prev {
    top: 4px;
    left: 0;
    width: 19px;
    height: 20px;
    background-position: 0 -30px;
  }
  .btn_big_play {
    top: 0;
    left: 76px;
    width: 21px;
    height: 29px;
    background-position: 0 0;
    a {
      background-color: rgba(225,225,225,.8);
    }
  }
  .btn_big_next {
    top: 4px;
    left: 148px;
    width: 19px;
    height: 20px;
    background-position: 0 -52px;
  }
  .player_music {
    position: relative;
    margin: 0 412px 0 208px;
    .music_info {
      padding-right: 90px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .play_music_time {
      position: absolute;
      width: px;
      top: 0;
      right: 0;
      .startT {
        float: left;
      }
      .endT {
        float: right;
      }
    }
    .player_progress {
      padding-top: 6px;
      height: 8px;
      cursor: pointer;
      .player_progress__inner {
        position: relative;
        height: 2px;
        background: rgba(255, 255, 255, 0.1);
      }
      .player_progress__load {
        height: 2px;
        background: rgba(255, 255, 255, 0.2);
      }
      .player_progress__play {
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        background: rgba(255, 255, 255, 0.7);
      }
      .player_progress__dot {
        top: -4px;
        right: -4px;
        width: 10px;
        height: 10px;
        background-position: 0 -170px;
        opacity: 1;
        filter: none;
      }
    }
  }
  .player_voice {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    padding-top: 13px;
    .btn_big_voice {
      top: 4px;
      left: -300px;
      width: 26px;
      height: 21px;
      background-position: 0 -144px;
    }
  }
  .player_progress {
    height: 8px;
    cursor: pointer;
  }
  .player_progress__inner {
    position: relative;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
  }
</style>
