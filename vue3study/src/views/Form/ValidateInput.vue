
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
  <div>
    <input v-bind="$attrs" class="form-control" :class="{'is-invalid':inputRef.error}" :value="inputRef.val" @blur="validateInput" @input="updateValue" />
    <p class="invalid-feedback" v-if="inputRef.error">{{inputRef.message}}</p>
  </div>
</template>

<script lang="ts">
import { emitter } from './ValidateForm.vue'
import { defineComponent, onMounted, PropType, reactive } from 'vue'
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
interface RuleProps {
  type:'require' | 'email' | 'custom'
  message:string
  validator?: () => boolean
}
export type RulesProps = RuleProps[]
export default defineComponent({
  inheritAttrs: false,
  props: {
    // 通过 PropType 指定构造函数的类型
    rules: Array as PropType<RulesProps>,
    modelValue: String
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const updateValue = (e:KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'require':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'custom':
              passed = rule.validator ? rule.validator() : true
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }

})
</script>

<style lang="scss" scoped>

</style>
