export default function proxy (target, sourceKey, key) {
  Object.defineProperty(target, key, {
    configurable: true,
    get: function proxyGetter () {
      return target[sourceKey][key]
    },
    set: function proxySetter (newVal) {
      target[sourceKey][key] = newVal
    }
  })
}