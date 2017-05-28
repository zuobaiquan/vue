<template>
    <div class="foot-btn">
        <ul>
            <router-link class="home" to="/home" tag='li'></router-link>
            <router-link class="write" to='/follow' tag='li'></router-link>
            <router-link class="my" to="/user-info" tag='li'></router-link>
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
    height:2rem;
    line-height: 2rem;
    margin:0 auto;
    overflow: hidden;
}
.foot-btn ul li{
    float:left;
    height:2rem;
    line-height: 2rem;
    margin:0 auto;
    width:20%;
}
.foot-btn ul .home{
    background:url('../assets/img/home.png') no-repeat 0 0;
    background-size:50%;
}
.foot-btn ul .write{
    background:url('../assets/img/write.png') no-repeat 0 0;
    background-size:50%;
}
.foot-btn ul .my{
    background:url('../assets/img/my.png') no-repeat 0 0;
    background-size:50%;
}
</style>