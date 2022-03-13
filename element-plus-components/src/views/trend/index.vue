<template>
  <div class="flex">
    <m-trend text="营业额"></m-trend>
    <m-trend text="销售额" type="down"></m-trend>
  </div>
  <br />
  <div class="flex">
    <m-trend text="营业额" up-icon-color="blue"></m-trend>
    <m-trend text="销售额" type="down" down-icon-color="#123456"></m-trend>
  </div>
  <br />
  <div class="flex">
    <m-trend text="销售额" reverseColor></m-trend>
    <m-trend text="营业额" type="down" reverseColor></m-trend>
  </div>
  <br />
  <div class="flex">
    <m-trend text="营业额" upTextColor="blue"></m-trend>
    <m-trend text="营业额" type="down" downTextColor="yellow"></m-trend>
  </div>
  <br />
  <div class="flex">
    <m-trend upIcon="CaretTop">营业额</m-trend>
    <m-trend type="down" downIcon="CaretBottom">营业额</m-trend>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
