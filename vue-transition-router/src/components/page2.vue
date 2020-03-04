<template>
    <div class="df-col-c wrapper">
        <button @click="$router._goBack('/page1')">这是第二页， 点击返回第一页</button>
        <router-link to="page3" tag="button">这是第二页， 点击跳转第三页</router-link>
    </div>
</template>
<style scoped>
    .wrapper {
        background-color: skyblue;
    }
</style>



