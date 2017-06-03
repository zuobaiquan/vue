<template>
    <div class="Follow">
        <ul>
            <li v-for="(item,index) in arrList">
                <router-link :to="'/atcdetail/'+item.id">
                    <h5>{{index+1}} . {{item.title}}</h5>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arrList:[]
            }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData(){
                var _this=this;
                this.$http.get('https://cnodejs.org/api/v1/topics').then(function(res){
                    _this.arrList=res.data.data;
                }).catch(function(err){
                    console.log(err);
                });
            }
        }
    }
</script>
<style scoped>
    .Follow{
        margin-bottom: 2rem;
    }
</style>