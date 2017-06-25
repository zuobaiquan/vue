<template>
    <div class="home-list-container">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'home-list.vue'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-list-container {
        margin-bottom: 30px;
    }
</style>