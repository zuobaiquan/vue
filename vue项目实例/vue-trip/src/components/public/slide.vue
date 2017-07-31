<!-- 侧栏组件 -->
<template>
	<div id="slide" class="">
		<mt-popup
			v-model="slideShow"
			position="left"
			class="slide"
		>
			<div class="slide_content">
				<div class="bg"></div>
				<div class="nav">
					<mt-cell is-link @click.native="showHomePage">
						<span slot="title" >首页</span>
						<img slot="icon" src="../../assets/img/icon/home.png" width="24" height="24">
					</mt-cell>
					<mt-cell is-link @click.native="openWeatherSearch">
						<span slot="title">出行</span>
						<img slot="icon" src="../../assets/img/icon/weather.png" width="24" height="24">
					</mt-cell>
					<mt-cell is-link @click.native="openArticleList">
						<span slot="title">文章</span>
						<img slot="icon" src="../../assets/img/icon/article.png" width="24" height="24">
					</mt-cell>
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';
import { Cell } from 'mint-ui';

Vue.component('mt-cell', Cell);
Vue.component('mt-popup', Popup);

export default {
	name: 'slide',
	data () {
		return {
			
		}
	},
	methods : {
		//解决使用vuex后侧栏关闭的问题
		solveCloseSlideFn(that){
			setTimeout(function(){
				var modal = document.querySelector('.v-modal')
				if(modal != null){
					modal.onclick=function(){
						that.$store.commit({
							type :'closeSlideFn',
						})
					}
				}
			},50)
		},
		showHomePage(){
			this.$store.commit({
				type :'closeSlideFn',
			})
		},
		openWeatherSearch(){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal'
			})
			//关闭侧栏
			this.$store.commit({
				type :'closeSlideFn',
			})
			this.$router.push('/weather_search')
		},
		openArticleList(){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal'
			})
			//关闭侧栏
			this.$store.commit({
				type :'closeSlideFn',
			})
			this.$router.push({
				path : '/article_list' , 
				query : {
					keyWord : '天气'
				}
			});
		},
	},
	computed : {
		slideShow : function(){
			//关闭侧栏
			this.solveCloseSlideFn(this)	
			return this.$store.state.slideShow
		}
	}
}
</script>

<style>
	#slide .slide {
		height: 100%;
	}
	#slide .slide_content {
		width: 200px;
		height: 100%;
		background-color: #fff;
		color: #000;
	}
	#slide .slide_content  .bg {
		width: 200px;
		height: 150px;
		background: #000 url(../../assets/img/slide_bg.jpg) no-repeat 50% 50%;
		background-size: cover;
	}
	#slide .slide_content  .nav {
		margin-top: 20px;
	}
</style>
