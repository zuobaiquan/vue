<template>
  <m-menu :collapse="collapse" :data="data" router :default-active="$route.path"></m-menu>
</template>

<script lang="ts" setup>
defineProps<{
  collapse: boolean
}>()
let data = [
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "Check",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "Location",
    name: "省市区选择",
    index: "/chooseArea",
  },
  {
    icon: "Sort",
    name: "趋势标记",
    index: "/trend",
  },
  {
    icon: "Timer",
    name: "时间选择",
    index: "/chooseTime",
  },
  {
    icon: "Bell",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Menu",
    name: "导航菜单",
    index: "/menu",
  },
  {
    icon: "TurnOff",
    name: "城市选择",
    index: "/chooseCity",
  },
  {
    icon: "DArrowRight",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "ScaleToOriginal",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Setting",
    name: "表单",
    index: "/form",
  },
  {
    icon: "ShoppingBag",
    name: "表格",
    index: "/table",
  },
]
</script>

<style lang="scss">

</style>
