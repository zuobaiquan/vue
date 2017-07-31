import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	count: 10
};

//处理状态(数据)变化
const mutations = {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	}
};

//处理你要干什么，异步请求，判断，流程控制
const actions = {
	increment: ({commit}) => {
		commit('increment')
	},
	decrement: ({commit}) => {
		commit('decrement');
	},
	clickOdd: ({commit,state}) => {
		if (state.count % 2 == 0) {
			commit('increment')
		}
	},
	clickAsync: ({commit}) => {
		new Promise((resolve) => {
			setTimeout(function() {
				commit('increment');
				resolve();
			}, 1000);
		});
	}
};

const getters = {
	count(state) {
		return state.count;
	},
	getOdd(state) {
		return state.count % 2 == 0 ? '偶数' : '奇数';
	}
};

//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
