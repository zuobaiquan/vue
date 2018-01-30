/*
 * @Author: liujialing
 * @Date: 2017-08-17 13:59:15 
 * @Last Modified by: liujialing
 * @Last Modified time: 2017-08-21 17:02:02
 * 管理员管理
 */

export default {
    data() {
      return {
        searchContent: '',
        pageData: {
          page: 1,
          count: 0,
          size: 5,
          totalPage: 1,
          start: 1
        },
        tableData: [],
        dialogTitle: '',
        dialogEditVisible: false,
        editForm: {},
        rolesList: [],
        roleSelected: []
      }
    },
    created() {
      this.getList();
    },
    methods: {
      // 获取列表数据
      getList(){
        this.listParams = {
          page: this.pageData.page,
          size: this.pageData.size,
          search: {
            user_name: {
              "$like": "%" + this.searchContent + "%"
            }
          }
        };
        this.axios.post('/admin/user/list',this.listParams)
        .then(res => {
          this.tableData = res.data.rows;
          this.pageData = {
            page: res.data.page,
            count: res.data.count,
            size: res.data.size,
            totalPage: res.data.totalPage,
            start: (this.pageData.page - 1) * this.pageData.size + 1
          }
        })
      },
      // 编辑/添加
      edit(index,item) {
        this.axios.get('/admin/roles',{})
          .then(res => {
            this.rolesList = res.data;
          })
        if(item){
          this.dialogTitle = '编辑';
          this.axios.get('/admin/user/' + item.id)
            .then(res => {
              this.editForm = {
                id: res.data.id,
                user_name: res.data.user_name,
                description: res.data.description,
                password: res.data.password
              };
              this.roleSelected = res.data.rolesArr;
            })
        } else {
          this.dialogTitle = '添加';
          this.editForm = {
            user_name: '',
            description: '',
            password: '123456'
          };
          this.roleSelected = [];
        }
        this.dialogEditVisible = true;
      },
      // 提交编辑/添加
      submitEdit() {
        this.editForm.roles = this.roleSelected.join();
        this.axios.post('/admin/user',this.editForm)
          .then(res => {
            this.dialogEditVisible = false;
            this.$message({
              type: 'success',
              message: this.dialogTitle + '成功!'
            });
            this.getList();
          })
      },
      // 删除
      del(index,item) {
        this.$confirm('此操作将删除管理员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/admin/user/'+ item.id)
          .then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            setTimeout(() => {
              this.getList();
            },1000);
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      freeze(index,item) {
        var msg = item.status == 1 ? '冻结' : '解冻';
        this.$confirm('此操作将' + msg + '管理员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            id: item.id,
            status: item.status == 1 ? 0 : 1
          }
          this.axios.post('/admin/user/freeze',params)
          .then(res => {
            console.log(res);
            this.$message({
              type: 'success',
              message: msg + '成功!'
            });
            this.getList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消' + msg
          });          
        });
      },
      reset(index,item) {
        this.$confirm('此操作将管理员密码重置为123456, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            id: 43,
            password: '123456'
          }
          this.axios.post('/admin/user/reset',params)
          .then(res => {
            this.$message({
              type: 'success',
              message: '重置成功!'
            });
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });          
        });
      }
    }
  }