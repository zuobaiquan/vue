import '@vue/runtime-core'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $myProperty: string
    formatPhone:func
    showText:string
    formatTime:func
  }
}
