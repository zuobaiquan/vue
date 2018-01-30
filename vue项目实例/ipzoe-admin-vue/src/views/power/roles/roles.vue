<template>
	<div>
		<!-- 列表顶部表单 -->
		<el-row class="padding">
			<el-col :span="4">
				<label>每页行数 </label>
				<el-select v-model="pageData.size" @change="getList()" style="width:80px">
					<el-option
						v-for="item in [5,10,15,20]"
						:key="item"
						:label="item"
						:value="item">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="2">
				<el-button :plain="true" type="success" @click="edit()">添加</el-button>
			</el-col>
			<el-col :span="4" :offset="14">
				<el-input v-model="searchContent" @change="getList()" placeholder="输入关键字搜索"></el-input>
			</el-col>
		</el-row>

		<!-- 角色列表 -->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column label="序号">
        <template scope="scope">
          {{pageData.start + scope.$index}}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色名称"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="概述"
      ></el-table-column>
      <el-table-column label="编辑">
        <template scope="scope">
          <el-button
            size="small"
            @click="edit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除">
        <template scope="scope">
          <el-button
            size="small"
            type="danger"
            @click="del(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="page-style padding">
      <div class="count">
        当前显示第
          {{pageData.start}}
        条 - 第
          {{pageData.page * pageData.size > pageData.count ? pageData.count : pageData.page * pageData.size}}
        条 总计{{pageData.count}}条
      </div>
      <el-pagination
        class="pages"
        @current-change="getList"
        :current-page.sync="pageData.page"
        layout="prev, pager, next, jumper"
        :page-count="pageData.totalPage">
      </el-pagination>
    </div>

		<!-- 编辑/添加弹窗 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogEditVisible">
			<el-form :model="formData" ref="formData" label-width="80px">
				<el-form-item label="角色名称" prop="name" :rules="[{ required: true, message: '请输入角色名', trigger: 'blur' }]">
					<el-input v-model="formData.name"></el-input>
				</el-form-item>
        <el-form-item label="概述" label-width="80px">
					<el-input v-model="formData.description"></el-input>
				</el-form-item>
				<el-form-item label="权限设置" prop="sourceArr" label-width="80px">
					<el-tree
            v-if="dialogEditVisible"
						:data="treeData"
						show-checkbox
						node-key="id"
						default-expand-all
						ref="tree"
						:default-checked-keys="formData.sourceArr"
						:props="defaultProps"
					></el-tree>
				</el-form-item>
			</el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit('formData')">确 定</el-button>
      </div>
    </el-dialog>
	
	</div>
</template>

<script>
	import roles from './roles.js'
	export default roles
</script>