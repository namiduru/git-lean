const gitCommands = {
  stash: {
    command: 'git stash --include-untracked && git fetch origin master && git reset --hard origin/master',
    message: 'Executing: git-lean stash'
  },
  stashAndPop: {
    command: this.stash + ' && git stash pop',
    message: 'Executing: git-lean stashAndPop'
  }
}

module.exports = gitCommands;
