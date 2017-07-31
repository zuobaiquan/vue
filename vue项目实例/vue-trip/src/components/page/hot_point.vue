<!-- 热点组件 -->
<template>
	<div id="hot" class="app">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
		></router-view>
		
		<!-- 列表 -->
		<div class="hot_list" v-if="shwoHotList">
			<mt-loadmore 
				:maxDistance="100"
				:distanceIndex="2"
				:top-method="loadTop" 
				:bottom-method="loadBottom" 
				:bottom-all-loaded="allLoaded" 
				ref="loadmore" 
			>
			<dl class="page" v-for="item in hotList">
				<dt>
					名称：
					<span>
						{{ item.name}}
					</span>
				</dt>
				<dd>
					地址：
					<span>
						{{ item.address}}
					</span>
				</dd>
				<dd>
					电话：
					<span>
						{{ isHaveTelephoneFn(item.additionalInformation) }}
					</span>
				</dd>
			</dl>
			</mt-loadmore>
		</div>
		{{calcRefresh}}
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui';
import { Cell } from 'mint-ui';
import {Loadmore} from 'mint-ui';

Vue.component( 'mt-loadmore' , Loadmore)
Vue.component('mt-cell', Cell);

export default {
	name: 'hot_point',
	created : function(){
		this.createdGetData()
	},
	data () {
		return {
			keyWord : this.$route.query.keyWord,
			cityName : this.$route.query.cityName,
			title : this.$route.query.cityName +'--' +this.$route.query.keyWord,
			is_fixed : true,
			shwoHotList : false,
			hotList : [],
			page : 1,
			allLoaded : false,
			loadNumber : 5
		}
	},
	computed : {
		calcHotList(){
			return data;
		},
		calcRefresh(newVal,oldVal){
			if(this.$store.state.refreshName == '/hot_point'){
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
		// 我日，这个坑搞了我一个下午
		isHaveTelephoneFn(obj){
			try{
				return obj.telephone
			}catch(msg){
				return ''
			}
		},
		//当头部状态为loading时执行，执行完后才进入pull状态
		loadTop(id) {
			this.$store.dispatch({
				type : 'getData',
				url : 'http://apis.baidu.com/apistore/point/search?keyWord='+this.keyWord+'&cityName='+this.cityName+'&number='+this.loadNumber+'&page='+(this.page++)+'&output=json',
				callBack :(data)=>{
					var data = JSON.parse(data);
					if(data.status=='Success'){
						this.hotList.unshift(...(data.pointList));
						//头部加载完，进入到下一个状态
						this.$refs.loadmore.onTopLoaded(id);
					}
				}
			})
		},
		//当尾部状态为loading时执行，执行完后才进入pull状态
		loadBottom(id) {
			//console.log('下拉加载')
			this.$store.dispatch({
				type : 'getData',
				url : 'http://apis.baidu.com/apistore/point/search?keyWord='+this.keyWord+'&cityName='+this.cityName+'&number='+this.loadNumber+'&page='+(this.page++)+'&output=json',
				callBack :(data)=>{
					var data = JSON.parse(data);
					if(data.status=='Success'){
						if(data.pointList.length==0){
							// 若数据已全部获取完毕
							this.allLoaded = true;
						}
						this.hotList.push(...(data.pointList));
						//尾部加载完，进入到下一个状态
						this.$refs.loadmore.onBottomLoaded(id);
						console.log('下拉加载完毕')
					}
				}
			})
		},
		createdGetData(){
			console.log('默认加载')
			this.$store.dispatch({
				type : 'getData',
				url : 'http://apis.baidu.com/apistore/point/search?keyWord='+this.keyWord+'&cityName='+this.cityName+'&number='+this.loadNumber+'&page='+(this.page++)+'&output=json',
				callBack :(data)=>{
					var data = JSON.parse(data);
					if(data.status=='Success'){
						this.hotList = data.pointList;
						this.shwoHotList = true;
						console.log('默认加载完毕')
					}
				}
			})
		},
	},
	
}
</script>

<style>
	#hot {
		background: #000 url(../../assets/img/hot_point_bg.jpg) no-repeat;
		background-size: cover;
		background-attachment : scroll;
	}
	#hot .hot_list{
		width: 100%;
		background: url(../../assets/img/hot_point_bg.jpg) no-repeat;
		background-size: cover;
		background-attachment : scroll;
	}
	#hot .hot_list .page {
		width: 80%;
		height: 150px;
		margin: 15px auto 0 auto;
		padding: 5%;
		background: rgba(255,255,255,0.2);
		border-radius: 5px;
		box-shadow: 3px 3px 5px #ccc;
		font-size: 16px;
		line-height: 1.5;
		color: #fff;
	}
	#hot .hot_list .page span {
		color: #a8d7fc;
		text-shadow :1px 1px 1px #999;
	}
	#hot .hot_list .page dt {
		font-size: 17px;
		color: #a5f5a1;
		text-shadow :2px 2px 2px #999;
	}
	#hot .hot_list .page dt span {
		color: #a5f5a1;
	}
</style>
