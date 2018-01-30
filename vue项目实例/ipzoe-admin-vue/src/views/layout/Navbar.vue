<template>
    <div>
        <el-menu class="navbar" mode="horizontal">
            <hamburger :class="{'show-hamburger': showHamburger}" class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
            <levelbar></levelbar>
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img class="user-avatar" :src="head_img">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <router-link class='inlineBlock' to="/">
                        <el-dropdown-item>
                            Home
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item>
                        <span @click="dialogEditVisible = true" style="display:block;">修改密码</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span @click="toggleMenu($event)" style="display:block;">切换为顶栏</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span @click="logout" style="display:block;">LogOut</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>

        <!-- 修改密码 -->
        <el-dialog title="修改密码" :visible.sync="dialogEditVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码" prop="oldPwd">
                    <el-input v-model="ruleForm.oldPwd"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd1">
                    <el-input v-model="ruleForm.newPwd1"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="newPwd2">
                    <el-input v-model="ruleForm.newPwd2"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Levelbar from './Levelbar';
    import Hamburger from '@/components/Hamburger';
    import head_img from '@/assets/imgs/head_img.jpg'

    export default {
      data() {
          return {
            head_img: head_img,
            dialogEditVisible: false,
            ruleForm: {
                oldPwd: '',
                newPwd1: '',
                newPwd2: ''
            },
            rules: {
                oldPwd: [
                    { required: true, message: '请输入原密码', trigger: 'blur' }
                ],
                newPwd1: [
                    { required: true, message: '请输入新密码', trigger: 'blur' }
                ],
                newPwd2: [
                    { required: true, message: '请确认新密码', trigger: 'blur' }
                ],
                }
          }
      },
      components: {
        Levelbar,
        Hamburger
      },
      computed: {
        ...mapGetters([
          'sidebar',
          'avatar'
        ]),
        showHamburger() {
            return this.$store.state.app.menuType == 'vertical' ? false : true;
        }
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        },
        // logout
        logout() {
          this.$store.dispatch('FedLogOut').then(() => {
            location.reload();  // 为了重新实例化vue-router对象 避免bug
          });
        },
        // 修改密码
        submitForm(formName) {
            // 表单验证
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.ruleForm.newPwd1 != this.ruleForm.newPwd2){
                        this.$message({
                            message: '两次密码不一致',
                            type: 'warning'
                        });
                        return;
                    }
                    // 获取用户信息
                    this.axios.get('/admin/user/' + this.store.state.user.id)
                    .then(res => {
                        var userInfo = res.data;
                        if(this.ruleForm.oldPwd != userInfo.password){
                            this.$message({
                                message: '原密码错误',
                                type: 'warning'
                            });
                            return;
                        }
                        // 修改密码
                        this.axios.post('/admin/user/reset',{password: this.ruleForm.newPwd1})
                        .then(res => {
                            if(res.data){
                                this.$message({
                                    message: '修改成功',
                                    type: 'success'
                                });
                                this.dialogEditVisible = false;
                                this.$refs[formName].resetFields();
                            }
                        })
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 切换菜单栏
        toggleMenu($event){
            $event.target.innerText = $event.target.innerText == '切换为顶栏' ? '切换为侧栏' : '切换为顶栏';
            this.$store.dispatch('ToggleMenu');
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .show-hamburger {
            display: none;
        }
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 150px;
        }
        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>



