const path = require('path')
const os = require('os')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const srcPath = resolve('src')
function getNetworkIp() {
  let host = ''
  try {
    const network = os.networkInterfaces()
    for (const dev in network) {
      const iface = network[dev]
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i]
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          host = alias.address
        }
      }
    }
  } catch (e) {
    host = 'localhost'
  }
  return host
}
module.exports = {
  srcPath,
  resolve,
  getNetworkIp
}
