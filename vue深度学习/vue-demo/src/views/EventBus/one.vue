<template>
  <button @click="sendMsg()">发送数据</button>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  methods: {
    sendMsg() {
      EventBus.$emit("aMsg", "来自A页面的消息");
    },
  },
};
</script>