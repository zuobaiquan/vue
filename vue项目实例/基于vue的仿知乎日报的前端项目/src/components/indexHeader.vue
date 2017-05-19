<template>
  <div id="header">
	<div id="index">首页</div>
	<div id="more"><img :src="more_icon"></div>
	<router-link to="/message">
	<div id="message"><img :src="ring_icon"></div>
	</router-link>
  </div>
</template>

<script>
import ring_icon from './../assets/ring.png'
import more_icon from './../assets/more.png'
export default {
  name: 'indexHeader',
  data (){
  	return {
  		ring_icon: ring_icon,
  		more_icon: more_icon
  	}
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
	z-index: 2;
	margin-top: -8px;
	left: -0.5%;
	font-size: 3em;
	border: solid 1px #000;
	color: #FFF;
	}
#index{
	position: absolute;
	top: 30%;
	left: 10%;
	//margin: 4.5% 0 0 10%;
	float: left;

	}
#message{
	position: absolute;
	right: 20%;
	top: 35%;
	//float: right;
	width: 8%;
	color: #FFF;

}
#more{
	position: absolute;
	top: 35%;
	right: 10%;
	width: 5%;
	//float: right;
}
</style>
