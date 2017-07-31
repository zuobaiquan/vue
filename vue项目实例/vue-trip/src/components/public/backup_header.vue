<!--返回导航组件 -->
<template>
	<div id="backup_header" class="">
		<mt-header :title="title" :fixed="is_fixed" class="backup_header">
			<div slot="left">
				<mt-button icon="back" @click.native="backUp">返回</mt-button>
			</div>
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

Vue.component('mt-button', Button);
Vue.component('mt-header', Header);

export default {
	name: 'backup_header',
	props : ['title','is_fixed'],
	data () {
		return {
			
		}
	},
	methods : {
		backUp(){
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'reverse'
			})
			this.$router.go(-1)
			//window.history.back(-1);
		},
		refresh(){
			//console.log(this.$route.path)
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
	#backup_header  {
		margin-bottom: 40px;
	}
</style>
