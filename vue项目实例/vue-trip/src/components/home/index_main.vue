<!-- 首页主体组件 -->
<template>
	<div id="index_main" class="">
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
		<div class="btn" v-show="showBtn">
			<mt-button type="primary" plain @click="openArticleListFn">点击查看更多</mt-button>
		</div>
		
		{{calcRefresh}}
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component('mt-button', Button);

//引入的图片资源
import jpg_wenye from '../../assets/img/wenye.jpg';

export default {
	name: 'index_main',
	//首页一开始默认加载的数据
	created : function(){
		//获取首页天气文章
		this.createdGetData()
	},
	data () {
		return {
			newsList : [],
			page : 1,
			showBtn : false,
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
			if(this.$store.state.refreshName == '/'){
				console.log('执行刷新')
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
			this.$store.dispatch({
				type : 'getData',
				url : 'http://vue-trip.wenye123.com/api/article_list.php',
				callBack :(data)=>{
					if( data.code==200 && data.msg=='success'){
						//将数据填充到列表中
						this.newsList = data.newslist;
						this.showBtn = true;
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
		},
		openArticleListFn(){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal',
			})
			this.$router.push({
				path : '/article_list' , 
				query : {
					keyWord : '天气'
				}
			});
		}
	}
}
</script>

<style>
	#index_main .media {
		display: flex;
		align-items :center;
		box-shadow: inset 0px -1px 1px -1px #000;
		padding: 10px;	
	}
	#index_main .media:hover {
		transition : all ease 0.3s;
		background-color: #ccc;
	}
	#index_main .media img {
		width: 80px;
		height: 80px;
		margin-right:10px;
	}
	#index_main .media .body {
		flex : 1;
		display: flex;
		height: 80px;
		justify-content : space-between;
		flex-direction : column;
	}
	#index_main .media .body .title {
		line-height: 1.5;
		font-size: 14px;
		color: #000;
	}
	#index_main .media .body .bottom {
		color: #000;
		font-size: 14px;
	}
	#index_main .btn {
		margin-top: 10px;
		text-align: center;
	}
	#index_main .btn button {
		width: 60%;
	}
</style>
