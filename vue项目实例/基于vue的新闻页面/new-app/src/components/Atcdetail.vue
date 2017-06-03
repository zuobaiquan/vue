<template>
    <div class="content">
        <button onclick="window.history.go(-1)">返回</button>
        <div class="cont">
            <div class="time">
                <h2>{{articleData.title}}</h2>
                <p>{{articleData.create_at}} </p>
            </div>
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
				var reg=/atcdetail\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('https://cnodejs.org/api/v1/topic/'+id).then(function(res){
                    console.log(res.data);
					_this.articleData=res.data.data;
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>
<style scoped>
</style>