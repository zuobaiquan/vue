export function callHook (vm, hook) {
  const handlers = vm.$options[hook]
  if (handlers) {
    handlers.call(vm)
  }
}