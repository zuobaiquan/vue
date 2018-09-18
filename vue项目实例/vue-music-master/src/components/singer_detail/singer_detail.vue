<template>
  <transition name="slide">
      <div class="singer_detail" v-if="singerDetail" >
        <singer-detail-header @alert="_alertfn" @musicplay="_selectMusicFn" v-bind:image=_getImage() v-bind:name="singerDetail.singer_name" v-bind:fans="getFans" v-bind:intruduce="singerDetail.SingerDesc"></singer-detail-header>
        <p class="total_song">歌曲 共{{singerDetail.total}}首</p>
        <music-list @selectMusic="_selectMusicFn" v-bind:list="list" @loadmore="_loadFn" v-bind:hasMore="hasMore"></music-list>
        <div class="back" v-show="showMoreDec">
          <div id="moredec">
            <div id="dectext">{{singerDetail.SingerDesc}}</div>
            <div id="closebutton" v-on:click="_closefn()">关闭</div>
          </div>
        </div>
      </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { getSingerDetail } from '../../api/singerdetail'
import { ERR_OK } from '../../api/config'
import SingerDetailHeader from '../singer_detail/singer_detail_header.vue'
import MusicList from '../../baseComponents/musiclist/music_list.vue'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      singerDetail: null,
      begin: 0,
      isLoading: false,
      list: [],
      number: 0, // number表示已经加载的数据数量，当大于全部数量时，hasMore就是false
      hasMore: true, // 表示是否还有数据
      showMoreDec: false
    }
  },
  computed: {
    getFans () {
      return `粉丝:${(this.singerDetail.fans / 10000).toFixed(2)}万人`
    }
  },
  created () {
    this._getSinerDetailbyid(this.$route.params.singer_id, this.begin)
  },
  methods: {
    _getImage () {
      return `http://y.gtimg.cn/music/photo_new/T001R150x150M000${this.singerDetail.singer_mid}.jpg?max_age=2592000`
    },
    _getSinerDetailbyid (singerid, begin) {
      console.log(singerid)
      getSingerDetail(singerid, begin).then((result) => {
        if (result.code === ERR_OK) {
          this.singerDetail = result.data
          this.list = this.list.concat(result.data.list)
          this.number = this.number + result.data.list.length
          if (this.number >= result.data.total) {
            this.hasMore = false
          }
          this.isLoading = false
        }
      })
    },
    _loadFn () {
      if (this.hasMore) {
        this.isLoading = true
        this.begin = this.begin + 15
        this._getSinerDetailbyid(this.$route.params.singer_id, this.begin)
      }
    },
    _alertfn () {
      this.showMoreDec = true
    },
    _closefn () {
      this.showMoreDec = false
    },
    // 触发vue事件
    _selectMusicFn (item, index) {
      if (!index) {
        index = 0
      }
      this.selectPlay({
        list: this.list,
        index: index,
        backImage: this._getImage()
      })
    },
    ...mapActions('musicplayer', [
      'selectPlay'
    ])
  },
  components: {
    'singer-detail-header': SingerDetailHeader,
    'music-list': MusicList
  }

}
</script>

<style>
  @import "../../../static/style.css";
  .singer_detail {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translate3d(100%, 0, 0);
  }
  .total_song{
    padding:1.5rem 1rem 0.5rem 1rem;
    font-size: 0.8rem;
    color: grey;
  }
  #moredec{
    background-color: white;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    border-radius: 2%;
  }
  #dectext{
    padding:2rem 1.5rem 0 1.5rem;
    overflow-y:scroll;
    width:260px;
    height:350px;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  #closebutton{
    height:2rem;
    line-height: 2.5rem;
    width: 100%;
    text-align: center;
    border-top:1px solid whitesmoke;
    background-color: white;
    margin-bottom: 0.5rem;
  }
  .back{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
  }
</style>
