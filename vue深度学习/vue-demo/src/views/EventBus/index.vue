<template>
  <div>
    <One />
    <Two />
  </div>
</template>

<script>
/*

EventBus 又称为事件总线。在Vue中可以使用 EventBus 来作为沟通桥梁的概念，
就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，
所以组件都可以上下平行地通知其他组件，但也就是太方便所以若使用不慎，
就会造成难以维护的“灾难”，因此才需要更完善的Vuex作为状态管理中心，
将通知的概念上升到共享状态层次。
*/
import One from "./one.vue";
import Two from "./two.vue";
export default {
  components: {
    One,
    Two,
  },
  methods: {},
};
</script>