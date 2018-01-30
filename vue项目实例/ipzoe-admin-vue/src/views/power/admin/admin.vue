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
  
    <!-- 管理员列表 -->
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
        prop="user_name"
        label="用户名"
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
      <el-table-column label="重置密码">
        <template scope="scope">
          <el-button
            size="small"
            @click="reset(scope.$index, scope.row)">重置密码</el-button>
        </template>
      </el-table-column>
      <el-table-column label="冻结">
        <template scope="scope">
          <el-button
            size="small"
            @click="freeze(scope.$index, scope.row)">{{scope.row.status == 1 ? '冻结' : '解冻'}}</el-button>
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
    <el-dialog i-if="dialogEditVisible" :title="dialogTitle" :visible.sync="dialogEditVisible">
      <el-form :model="editForm">
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="editForm.user_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="概述" label-width="80px">
          <el-input v-model="editForm.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属角色" label-width="80px">
          <el-select v-model="roleSelected" multiple placeholder="请选择">
            <el-option
              v-for="item in rolesList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit()">确 定</el-button>
      </div>
    </el-dialog>
    
  </div>    
</template>

<script>
  import admin from './admin.js'
  export default admin
</script>