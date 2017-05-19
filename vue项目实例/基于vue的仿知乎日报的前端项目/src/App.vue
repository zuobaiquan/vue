<template>
  <div id="app">
    <router-view v-on:loadMore="loadMore"></router-view>
  
  </div>
</template>

<script>
import {Indicator, Toast} from 'mint-ui'
export default {
  name: 'app',
  methods: {
    load: function(date){
      Indicator.open('加载中...');
    //alert('hello')
    let url='http://news-at.zhihu.com/api/4/news/latest'
    this.$axios.get('https://bird.ioliu.cn/v1/?url='+url)
    .then(response=>{
        Indicator.close()
        this.$store.state.response= response.data
        this.$store.state.top_stories = response.data["top_stories"]
        this.$store.state.stories = response.data["stories"]
        this.$store.state.date = response.data["date"]

      })
      .catch(error=>{
        Toast('error')
        Indicator.close()
        console.log(error)
      })
    },
    loadMore: function(){
      //console.log(this.$store.state.date)
      let date= parseInt(this.$store.state.date)-1
      //console.log(date)
      Indicator.open('加载中...');
      let url='http://news-at.zhihu.com/api/4/news/before/'+date
      //console.log(url)
      this.$axios.get('https://bird.ioliu.cn/v1/?url='+url)
      .then(response=>{
        Indicator.close()
        for(let i in response.data["stories"]){
          //console.log(response.data["stories"][i])
          this.$store.state.stories.push(response.data["stories"][i])
        }
        this.$store.state.date = response.data["date"]
        //console.log(response.data["stories"])

      })
      .catch(error=>{
        //Toast('error')
        Indicator.close()
        console.log(error)
      })
    }
  },
  created: function(){
    this.load('latest')
    this.$router.push({path: './show'})
  }
  
}
</script>

<style>
#app {
  
}
</style>
