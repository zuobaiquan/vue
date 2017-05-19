<template>
  <div id="header">
    <router-link to="/show">
          <div id="back">&lt;返回</div>
    </router-link>
    <div id="comments"><img :src="comments_icon">{{comments}}</div>
    <div id="popularity"><img :src="good_icon">{{popularity}}</div>
  </div>
</template>

<script>
import good_icon from './../assets/good.png'
import comments_icon from './../assets/comments.png'
export default {
  name: 'detailHeader',
  data () {
    return {
      comments: 0,
      popularity: 0,
      good_icon: good_icon,
      comments_icon: comments_icon
    }
  },
  created: function(){
    //alert('hello')
    let url = 'http://news-at.zhihu.com/api/4/story-extra/'+this.$store.state.id
    //console.log(url)
    this.$axios.get('https://bird.ioliu.cn/v1/?url='+url)
    .then(response=>{
      this.comments= response.data["comments"]
      this.popularity = response.data["popularity"]
    })
    .catch(error=>{
      console.log(error)
    }) 
  } 
  
}
</script>

<style scoped>
#header{
  margin: 0px;
  background-color: #0Eb0ff;
  width: 101%;
  height: 9%;
  position: fixed;
  z-index: 1;
  margin-top: -8px;
  left: -0.5%;
  font-size: 3em;
  border: solid 1px #000;
  color: #FFF;
  //margin-bottom: 30px;
}
a{
    text-decoration:none;
}
#back{
  width: 20%;
  margin-left: 7%;
  margin-top: 50px;
  color: #fff;
  z-index: 3;
  //font-size:1.3em;
  //background-color: red;
}
#comments{
  position: absolute;
  top: 26%;
  width: 15%;
  right: 30%;
  float: right;
}
#popularity{
  position: absolute;
  top: 26%;
  right: 10%;
  width: 18%;
  float: right;
  //background-color: green;
}
</style>
