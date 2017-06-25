<template>
    <div class="class-banner-container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3">{{ msg }}</h1>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'class-banner.vue'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-banner-container {
        margin: 30px 0;
    }
</style>