const gitCommands = {
  stash: {
    command: 'git stash --include-untracked && git fetch origin master && git reset --hard origin/master',
    message: 'Executing: git-lean stash'
  },
  stashAndPop: {
    command: this.stash + ' && git stash pop',
    message: 'Executing: git-lean stashAndPop'
  },
  patch: {
    command: 'git add . && git diff --cached > {0} && git reset',
    message: 'Excecuting: git-lean patch'
  }
}

module.exports = gitCommands;
