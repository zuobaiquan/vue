<template>
    <div class="df-col-c wrapper">
        <button @click="$router._goBack('/page3')">这是第四页， 点击返回第三页</button>
        <button @click="$router.push('/')">这是第四页， 点击返回第一页</button>
    </div>
</template>
<style scoped>
    .wrapper {
        background-color: gray;
    }
</style>



