<template>
  <div>
    <m-notification :value="50">
      <template #default>
        <m-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction"></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup>
import {list, actions} from './data'

let clickItem = (val:any) => {
  console.log(val);
}

let clickAction = (val:any) => {
  console.log(val);
}
</script>

<style lang="scss" scoped></style>
