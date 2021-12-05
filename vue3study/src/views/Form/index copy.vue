
<template>
<!--
  输入 可以触发 blur
  每一个可以有对个验证规则，成为Rule
  -不为空
  -长度
  -大小
  -特殊格式

  验证未通过
  出现具体的警告
-->
  <div class="form-box">
    <div>
      <label>邮箱地址</label>
      <input v-model="emailRef.val" @blur="validateEmail" type="email" />
      <p v-if="emailRef.error">{{emailRef.message}}</p>
    </div>
    <div>
      <label>密码</label>
      <input type="password" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    const validateEmail = () => {
      const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '请输入邮箱地址'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱地址不合法'
      } else {
        emailRef.error = false
        emailRef.message = ''
      }
    }
    return {
      emailRef,
      validateEmail
    }
  }
})
</script>

<style lang="scss">
.form-box{
  &>div{
    position: relative;
    display: flex;
    margin:30px 0;
    label{
      width: 100px;
    }
    input{
      flex:1;
    }
    p{
      position: absolute;
      bottom: -30px;
      left: 100px;
      font-size:12px;
      color:red;
    }
  }
}
</style>
