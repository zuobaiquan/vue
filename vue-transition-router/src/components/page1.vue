<template>
    <div class="df-col-c wrapper">
        <button @click="$router.push('/page2')">这是第一页， 点击跳转第二页</button>
        <button @click="$store.commit('CLEAR_NAVIGATIONS')">清楚 Session 记录</button>
    </div>
</template>
<style scoped>
    .wrapper {
        background-color: green;
    }
</style>



