<template>
  <p>{{ msg }}</p>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    EventBus.$on("aMsg", (msg) => {
      // A发送来的消息
      this.msg = msg;
    });
  },
};
</script>