<!--
 * @Descripttion: 伸缩菜单
 * @Author: armin
 * @Date: 2022-01-05 10:52:47
 * @LastEditors: armin
 * @LastEditTime: 2022-01-05 11:40:03
-->
<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import NavSide from './navSide/index.vue'
import NavHeader from './navHeader/index.vue'

let isCollapse = ref(false)

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>