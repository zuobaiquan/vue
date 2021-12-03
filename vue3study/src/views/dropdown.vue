
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
  name: 'HelloWorld',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  setup(props, context) {
    console.log(props.msg)
    // context.attrs
    // context.slots
    // context.emit
    //  context.expose
    console.log(context)
  }
})
</script>
