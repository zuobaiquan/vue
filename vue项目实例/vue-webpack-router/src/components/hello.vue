<template>
    <div>
		<h1>{{header}}</h1>
		<p>{{msg}}</p>
		<div></div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				header:'Hello',
				msg: '这是我用vue-router搭建的小站，分享心情、电影、音乐、图书'
			}
		}
	}
</script>