<template>
  <div class="child01">
    my name is {{username}}
  </div>
</template>
<script>
export default {
  name: 'child01',
  props:{
    username:{
      type:String
    }
  }
}
</script>
