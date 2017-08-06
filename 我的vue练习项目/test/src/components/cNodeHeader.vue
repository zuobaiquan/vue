<template>
  <div class='head'>
    <router-link to='/'><img src='../assets/logo.png' title='cnodejs.svg'></router-link>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        };
    },
};
</script>
<style lang="scss">
.head {
    background: #324057;
    height: 3.6rem;
    width: 100%;
}
.head>a{
  display: inline-block;
}
.head img {
    width: 10rem;
    height: 3.5rem;
    margin-left: 10rem;
}
.head>button {
    display: inline-block;
    float: right;
    line-height: 3.6rem;
    margin-right: 10rem;
    font-weight: bold;
    font-size: 20px;
    color: white;
    letter-spacing: 2px;
}
</style>
