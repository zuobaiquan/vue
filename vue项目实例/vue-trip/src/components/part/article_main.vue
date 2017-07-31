<!-- 文章主体组件 -->
<template>
	<div id="aritcle_main" class="">
		<div v-if="showMain">
			<mt-loadmore 
				:maxDistance="100"
				:distanceIndex="2"
				:top-method="loadTop" 
				:bottom-method="loadBottom" 
				:bottom-all-loaded="allLoaded" 
				ref="loadmore" 
			>
				<div class="media" v-for="item in calcNewsList" :key="item.ctime"  @click="openArticleFn( item.url , item.title )">
					<img :src="item.picUrl" alt="">
					<div class="body">
						<p class="title">{{item.title}}</p>
						<p class="bottom">
							<span>{{item.description}}</span>
							<span>{{item.ctime}}</span>
						</p>
					</div>
				</div>
			</mt-loadmore>
		</div>	
		{{calcRefresh}}	
	</div>
	
</template>

<script>
import Vue from 'vue'
import {Loadmore} from 'mint-ui';
import { Indicator } from 'mint-ui';

Vue.component( 'mt-loadmore' , Loadmore)

//引入的图片资源
import jpg_wenye from '../../assets/img/wenye.jpg';

export default {
	name: 'aritcle_main',
	//首页一开始默认加载的数据
	created : function(){
		this.createdGetData()
	},
	data () {
		return {
			newsList : [],
			page : 1,
			allLoaded : false,
			showMain : false,
			//默认天气
			word : this.$route.query.keyWord,
		}
	},
	computed : {
		calcNewsList : function(){
			return this.newsList.map(function(item,index,array){
				if(!/(.*)\.[jpg|gif|jpeg|gif|png]/.test(item.picUrl)){
					item.picUrl =jpg_wenye
				}
				return item
			})
		},
		calcRefresh(newVal,oldVal){
			//如果存在关键字，则改变关键字和路由
			if(typeof this.$store.state.refreshParams != 'undefined'){
				this.word = this.$store.state.refreshParams.keyWord
			}
			if(this.$store.state.refreshName == '/article_list'){
				this.$store.commit({
					type : 'changeRefreshName',
					refreshName :''
				})
				this.createdGetData()
			}
			return ''
		}
		
	},
	methods : {
		createdGetData(){
			//获取文章页天气文章
			this.$store.dispatch({
				type : 'getData',
				url : 'http://vue-trip.wenye123.com/api/article_list.php',
				callBack :(data)=>{
					if( data.code==200 && data.msg=='success'){
						//将数据填充到列表中
						this.newsList = data.newslist;
						this.showMain = true;
					}
				}
			})
		},
		loadTop(id) {
			this.$store.dispatch({
				type : 'getData',
				url : 'http://vue-trip.wenye123.com/api/article_list.php',
				callBack :(data)=>{
					if( data.code==200 && data.msg=='success'){
						this.newsList.shift(...data.newslist);
						//头部加载完，进入到下一个状态
						this.$refs.loadmore.onTopLoaded(id);
					}
				}
			})
		},
		loadBottom(id) {
			this.$store.dispatch({
				type : 'getData',
				url : 'http://vue-trip.wenye123.com/api/article_list.php',
				callBack :(data)=>{
					if( data.code==200 && data.msg=='success'){
						if(data.length == 0){
							this.allLoaded = true
						}
						this.newsList.push(...data.newslist);
						//尾部加载完，进入到下一个状态
						this.$refs.loadmore.onBottomLoaded(id);
					}
				}
			})
		},
		openArticleFn(url ,title){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal',
			})
			this.$router.push({
				path : '/article' , 
				query : {
					 articleUrl : url,
					 articleTitle : title
				}
			});
		}
	}
}
</script>

<style>
	#aritcle_main .media {
		display: flex;
		align-items :center;
		box-shadow: inset 0px -1px 1px -1px #000;
		padding: 10px;	
	}
	#aritcle_main .media:hover {
		transition : all ease 0.3s;
		background-color: #ccc;
	}
	#aritcle_main .media img {
		width: 80px;
		height: 80px;
		margin-right:10px;
	}
	#aritcle_main .media .body {
		flex : 1;
		display: flex;
		height: 80px;
		justify-content : space-between;
		flex-direction : column;
	}
	#aritcle_main .media .body .title {
		line-height: 1.5;
		font-size: 14px;
		color: #000;
	}
	#aritcle_main .media .body .bottom {
		color: #000;
		font-size: 14px;
	}
</style>
