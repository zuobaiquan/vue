#!/usr/bin/env node

process.env.NODE_PATH = __dirname + '/../node_modules/';

const program = require('commander');

program
  .version(require('../package').version);

program
  .usage('<command>');

program.command('init')
  .description('create a new project')
  .alias('i')
  .action(() => {
    require('../commands/init')
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help()
}