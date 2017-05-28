<template>
    <div class="nav">
        <ul>
            <router-link to="/home" tag="li" active-class="active">首页</router-link>
            <router-link to="/follow" tag="li" active-class="active">关注</router-link>
            <router-link to="/column" tag="li" active-class="active">栏目</router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        //name:'nav'
    }
</script>
<style scoped>
.nav{
    width:100%;
    position:fixed;
    top:0;left:0;
    z-index:2;
    background:#fff;
}
.nav ul{
    width:100%;
    height:2rem;
    margin:0 auto;
    overflow: hidden;
}
.nav ul li{
    width:33.33%;
    height:1.8rem;
    line-height:2rem;
    float:left;
    font-size:0.3rem;
    color:#9e9a95;
    text-align: center;
}

.nav ul li.active{
    border-bottom:0.2rem solid #5477b2;
    color:#5477b2;
    background: #ddd;
}
</style>