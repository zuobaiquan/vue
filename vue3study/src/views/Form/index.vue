
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
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <ValidateInput :rules="emailRules" v-model="emailVal"/>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <input type="password" />
    </div>
  </div>
</template>

<script lang="ts">
import ValidateInput, { RulesProps } from './ValidateInput.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    ValidateInput
  },
  setup() {
    const emailVal = ref('zuo')
    const emailRules:RulesProps = [
      { type: 'require', message: '请输入邮箱' },
      { type: 'email', message: '邮箱地址不合法' }
    ]

    return {
      emailRules,
      emailVal
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
