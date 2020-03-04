const ss = window.sessionStorage
export const Session = {
    get(key) {
        if (key) return JSON.parse(ss.getItem(key))
        return null
    },
    set(key, val) {
        const setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (const i in setting) {
                ss.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ss.setItem(key, JSON.stringify(val))
        }
    },
    remove(key) {
        ss.removeItem(key)
    },
    clear() {
        ss.clear()
    }
}