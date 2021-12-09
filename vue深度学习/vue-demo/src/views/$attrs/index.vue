<template>
  <div class="attrs-box">
    <child type="password" class="test-parent" style="margin-top: 10px" />
  </div>
</template>

<script>
// class 和 style attribute 会稍微智能一些，即两边的值会被合并起来

// $attrs 可以收集父组件中的所有传过来的属性除了那些在组件中没有通过 props 定义的

// $attrs 是 2.4版本 添加的

import child from "./child.vue";
export default {
  name: "Attrs",
  components: {
    child,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>
