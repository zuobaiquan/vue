<template>
  <div id="header">
    <router-link to="/show">
          <div id="back">&lt;返回</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'messageHeader', 
}
</script>

<style scoped>
#header{
  margin: 0px;
  background-color: #0Eb0ff;
  width: 101%;
  height: 9%;
  position: fixed;
  z-index: 1;
  margin-top: -8px;
  left: -0.5%;
  font-size: 3em;
  border: solid 1px #000;
  color: #FFF;
  //margin-bottom: 30px;
}
a{
    text-decoration:none;
}
#back{
  width: 20%;
  margin-left: 7%;
  margin-top: 50px;
  color: #fff;
  z-index: 3;
}

</style>
