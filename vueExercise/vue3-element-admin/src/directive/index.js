import store from '@/store'

export const Permission = app => {
  app.directive('permission', {
    mounted: function(el, binding) {
      const permissionList = store.state.account.permissionList || []

      if (
        binding.value &&
        permissionList.every(item => item !== binding.value)
      ) {
        // 移除组件
        el.parentNode.removeChild(el)
      }
    },
  })
}
