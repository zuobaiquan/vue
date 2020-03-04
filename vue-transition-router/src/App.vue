<template>
    <div id="app">
        <transition :name="transition">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'app',
        data () {
            return {
                text: 'start',
                end: 'end'
            }
        },
        computed: {
            ...mapState({
                routerDirection: state => state.routerDirection
            }),
            transition () {
                if (!this.routerDirection) return 'slide-normal'
                return `slide-${this.routerDirection}`
            }
        }
    }
</script>
<style lang="less">
    .router-view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 500ms cubic-bezier(0.55, 0, 0.1, 1);
        backface-visibility: hidden;
        background-color: #f0f0f0;
    }

    /* 路由切换动画 */
    .slide-forward-enter,
    .slide-back-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-forward-leave-active,
    .slide-back-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-normal {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    .slide-normal-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    button {
        min-width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #fff;
    }
    .df-c, .df-col-c {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .df-col-c {
        flex-direction: column;
    }
</style>