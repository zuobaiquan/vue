<template>
    <div class="content">
        <button onclick="window.history.go(-1)">返回</button>
        <div class="cont">
            <h3>{{articleData.title}}</h3>
            <div class="time"><p>{{articleData.time | normalTime}} </p></div>
            <div class="text-box" v-html="articleData.content"></div>
        </div>
    </div>
</template>
<script>
	export default{
		mounted(){
			this.fetchData(this.$route.params.id);
		},
		data(){
			return {
				articleData:{}
			}
		},
		watch:{
			$route(to){
				//console.log(to);
				var reg=/article\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('../src/data/article.data').then(function(res){
					_this.articleData=res.data[id];
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>
<style scoped>
</style>