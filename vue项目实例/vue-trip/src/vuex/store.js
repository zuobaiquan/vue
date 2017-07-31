import Vue  from 'vue';
import Vuex from 'vuex';
import { Indicator } from 'mint-ui';
import index_main from '../components/home/index_main.vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { 
		//apikey没用了
		//apikey : 'b02d8de7a570d4318fadc8c481eee41e',

		//是否显示侧栏
		slideShow : false,
		animateIn : 'slideInRight',
		animateOut : 'slideOutLeft',
		animateMode : '',
		//需要刷新的组件名字
		refreshName : '',
		refreshParams : ''
	},
	getters: {

	},
	mutations: {
		//改变需要刷新的组件
		changeRefreshName(state,payload){
			console.log('执行到了mutations')
			state.refreshName = payload.refreshName
			//如果存在关键字
			if(typeof payload.params != 'undefined'){
				state.refreshParams = payload.params
			}
		},
		//显示侧栏
		showSlideFn(state,payload){
			state.slideShow = true;			
		},
		//关闭侧栏
		closeSlideFn(state,payload){
			state.slideShow = false;			
		},
		//改变动画
		changeAnimate(state,payload){
			if(payload.mode == 'normal'){
				state.animateIn = 'slideInRight'
				state.animateOut = 'slideOutLeft'
				state.animateMode = ''
			} else if(payload.mode == 'reverse'){
				state.animateIn = 'slideInLeft'
				state.animateOut = 'slideOutRight'
				state.animateMode = ''
			} else if(payload.mode == 'change'){
				state.animateIn = payload.animateIn
				state.animateOut = payload.animateOut
				state.animateMode = payload.animateMode
			}
		}
	},
	actions: {
		//获取数据
		getData(context,payload){
			Vue.http.get(payload.url,{
				//apikey没用了
				// headers : {
				// 	apikey : context.state.apikey
				// 	//apikey : ''
				// },
				timeout : 3000,
				before : function(){
					//打开加载数据框
					Indicator.open({
						text : '加载中....',
						spinnerType : 'triple-bounce'
					});
				}
			}).then(function(response){
				var data =JSON.parse(response.body);
				//关闭加载数据框
				Indicator.close();
				//执行回调函数
				payload.callBack(data)	
			},function(response){
				console.log(response);
			}).catch(function(msg){
				console.log('请求程序出错：'+msg);
			});
		}
	}

})