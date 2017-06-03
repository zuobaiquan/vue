<template>
	<div class="content">
		<!--<div class="header">-->
	    	<!--<h2><img src="../assets/img/headimg.png" alt=""/></h2>-->
	        <!--<div class="user-box">-->
	        	<!--<router-link to="/user-login">登录</router-link>-->
	        	<!--<router-link to="/user-reg">注册</router-link>-->
	        <!--</div>-->
	        <!--<ul class="clear">-->
	        	<!--<li>-->
	            	<!--<span>0</span>-->
	                <!--<p>关注</p>-->
	            <!--</li>-->
	            <!--<li>-->
	            	<!--<span>0</span>-->
	                <!--<p class="end">粉丝</p>-->
	            <!--</li>-->
	        <!--</ul>-->
	    <!--</div>-->
	    <div class="docList">
	    	<ul>
	            <li>
	                <p>公开博文</p>
	                <span>0</span>
	            </li>
                <li>
                    <p>公开博文</p>
                    <span>0</span>
                </li>
                <li>
                    <p>公开博文</p>
                    <span>0</span>
                </li>
                <li>
                    <p>公开博文</p>
                    <span>0</span>
                </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default{
	}	
</script>
<style scoped>
.content{width:100%;}
.docList ul{
    border-top:1px solid #7b7c7c;
}
.docList ul li{
    background:#fff;
    height:2rem;
    line-height: 2rem;
    border-top:1px solid #bcbbba;
    border-bottom:1px solid #7b7c7c;
}
.docList ul li p{
    float:left;
    margin-left: 2rem;
}
.docList ul li span{
    float:right;
    margin-right: 2rem;
}

</style>