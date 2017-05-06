<template>
    <div>
		<h1>{{header}}</h1>
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				header:'About',
				msg: 'Hello, this is About'
			}
		}
	}
</script>