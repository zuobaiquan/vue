<!-- 天气组件 -->
<template>
	<div id="weather" class="app">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
		></router-view>

		<ul>
			<li v-for="(value,index) in cityWeather">
				{{cityWeatherLabel[index]}} ：{{cityWeather[index]}}
			</li>
		</ul>

		<div class="btn">
			<mt-button plain type="primary" class="loadMoreBtn" @click.native="showMoreFn(cityWeather.city)">点击查看更多天气</mt-button>
		</div>

		<!-- 热点搜索 -->
		<router-view name="weather_form" class="hot" :cityname="cityName"></router-view>
		{{calcRefresh}}
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui';
import { Button } from 'mint-ui';
import { Field } from 'mint-ui';

Vue.component('mt-field', Field);
Vue.component('mt-button', Button);
export default {
	name: 'weather',
	created : function(){
		this.createdGetData()
	},
	data () {
		return {
			cityName : this.$route.query.cityName,
			cityWeather : {},
			cityWeatherLabel : ['城市','天气状况','最低气温','最高气温','风向','风力','日出时间','日落时间'],
			//返回导航条
			title : this.$route.query.cityName,
			is_fixed : true,

		}
	},
	computed : {
		calcRefresh(newVal,oldVal){
			if(this.$store.state.refreshName == '/weather'){
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
		showMoreFn(cityName){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal'
			})
			this.$router.push({
				path : '/weather_all' , 
				query : {
					cityName : this.$route.query.cityName,
				}
			});
		},
		createdGetData(){
			this.$store.dispatch({
				type : 'getData',
				url : 'http://vue-trip.wenye123.com/api/weather.php',
				callBack :(data)=>{
					if( data.errNum==0 && data.errMsg=='success'){
						this.cityWeather = [
							data.retData.weather,
							data.retData.l_tmp,
							data.retData.h_tmp,
							data.retData.WD,
							data.retData.WS,
							data.retData.sunrise,
							data.retData.sunset,
						];
					}
				}
			})
		}
	},
}
</script>

<style>
	#weather {
		height: 100vh;
		background: url(../../assets/img/weather_bg.gif) no-repeat;
		background-size: 100%;
		overflow: hidden;
	}
	#weather ul {
		margin: 100px 0 0 15%;
		font-size: 14px;
		color: #d7dcd7;
	}
	#weather ul li {
		line-height: 1.5;
	}
	#weather ul li span {
		font-size: 15px;
		color: #91d7f7;
	}
	#weather ul li:nth-child(1){
		font-size: 16px;
		color: #87fa8d;
	}
	#weather .btn {
		text-align: center;
	}
	#weather .loadMoreBtn {
		font-size: 14px;
		height: 25px;
		width: 80%;
		margin: 20px 0 0 0;
	}
	#weather .hot {
		margin-top: 35px;
	}
	
</style>
