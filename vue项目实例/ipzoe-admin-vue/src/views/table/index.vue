<template>
  <div class="app-container">
    <el-table
    :data="list"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  // import { getList } from '@/api/table';

  export default {
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    created() {
      this.Data();
    },
    methods: {
      Data() {
        this.listLoading = true;
        this.list = [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }];
        // getList(this.listQuery).then(response => {
        //   this.list = response.data.items;
        //   this.listLoading = false;
        // })
      }
    }
  };
</script>
