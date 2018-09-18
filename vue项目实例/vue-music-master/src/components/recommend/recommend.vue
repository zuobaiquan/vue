<template>
  <div class="recommend">
    <div v-if="sliderData.length" class="slider-wrapper">
      <slider>
        <li v-for="item in sliderData" v-bind:key="item.id">
           <a v-bind:href="item.linkUrl">
             <img v-bind:src="item.picUrl"/>
           </a>
        </li>
      </slider>
    </div>
    <div v-if="hotSongList.length" class="recommend-song">
       <song-list v-bind:hotSonglist="hotSongList" title="热门歌单"></song-list>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRecommend, getrecomPlaylist} from '../../api/recommend'
import {ERR_OK} from '../../api/config'
import Slider from '../../baseComponents/slider/slider.vue'
import Songlist from './songlist.vue'
export default {
  created () {
    this._getRecommend()
  },
  data () {
    return {
      sliderData: [],
      hotSongList: []
    }
  },

  components: {
    'slider': Slider,
    'song-list': Songlist
  },
  methods: {
    _getRecommend () {
      getRecommend().then((result) => {
        if (result.code === ERR_OK) {
          this.sliderData = result.data.slider
        }
      })
      getrecomPlaylist().then((result) => {
        if (result.code === ERR_OK) {
          this.hotSongList = result.recomPlaylist.data.v_hot.slice(0, 6)
        }
      })
    }
  }
}
</script>

<style>
  .recommend-song{
    background-color: whitesmoke;
  }
</style>
