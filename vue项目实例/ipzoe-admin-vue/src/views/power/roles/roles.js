/*
 * @Author: liujialing
 * @Date: 2017-08-17 16:16:28 
 * @Last Modified by: liujialing
 * @Last Modified time: 2017-08-21 16:00:39
 * 角色管理
 */

export default {
  name: 'roles',
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
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      formData: {
        name: '',
        description: '',
        sourceArr: []
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    /**
     * 获取列表数据
     * created by liujialing
     */
    getList(){
      var params = {
        page: this.pageData.page,
        size: this.pageData.size,
        search: {
          name: {
            "$like": "%" + this.searchContent + "%"
          }
        }
      };
      this.axios.post('/admin/roles/list',params)
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
    /**
     * 删除
     * created by liujialing
     * @param {number} index 
     * @param {object} item 
     */
    del(index,item) {
      this.$confirm('此操作将删除角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('/admin/roles/'+ item.id)
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          setTimeout(() => {
            this.getList();
          },1500);
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    /**
     * 编辑/添加
     * created by liujialing
     * @param {number} index 
     * @param {object} item 
     */
    edit(index,item) {
      this.dialogEditVisible = true;
      // 菜单树形列表
      this.axios.get('/admin/source/fullMenu',{})
        .then(res => {
          this.treeData = res;
        })
      if(item){
        this.dialogTitle = '编辑';
        // 编辑，获取角色信息
        this.axios.get('/admin/roles/' + item.id)
          .then(res => {
            console.log(res);
            this.formData = res.data;
          })
      } else {
        this.dialogTitle = '添加';
        this.formData = {
          name: '',
          description: '',
          sourceArr: []
        };
      }
    },
    /**
     * 提交编辑/添加
     * created by liujaling
     * @param {object} formName 
     */
    submitEdit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.formData.sourceArr = this.$refs.tree.getCheckedKeys();
          var params = {
            name: this.formData.name,
            description: this.formData.description,
            source: this.$refs.tree.getCheckedKeys().join()
          };
          if(this.formData.id){
            params.id = this.formData.id;
          }
          console.log(params);
          this.axios.post('/admin/roles',params)
            .then(res => {
              this.$message({
                type: 'success',
                message: this.dialogTitle + '成功!'
              });
              this.dialogEditVisible = false;
              this.getList();
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  }
};