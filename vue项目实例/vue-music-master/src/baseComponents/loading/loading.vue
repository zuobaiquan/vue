<template>
  <div class="loading">
    <img src="./loading.gif">
    <p class="dec">{{title}}</p>
  </div>

</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style>
.loading{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.loading p{
  font-size: 14px;
}

</style>
