<template>
    <div class="df-col-c wrapper">
        <button @click="$router._goBack('/page2')">这是第三页， 点击返回第二页</button>
        <button @click="$router.push('/page4')">这是第三页， 点击跳转第四页</button>
    </div>
</template>
<style scoped>
    .wrapper {
        background-color: pink;
    }
</style>



