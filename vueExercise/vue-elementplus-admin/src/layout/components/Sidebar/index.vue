<template>
  <div class="sidebar-warrap">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://output66.oss-cn-beijing.aliyuncs.com/img/1585477728-540c5aeec54da3c.jpg"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        后台通用管理模板
      </h1>
    </div>

    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import {} from 'vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
  .el-avatar {
    --el-avatar-background-color: none;
  }
}
</style>
