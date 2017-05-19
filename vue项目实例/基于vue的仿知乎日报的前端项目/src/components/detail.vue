<template>
  <div id="detail">
  	<detailHeader></detailHeader>
  	<div id="headerImage"><img :src="headerImage">
  		<div id="title">{{ headerTitle}}</div>
  		<div id="source">{{ headerSource }}</div>
  	</div>
 	<div v-html="responseHTML" id="content"></div>
  </div>
</template>

<script>
import detailHeader from './detailHeader'
import { Toast, Indicator } from 'mint-ui'
export default {
  name: 'detail',
  components: {
  	detailHeader
  },
  data () {
  	return {
  		responseHTML: '',
  		headerImage: '',
  		headerTitle: '',
  		headerSource: ''
  	}
  },
  beforeCreate: function(){
  	Indicator.open('加载中...')
  	let url = 'http://news-at.zhihu.com/api/4/news/'+this.$store.state.id
  	
  	//console.log(this.$store.state.id)
  	this.$axios.get('https://bird.ioliu.cn/v1?url='+url).then(response=>{
  		//console.log(response.data)
  		this.responseHTML= response.data["body"]
  		this.headerImage = response.data["image"]
  		this.headerTitle = response.data["title"]
  		this.headerSource = response.data["image_source"]
  		Indicator.close()
  	}).catch(response=>{
  		//console.log('sth wrong')
  		Indicator.close()
  		Toast('error')
  	})
  }
  
}
</script>

<style>
a{
	color: #436EEE;
}
#headerImage{
	//margin-top:100px;
	padding: 0px;
	width: 102%;
	height: 600px;
	position: relative;
	color: #FFF;
	border: none;
}
#headerImage img{
	width: 102%;
	height: 600px;
	border: none;
	position: absolute;
	left: -1%;
	background-repeat: no-repeat;
	-webkit-filter:brightness(.5);
}
#title{
	position: absolute;
	bottom: 8%;
	padding-left: 4%;
	padding-right: 30px;
	font-size: 3em;
}
#source{
	position: absolute;
	bottom: 2%;
	right: 2%;
	font-size: 1.5em;
	
}
.bio{
	color: #CDC9C9;
	font-size: 14px;
}
#content{
	margin-top: 60px;
	line-height: 2;
}
.content img{
	margin-left: 3%;
	width: 94%;
}
.content a{
	text-decoration:none;
}
.content {
	width: 90%;
	margin-left:5%;
}
.view-more {
	width: 90%;
	height: 60px;
	padding-top: 2%;
	margin-left: 5%;
	margin-bottom: 50px;
	text-align: center;
	background-color: 	#EDEDED;
}
.view-more a{
	display: block;
	color: 	#BDBDBD;
	font-size: 2em;
}

</style>
