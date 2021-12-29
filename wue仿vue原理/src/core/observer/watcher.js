import {popTarget, pushTarget} from './dep'
export default class Watcher {
  constructor (vm, expression, cb) {
    this.vm = vm
    this.cb = cb
    this.expression = expression
    this.value = this.getVal()
  }
  getVal () {
    pushTarget(this)
    let val = this.vm
    this.expression.split('.').forEach((key) => {
      val = val[key]
    })
    popTarget()
    return val
  }
  addDep (dep) {
    dep.addSub(this)
  }

  update () {
    let val = this.vm
    this.expression.split('.').forEach((key) => {
      val = val[key]
    })
    this.cb.call(this.vm, val, this.value)
  }
}