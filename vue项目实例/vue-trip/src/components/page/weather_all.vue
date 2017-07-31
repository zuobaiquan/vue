<!-- 显示全部天气组件 -->
<template>
	<div id="weather_all" class="app">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
		></router-view>


		<mt-swipe 
			:auto="0" 
			:speed="500"
			:continuous="continuous"
			:showIndicators="showIndicators"
			:prevent="prevent"
			class="index_swipe"
			v-if="show"
		>
			<mt-swipe-item class="slide">
				<h3>可以向右滑动 →</h3>
				<ul>
					<li>城市：<span>{{this.$route.query.cityName}}</span></li>
					<li v-for="(value,index) in today">
						{{todayLabel[index]}} ：<span>{{today[index]}}</span>
					</li>
					<li v-for="item in calcIndex" :key="item.index" class="li_detail">
						详情 ：<span class="span_detail">{{item.details}}</span>
					</li>
				</ul>
			</mt-swipe-item>
			<mt-swipe-item class="slide" v-for="(item,index) in calcHistory">
				<div>
					<h3>历史天气记录</h3>
					<ul v-for="(value,index) in item">
						<li v-for="(property,index) in historyProperty">
							{{historyLabel[index]}} ：
							<span>{{value[property]}}</span>
						</li>
					</ul>
				</div>
			</mt-swipe-item>
			
		</mt-swipe>
		{{calcRefresh}}
	</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import { Indicator } from 'mint-ui';

Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);
export default {
	name: 'weather_all',
	created : function(){
		this.createdGetData()
	},
	data () {
		return {
			continuous : false,
			showIndicators : true,
			prevent : true,
			cityName : this.$route.query.cityName,
			//先隐藏，再显示
			show : false,
			weatherList : {},
			todayLabel : ['今天日期','今日星期','天气状态','当前温度','pm值','风向','风力'],
			historyLabel : ['日期','星期','pm值','天气状态','风向','风力','最高气温','最低气温'],
			historyProperty : ['date','week','aqi','type','fengxiang','fengli','hightemp','lowtemp'],
			//返回导航条
			title :this.$route.query.cityName+'天气详情',
			is_fixed : true
		}
	},
	computed : {
		today(){
			return [
				this.weatherList.today.date,
				this.weatherList.today.week,
				this.weatherList.today.type,
				this.weatherList.today.curTemp,
				this.weatherList.today.aqi,
				this.weatherList.today.fengxiang,
				this.weatherList.today.fengli,
			]
		},
		calcIndex(){
			var list  = this.weatherList.today.index
			return list.splice(0,3)
		},
		calcHistory(){
			var list  = this.weatherList.history
			var data = []
			for(let i =0;i<4;i++){
				data[i] = list.splice(0,2)
			}
			//console.log(data)
			return data
		},
		calcRefresh(newVal,oldVal){
			if(this.$store.state.refreshName == '/weather_all'){
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
		backUp(){
			this.$router.go(-1);
		},
		createdGetData(){
			this.$store.dispatch({
				type : 'getData',
				url : 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityname=' + this.cityName,
				callBack :(data)=>{
					var data = JSON.parse(data);
					if( data.errNum==0 && data.errMsg=='success'){
						this.weatherList = data.retData;
						this.show  = true;
					}
				}
			})
		}
	},
	
}
</script>

<style>
	#weather_all {
		width: 100%;
		height: 100vh;
		color: #fff;
		background: url(../../assets/img/weather_all_bg.gif) no-repeat;
		background-size: cover;
		background-attachment : fixed;
		overflow: hidden;
	}
	/*轮播图*/
	#weather_all .index_swipe {
		width: 100%;
		height: 100vh;
		background: url(../../assets/img/weather_all_bg.gif) no-repeat;
		background-size: cover;
		background-attachment : fixed;
	}
	#weather_all .index_swipe h3 {
		font-size: 16px;
		text-align: center;
		margin-top: 10px;
	}

	

	#weather_all ul {
		margin: 30px 10px 0 10%;
		font-size: 14px;
		color: #d7dcd7;
	}
	#weather_all ul li {
		line-height: 1.2;
	}
	#weather_all ul li span { 
		font-size: 15px;
		color: #91d7f7;
	}
	#weather_all ul li:nth-child(1){
		font-size: 16px;
		color: #87fa8d;
	}
</style>
