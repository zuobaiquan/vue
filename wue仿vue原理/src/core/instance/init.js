import observer from "../observer";
const LIFECYCLE_HOOKS = [
  'created',
  'mounted'
]
export default function initOptions (vm) {
  let data = vm._data = vm.$options.data
  observer(vm._data)
  LIFECYCLE_HOOKS.forEach(hook => {
    vm.$options[hook] = vm.$options[hook] || function () {}
  })
}
