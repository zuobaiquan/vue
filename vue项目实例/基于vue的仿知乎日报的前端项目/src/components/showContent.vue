<template>
  <div id="showContent">
  <indexHeader></indexHeader>
    <router-link to="/detail">
    <div id="swipe">
     <mt-swipe :auto="3000">
      <mt-swipe-item class="slide" v-for="item in top_stories" ><p>{{item.title}}</p><img :src="item.image" @click="changeId(item.id)"></img></mt-swipe-item>
    </mt-swipe>
    </div>
    </router-link>
    <p id="todayNews">今日热闻</p>
    <router-link to="/detail">
    <ul v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
    <div id="contentList" v-for="item in stories" @click="changeId(item.id)" >
      <div id="text"><p>{{ item.title}}</p></div>
      <div id="image"><img :src="item.images[0]"></div>
    </div>
    </ul>
    </router-link>

  </div>
</template>

<script>

import { Toast, Indicator } from 'mint-ui'
import indexHeader from './indexHeader'

export default {
  name: 'showContent',
  components: {
    indexHeader
  },
  data(){
    return {

    }
  },
  computed: {
    top_stories: function(){
      return this.$store.state.top_stories
    },
    stories: function(){
      return this.$store.state.stories
    },
    id: function(){
      return this.$store.state.id
    }
  },
  methods:{
    changeId: function(data){
      //console.log(data)
      this.$store.state.id=data
    },
    loadMore: function(){
      //console.log('more')
      this.$emit("loadMore")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#showContent{
  //height: 100%;
  background-color: #EDEDED;
}

#swipe{
  height: 750px;
  width: 101.6%;
  position: relative;
  left: -0.8%;
}
#swipe p{
  margin:10px;
  position: absolute;
  bottom: 5%;
  font-size: 3em;
  color: #FFF;
  z-index: 1
}
.slide img{ 
    width: 102%;
    height: 750px;  
    color:  #CD0000;
    font-size: 3em;
    -webkit-filter:brightness(.7);
}

a{
  text-decoration:none;
}
#todayNews{
  margin-left: 30px;
  font-size: 2em;
  margin-top: 5%;
  margin-bottom: 5%;
}
#contentList{
  height: 300px;
  width: 98%;
  margin: 20px 1% 30px -1%;
  
  background-color: #FFF;
  border-radius: 15px;

}
#text{
  margin-left: 5%;
  display: inline-block;
  font-size: 3em;
  width: 65%;
  padding: 10px;
  color: black;
  text-decoration: none;

}
#image{
  display: inline;
  width: 20%;
  float: right;
  margin-top: 60px;
}
</style>
