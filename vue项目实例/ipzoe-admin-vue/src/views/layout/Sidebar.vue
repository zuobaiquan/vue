<template>
    <el-menu :mode="menuType" theme="dark" :default-active="$route.path">
        <sidebar-item :routes='menu'></sidebar-item>
    </el-menu>
</template>

<script>
	import { mapGetters } from 'vuex';
	import SidebarItem from './SidebarItem';
	export default {
		components: { SidebarItem },
//   computed: {
//     ...mapGetters([
//       'permission_routers'
//     ])
//   }
		data() {
			return {
				menu: []
			}
		},
		computed: {
			menuType() {
				return this.$store.state.app.menuType;
			}
		},
		created() {
			this.axios.get('/admin/source/fullMenu',{})
				.then(res => {
					console.log("res",res);
					this.menu = res;
				})
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
    min-height: 100%;
}

</style>
