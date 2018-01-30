<template>
    <div>
        <template v-for="item in routes">
            <!-- 单页面模块 -->
            <router-link :key="item.id" v-if="!item.dropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
                <el-menu-item :index="item.path+'/'+item.children[0].path">
                    <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.children[0].name}}
                </el-menu-item>
            </router-link>
            <!-- 有下拉层模块 -->
            <el-submenu :key="item.id" :index="item.name" v-if="item.dropdown">
                <template slot="title">
                    <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.name}}
                </template>
                <template v-for="child in item.children">
                    <!-- 二级单页面 -->
                    <sidebar-item :key="child.id" class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
                    <!-- 二级下拉三级菜单 -->
                    <router-link :key="child.id" v-else class="menu-indent" :to="item.path+'/'+child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{child.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .svg-icon {
        margin-right: 10px;
    }
    .hideSidebar .menu-indent{
        display: block;
        text-indent: 10px;
    }
</style>

