<!-- 顶部导航组件 -->
<template>
	<div id="index_header" class="">
		<mt-header title="首页" :fixed="is_fixed">
			<router-link to="##" slot="left">
				<mt-button icon="more" @click="showSlideFn"></mt-button>
			</router-link>
			<mt-button @click.native="refresh" slot="right">
				<img src="../../assets/img/refresh.png" alt="" width="20" height="20">
			</mt-button>
		</mt-header>
	</div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
import { mapMutations } from 'vuex'

Vue.component('mt-button', Button);
Vue.component('mt-header', Header);

export default {
	name: 'index_header',
	data () {
		return {
			is_fixed : true
		}
	},
	methods : {
		//映射点击事件为commit同名的mutations
		...mapMutations([
			'showSlideFn',
		]),
		refresh(){
			this.$store.commit({
				type : 'changeRefreshName',
				refreshName : this.$route.path
			})
			//window.location.reload()
		}
		
	}
}
</script>

<style>
	#index_header {
		margin-bottom: 40px;
	}
</style>
