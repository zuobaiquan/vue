
<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        style="cursor: pointer"
        :value="value"
        :max="max"
        :isDot="isDot"
      >
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from "../../../utils/index"
defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: "Bell",
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: "",
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
