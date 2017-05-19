<template>
	<div>
		<messageHeader></messageHeader>
		<img src="">
		<div id="message">哟，还没有新消息哦~</div>
	</div>
</template>

<script>
import messageHeader from './messageHeader'
export default {
	name: 'message',
	components: {
		messageHeader: messageHeader
	}
}
</script>

<style scoped>
#message {
	height: auto;
	color: #8E8E8E;
	position: absolute;
	top: 45%;
	left: 32%;
	text-align: center;
	font-size: 2.5em;
}

</style>