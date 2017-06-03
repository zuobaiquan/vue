<template>
    <div>
	<div>
		<h1>Home</h1>
		<p>{{msg}}</p>
	</div>
	<div>
		<ul class="nav nav-tabs">
			<li>
                <router-link  to="/Home/news">新鲜事儿</router-link>
			</li>
			<li>
			    <router-link  to="/Home/message">其他消息</router-link>	
			</li>
		</ul>
		<router-view></router-view>
	</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				msg: 'hello, 我们坐下来聊聊天吧'
			}
		}
	}
</script>