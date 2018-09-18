<template>
  <transition name="playertrs">
    <div class="player" ref="player" v-show="playlist.length">
      <div class="normal-player" v-show="fullscreen">
        <header>

        </header>
        <div>

        </div>
        <footer>

        </footer>
      </div>
      <div class="mini-player" v-show="!fullscreen"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
// 从vuex中取东西
import {mapGetters} from 'vuex'
export default {
  mounted () {
    this._setBackgroundPic()
  },
  computed: {
    ...mapGetters('musicplayer', {
      fullscreen: 'fullscreen',
      playlist: 'playlist',
      backImage: 'backImage'
    })
  },
  methods: {
    _setBackgroundPic () {
      let target = this.$refs.player
      target.style.backgroundImage = `url(${this.backImage})`
      target.style.backgroundSize = '100% 100%'
    }
  }
}
</script>

<style>
  .player{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.6);
    z-index: 3;
  }
  .playertrs-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .playertrs-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translate3d(100%, 0, 0);
  }

</style>
