<template>
	<div id="app"><!--需要一个根元素，给整体父级，否则会有警告-->
		<h3>vue-loader+ vue-router</h3>
		<div>
			<a v-link="{path:'/home'}">主页</a>
			<a v-link="{path:'/news'}">新闻</a>
		</div>
		<router-view></router-view>
	</div>

</template>
<script>

</script>
<style>
	body{
		background: #ccc
	}
	.v-link-active{
		font-size: 20px;
		color: #f60;
	}
</style>