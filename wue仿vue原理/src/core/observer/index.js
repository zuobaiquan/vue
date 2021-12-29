/**
 * @author monkeywang
 * Date: 2018/4/8
 */
import Dep from './dep'
class Observer {
  constructor (value) {
    this.walk(value)
  }

  walk (obj) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        this.walk(obj[key])
      }
      defineReactive(obj, key, obj[key])
    })
  }
}

let defineReactive = (obj, key, value) => {
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    set (newVal) {
      if (newVal === value) {
        return
      }
      value = newVal
      dep.notify()
    },
    get () {
      if (Dep.target) {
        dep.addDepend()
      }
      return value
    }
  })
}

export default function observer(value) {
  return new Observer(value)
}