
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
  <div class="container">
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput ref="inputRef" type="text" placeholder="请输入邮箱" :rules="emailRules" v-model="emailVal"/>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput type="password" placeholder="请输入密码" :rules="passwordRules" v-model="passwordVal"/>
      </div>
      <!-- <template v-slot:submit> -->
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import ValidateForm from './ValidateForm.vue'
import ValidateInput, { RulesProps } from './ValidateInput.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const inputRef = ref<any>()
    const emailVal = ref('zuo')
    const passwordVal = ref('')
    const emailRules:RulesProps = [
      { type: 'require', message: '请输入邮箱' },
      { type: 'email', message: '邮箱地址不合法' }
    ]
    const passwordRules:RulesProps = [
      { type: 'require', message: '请输入密码' }
    ]

    const onFormSubmit = () => {
      console.log('inputRef', inputRef.value.validateInput())
    }

    return {
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
