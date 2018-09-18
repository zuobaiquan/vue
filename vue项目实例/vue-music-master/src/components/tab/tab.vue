<template>
  <nav class="tag">
   <router-link tag="div" to="/recommend" class="tag-item" >
     <span class="tag-link" v-on:click="selectTag(0)" v-bind:class="{tag_active:currentIndex===0}">推荐</span>
   </router-link>
    <router-link tag="div" to="/singer" class="tag-item" >
      <span class="tag-link" v-on:click="selectTag(1)" v-bind:class="{tag_active:currentIndex===1}">歌手</span>
    </router-link>
    <router-link tag="div" to="/rank" class="tag-item" >
      <span class="tag-link" v-on:click="selectTag(2)" v-bind:class="{tag_active:currentIndex===2}">排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="tag-item" >
      <span class="tag-link" v-on:click="selectTag(3)" v-bind:class="{tag_active:currentIndex===3}">搜索</span>
    </router-link>
  </nav>

</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    selectTag (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
  .tag{
    padding-top: 5px;
    padding-bottom: 5px;
    height:40px;
    background-color: orange;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tag-item{
    width:32px;
    height:25px;
    line-height: 25px;
    text-align: center;
    box-sizing: border-box;
  }
  .tag_active {
    border-bottom: white 2px solid;
  }
  .tag-link{
    font-size: 15px;
    color: whitesmoke;
    padding-bottom: 5px;
  }

</style>
