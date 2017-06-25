<template>
    <nav class="navbar">
        <a class="navbar-brand" href="./index.html">欢迎来到卓一企管！</a>
        <ul class="navbar-nav">
            <li><a class="nav-item nav-link" href="./index.html">首页</a></li>
            <li><a class="nav-item nav-link" href="./openclass.html">公开课</a></li>
            <li><a class="nav-item nav-link" href="./openclass.html">内训课</a></li>
            <li><a class="nav-item nav-link" href="./openclass.html">客户见证</a></li>
            <li><a class="nav-item nav-link" href="./openclass.html">讲师团队</a></li>
            <li><a class="nav-item nav-link" href="./openclass.html">卓一分享</a></li>
            <li><a class="nav-item nav-link" href="./openclass.html">关于我们</a></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        margin:0 auto;
        width:90%;
        background-color: #3A81C3;
        height:45px;
        line-height: 45px;
    }
    .navbar .navbar-brand{
        float: left;
    }
    .navbar .navbar-nav li{
        padding:0 20px;
        list-style: none;
        float: left;
    }
    .navbar .navbar-nav li:hover{
        background-color: #fff;

    }
    .navbar .navbar-nav li a{
        text-decoration: none;
        color:#fff;
    }
    .navbar .navbar-nav li:hover a{
        color:#3A81C3;
    }
</style> 