const { exec } = require('child_process');
const chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));

const gitCommands = require('./commands');

// Exec Command
if (gitCommands[argv._[0]]) {
  exec(generateFunctionCommand(argv._), (err, stdout, stderr) => {
    if (err) {
      // It is not a git repository
    } else {
      console.log(chalk.green(stdout));
      console.log(chalk.red(stderr));
      console.log(chalk.blue(gitCommands[argv._[0]].message));
    }
  });
} else {
  console.log(chalk.red('Something went wrong!'));
}

function generateFunctionCommand(arguments) {
  let command = gitCommands[arguments[0]].command;

  if(arguments.length >=1) {
    for (let i = 1; i < arguments.length; i++) {
      let placeholder = arguments[i];

      command = command.replace('{' + (i - 1).toString() + '}', placeholder);
    }
  }

  return command;
}
