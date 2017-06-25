<template>
    <div class="class-list-container">
        <h2>{{ msg }}</h2>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'class-list.vue'
            }
        }
    }
</script>

<style lang="scss" scoped>
.class-list-container {
    margin: 30px 0;
}
</style>