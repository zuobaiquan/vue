
<template>
  <div class="dropdown-view">
    <Dropdown title="菜单">
      <DropdownItem>下拉菜单1</DropdownItem>
      <DropdownItem disabled>下拉菜单2</DropdownItem>
      <DropdownItem>下拉菜单3</DropdownItem>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import Dropdown from '../components/Dropdown/index.vue'
import DropdownItem from '../components/DropdownItem/index.vue'
import { defineComponent } from 'vue'
export default
defineComponent({
  name: 'DropdownTest',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
  },
  setup(props, context) {
    // context.attrs
    // context.slots
    // context.emit
    //  context.expose
    console.log(context)
  }
})
</script>
