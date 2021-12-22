const { prompt } = require('inquirer');
const program = require('commander');
const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');
const fs = require('fs');

const option = program.parse(process.argv).args[0];
const question = [
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名称',
    default: typeof option === 'string' ? option : 'i-template-vue',
    filter(val) {
      return val.trim()
    },
    validate(val) {
      const validate = (val.trim().split(" ")).length === 1;
      return validate || '项目名称不允许有空格';
    },
    transformer(val) {
      return val;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: '请输入项目介绍',
    default: 'i vue project',
    validate() {
      return true;
    },
    transformer(val) {
      return val;
    }
  },
  {
    type: 'input',
    name: '请输入作者姓名',
    message: 'Your Name',
    default: '',
    validate() {
      return true;
    },
    transformer(val) {
      return val;
    }
  }
];

module.exports = prompt(question).then(({ name, description, author }) => {
  const gitPlace = require('../template').init['path'];
  const projectName = name;
  const spinner = ora('正在下载，请稍后...');
  spinner.start();
  download(`direct:${gitPlace}`, `./${projectName}`, { clone: true }, (err) => {
    if (err) {
      console.log(chalk.red(err));
      process.exit()
    }

    fs.readFile(`./${projectName}/package.json`, 'utf8', function (err, data) {
      if (err) {
        spinner.stop();
        console.error(err);
        return;
      }

      const packageJson = JSON.parse(data);
      packageJson.name = name;
      packageJson.description = description;
      packageJson.author = author;

      fs.writeFile(`./${projectName}/package.json`, JSON.stringify(packageJson, null, 2), 'utf8', function (err) {
        if (err) {
          spinner.stop();
          console.error(err);
        } else {
          spinner.stop();
          console.log(chalk.green('项目安装成功开始工作吧!'))
          console.log(`
            ${chalk.yellow(`cd ${name}`)}
            ${chalk.yellow('npm install')}
            ${chalk.yellow('npm run dev')}
          `);
        }
      });
    });
  })
}).catch(error => {
  console.log(error)
})