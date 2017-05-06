<template>
<div>
	<ul>
		<li v-for="news in newsList">
            <router-link :to="{ name: 'detail', params: { id: news.id}, query: { info: news.query } }">{{news.title}} @{{news.time}}</router-link>
		</li>
	</ul>
	<div>
		<router-view></router-view>
	</div>
</div>
</template>

<script>	
	export default{
		data: function(){
			return {
				newsList: [
					{ id: '01', title: '一个人的滋味',time:'20161214',query:'xyx'},
					{ id: '02', title:'看开了吧',time: '20161218'},
					{ id: '03', title:'和莎莫的730天',time: '20161220'}
				]
			}
		}
	}	
</script>