<template>
  <h1 class="title">
    ⚡ 屏幕已锁定
    <div class="unlock-btn" @click="handleUnlock">
      <i class="el-icon-unlock"></i>
      解锁
    </div>
  </h1>
  <div class="unlock-modal" v-show="showModal">
    <Avatar class="userinfo-unlock" />
    <el-form :model="lockModel" :rules="lockRules" ref="lockForm">
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model.trim="lockModel.password"
          autocomplete="off"
          placeholder="请输入锁屏密码或登录密码"
          @keyup.enter="submitForm"
        >
          <template #append>
            <el-button
              type="primary"
              class="btn-unlock"
              icon="el-icon-right"
              :loading="loading"
              @click="submitForm"
            ></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancel" type="text">取消</el-button>
        <el-button @click="reLogin" type="text">重新登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, getCurrentInstance } from 'vue'
import Avatar from '@/components/Avatar/index.vue'
import { AesEncryption } from '@/utils/encrypt'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Login } from '@/api/login'

export default defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const { proxy: ctx } = getCurrentInstance()
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const showModal = ref(false)
    const lockForm = ref(null)
    const lockModel = reactive({
      password: '',
    })
    const loading = ref(false)

    const checkPwd = async (rule, value, callback) => {
      const { authorization } = store.state.app
      const cipher = authorization && authorization.screenCode
      if (!cipher) {
        return callback()
      }
      const pwd = new AesEncryption().decryptByAES(cipher)
      if (pwd === value) {
        return callback()
      } else {
        // 尝试登录
        loading.value = true
        const { code } = await Login({
          username: store.state.account.userinfo.name,
          password: value,
        })
        loading.value = false
        if (+code === 200) {
          return callback()
        }
      }
      return callback(new Error(rule.message))
    }

    const lockRules = reactive({
      password: [
        { required: true, message: '请输入密码' },
        {
          validator: checkPwd,
          message: '密码错误',
          trigger: 'none',
        },
      ],
    })

    const handleUnlock = () => {
      // 判断当前是否登录
      const { authorization } = store.state.app
      if (authorization) {
        showModal.value = true
        // 尝试获取用户信息
        !store.state.account.userinfo && store.dispatch('account/getUserinfo')
      } else {
        ctx.$message('您的账号已退出，请直接登录')
        reLogin()
      }
    }

    const submitForm = () => {
      lockForm.value.validate(async valid => {
        if (!valid) {
          return false
        }

        // 返回锁屏前的页面
        router.push({ path: route.query.redirect || '/', replace: true })
        // 清除锁屏密码
        store.dispatch('app/setScreenCode', '')
      })
    }

    const cancel = () => {
      lockForm.value.resetFields()
      showModal.value = false
    }

    const reLogin = () => {
      router.push('/login?redirect=' + (route.query.redirect || '/'))
      // 清除token
      store.dispatch('app/clearToken')
    }

    return {
      showModal,
      lockForm,
      lockModel,
      lockRules,
      handleUnlock,
      submitForm,
      loading,
      cancel,
      reLogin,
    }
  },
})
</script>

<style lang="scss" scoped>
.title {
  color: #fff;
  text-align: center;
  font-size: 32px;
  margin: 0;
  display: flex;
  align-items: flex-end;
  .unlock-btn {
    color: #aaa;
    font-size: 16px;
    font-weight: normal;
    margin-left: 10px;
    cursor: pointer;
  }
}
.unlock-modal {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::v-deep(.el-input-group__append) {
    background: $mainColor !important;
    border-color: $mainColor !important;
  }

  .btn-unlock {
    background: $mainColor !important;
    color: #fff !important;
    ::v-deep(i) {
      transform: scale(1.5);
    }
  }
}
.userinfo-unlock {
  margin-bottom: 16px;
  ::v-deep(h3) {
    color: #fff;
  }
}
</style>
