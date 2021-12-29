/**
 * @author monkeywang
 * Date: 2018/4/8
 */
export default class Dep {
  constructor () {
    this.sub = []
  }
  addDepend () {
    Dep.target.addDep(this)
  }
  addSub (sub) {
    this.sub.push(sub)
  }
  notify () {
    for (let sub of this.sub) {
      sub.update()
    }
  }
}

Dep.target = null
const targetStack = []

export function pushTarget (_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget () {
  Dep.target = targetStack.pop()
}

