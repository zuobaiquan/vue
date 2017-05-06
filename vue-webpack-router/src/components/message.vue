<template>
    <div>
		<h1>{{header}}</h1>
		<p>{{msg}}</p>
		<p>this is message</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				header:'Message',
				msg: 'Hello, welcom to my vue-router'
			}
		}
	}
</script>