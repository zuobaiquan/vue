<template>
  <div class="text-input" :class="right?'textinput-right':''">
    <span :style="right?{paddingRight:'5px'}:{paddingLeft:'5px'}" v-if="star">{{"*".repeat(text.length)}}</span>
    <input
    :type="type=='number'?'tel':'text'"
    ref="inputText"
    :style="[star?'':{paddingLeft:'5px'},right?{textAlign:'right'}:'']"
    :class="['text',className]"
    v-model="value"
    @keyup="handelKeyup"
    :placeholder="text?'':placeholder"
    :maxlength="maxlength" />
  </div>
</template>
<script>
export default {
  props: {
    className:{
      type: String,
      default: ''
    },
    placeholder: {
      type:String,
      default:'请输入内容'
    },
    maxlength: { // 最大长度
      type: Number,
      default: 255,
    },
    type: { // input类型：text为文本，tel为数字
      type: String,
      default: 'text'
    },
    right:{
      type: Boolean,
      default: false
    },
    star: { // input是否显示为*
      type: Boolean,
      default: false
    }
  },
  data() {
    return{
      value:'',
      text: ''
    }
  },
  watch: {
    value(val) {
      if(this.star && val){
        if(/.*[\u4e00-\u9fa5]+.*$/.test(val)){
          this.value = val.replace(/[\u4e00-\u9fa5]/gm,'')
          return ;
        }
        this.text += val
        if(this.star){
          this.value = ''
        }
      }
    }
  },
  methods: {
    handelKeyup(e){
      if(e.keyCode==8){
        this.text=this.text.slice(0,this.text.length-1)
      }
      this.$emit("input",this.star? this.text : this.value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .text-input{
    display:flex;
    align-items:center;
    flex:1;
  }
  .text{
    flex: 1;
  }
  .textinput-right{
    flex-direction: row-reverse;
  }
</style>
