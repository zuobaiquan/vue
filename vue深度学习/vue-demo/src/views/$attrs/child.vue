<template>
  <div class="form-input" style="margin-left: 10px; margin-top: 12px">
    <input v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "AttrsChild",
  inheritAttrs: false,
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>
