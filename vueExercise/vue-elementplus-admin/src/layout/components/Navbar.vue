<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <hamburger class="hamburger-container" />
    <!-- 面包屑 -->
    <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 功能引导 -->
      <guide class="right-menu-item hover-effect"></guide>
      <!-- 搜索 -->
      <header-search class="right-menu-item hover-effect"></header-search>
      <!-- 全屏 -->
      <screenfull class="right-menu-item hover-effect" />
      <!-- 换肤 -->
      <theme-picker class="right-menu-item hover-effect"></theme-picker>
      <!-- 国际化 -->
      <lang-select class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown trigger="click" class="avatar-container">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            src="https://output66.oss-cn-beijing.aliyuncs.com/img/1585477728-540c5aeec54da3c.jpg"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useStore } from 'vuex'
import ThemePicker from '@/components/ThemeSelect/index'
import Hamburger from '@/components/Hamburger/index'
import Breadcrumb from '@/components/Breadcrumb/index'
import LangSelect from '@/components/LangSelect'
import Screenfull from '@/components/Screenfull'
import HeaderSearch from '@/components/HeaderSearch'
import Guide from '@/components/Guide'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb-container {
    float: left;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
