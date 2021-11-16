<template>
  <li class="dropdown-item" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    console.log(1, props)
  }
})
</script>

<style lang="scss" scoped>
.dropdown-item{
  &.is-disabled,&.is-disabled *{
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }
}

</style>
