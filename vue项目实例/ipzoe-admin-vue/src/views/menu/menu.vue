<template>
	<div>
		<!-- 列表顶部表单 -->
    <el-row class="padding">
      <el-col :span="2">
        <el-button :plain="true" type="success" @click="edit()">添加</el-button>
      </el-col>
    </el-row>

		<!-- 菜单列表 -->
		<el-table
			:data="tableData"
			style="width: 100%">
			<!-- 一级菜单列表 -->
			<el-table-column label="序号">
        <template scope="scope">
          {{scope.$index + 1}}
        </template>
      </el-table-column>
			<el-table-column
				label="名称"
				prop="name">
			</el-table-column>
			<el-table-column
				label="路径"
				prop="path">
			</el-table-column>
			<el-table-column
				label="编辑">
				<template scope="scope">
					<el-button
						size="small"
						@click="edit(scope.$index, scope.row)">编辑</el-button>
				</template>
			</el-table-column>
			<el-table-column
				label="删除">
				<template scope="scope">
					<el-button
						size="small"
						type="danger"
						@click="del(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
	import menuCtrl from './menu.js'
	export default menuCtrl
</script>