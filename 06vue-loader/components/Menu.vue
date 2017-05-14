<template>
	<ul>
		<li v-for="val in dataList">{{val}}</li>
	</ul>
</template>
<script>
	export default {
		data(){
			return {
				dataList:['orange','apple','pear']
			}
		},
	}
</script>