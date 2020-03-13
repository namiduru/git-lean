const { exec } = require('child_process');
const chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));

const gitCommands = require('./commands');

// Exec Command
if (gitCommands[argv._[0]]) {
  exec(gitCommands[argv._[0]].command, (err, stdout, stderr) => {
    if (err) {
      // It is not a git repository
    } else {
      console.log(chalk.green(stdout));
      console.log(chalk.red(stderr));
      console.log(chalk.blue(gitCommands[argv._[0]].message));
    }
  });
}

// console.log(gitCommands);
