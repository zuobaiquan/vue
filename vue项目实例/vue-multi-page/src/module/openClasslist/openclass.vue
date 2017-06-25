<template>
    <div class="open-banner-container">
        <h1>{{ msg }}</h1>
        <open-banner></open-banner>
    </div>
</template>

<script>
    import openBanner from '../../components/openclass/class-banner.vue'

    export default {
        data () {
            return {
                msg: 'text page'
            }
        },

        components: {
            'open-banner': openBanner
        }
    }
</script>