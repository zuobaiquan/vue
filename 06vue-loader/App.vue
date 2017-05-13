<template>
	<h1>welcome Vue</h1>
	<p @click="change()">{{msg}}</p>
	<!--<my-menu></my-menu>	-->
	<Menu></Menu>
</template>
<script>
	import Menu from './components/Menu.vue'

	//导出一个模块，类似于 vue component	
	export default {
		data(){
			return {
				msg:'hello,vue'
			}
		},
		methods:{
			change(){
				this.msg="goodbye,vue";
			}
		},
		//第一种写法
		//components:{
		//	'my-menu':Menu
		//}
		////第二种写法
		components:{Menu}
	}
</script>
<style>
	body{
		background:#ddd;
	}
</style>