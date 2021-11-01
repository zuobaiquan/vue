const chalk = require('chalk').bold

module.exports = {
  info(msg) {
    console.log(chalk.blue(`${msg}`))
  },
  warn(msg) {
    console.log(chalk.yellow(`${msg}`))
  },
  error(msg) {
    console.log(chalk.red(`${msg}`))
  },
  success(msg) {
    console.log(chalk.green(`${msg}`))
  }
}
