/*
 * @Author: liujialing
 * @Date: 2017-08-17 16:18:09 
 * @Last Modified by: liujialing
 * @Last Modified time: 2017-08-22 09:24:38
 * 菜单管理
 */

export default {
	data() {
		return {
			tableData: []
		}
	},
	created() {
		this.getList();
	},
	methods: {
		getList(){
			this.axios.get('/admin/source/fullMenu',{})
			.then(res => {
				this.tableData = res;
			})
		},
		edit(index,item) {
			console.log(index,item);
		},
		del(index,item) {
			console.log(index,item);
		}
	}
}