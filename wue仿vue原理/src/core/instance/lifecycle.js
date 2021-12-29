/**
 * @author monkeywang
 * Date: 2018/4/8
 */
export function callHook (vm, hook) {
  const handlers = vm.$options[hook]
  if (handlers) {
    handlers.call(vm)
  }
}