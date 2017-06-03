<template>
    <div class="foot-btn">
        <ul>
            <router-link class="home" to="/home" tag='li'>首页</router-link>
            <router-link class="write" to='/follow' tag='li'>关注</router-link>
            <router-link class="my" to="/user-info" tag='li'>个人中心</router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        //name:'nav'
    }
</script>
<style scoped>
.foot-btn{
    width:100%;
    height:2rem;
    background:#fff;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #9e9a95;
}
.foot-btn ul{
    width:60%;
    margin:0 auto;
}
.foot-btn ul li{
    float:left;
    height:2rem;
    line-height: 1.5rem;
    text-align: center;
    width:33.3%;
}
</style>