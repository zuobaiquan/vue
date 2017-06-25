<template>
  <div class="mod_index mod_index--event mod_slide_box" id="focus">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit">
          <i class="index__tit_sprite"></i>
          <i class="icon_txt">精彩推荐</i>
        </h2>
        <i class="index__line index__line--left"></i>
        <i class="index__line index__line--right"></i>
      </div>
      <div class="mod_event mod_slide mod_focus--animate">
        <el-carousel :interval="4000" type="card" height="320px">
          <el-carousel-item v-for="item in banner">
            <router-link :to="item.url">
              <img :src="item.pic" alt="" style="width:100%;height:100%">
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="mod_slide_action"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banner: []
      }
    },
    mounted () {
      this.axios.get(`http://localhost:3000/banner`)
       .then(res => {
          res.data.banners.forEach(item => {
           this.banner.push(item)
         })
       })
    }
  }
</script>

<style lang="scss" scoped>
@import "./style/event.scss";
@import "../public/style/public.scss";
</style>
