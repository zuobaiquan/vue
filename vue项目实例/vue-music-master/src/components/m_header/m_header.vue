<template>
  <div class="m_header">
    <div class="icon"></div>
    <h1 class="text">High Music</h1>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m_header {
    height: 44px;
    color: white;
    background-color: orange;
    text-align: center;
  }
  .icon{
    display: inline-block;
    width:30px;
    height:32px;
    margin-top: 6px;
    margin-right: 9px;
    background-image: url("../../assets/images/music_logo.png");
    background-size: 30px 32px;
    vertical-align: top;
  }
  .text{
    display: inline-block;
    line-height: 44px;
    font-size: 16px;
    vertical-align: top;
  }

</style>
