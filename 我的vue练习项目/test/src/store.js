import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state={
	count:10
}
const mutations = {
	increment(state) {
		state.count++;
	}
};
const actions ={
	increment:({commit})=>{
		commit('increment')
	}
}
const getters = {
	count(state) {
		return state.count;
	}
};
//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
