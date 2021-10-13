<template>
  <div class="home-wrapper">
    <p>home</p>
    <img :src="require('@/assets/book.png')" />
    <i class="book-icon"></i>
    <i class="book-icon2"></i>
  </div>
</template>
<script>
import { plus } from "@/utils/util";
const mod = require("@/utils/common");
console.log("mod", mod);
export default {
  name: "demo",
  data() {
    return {};
  },
  created() {
    console.log(plus(1, 2));
    console.log("test", mod.count);
  },
  methods: {},
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
