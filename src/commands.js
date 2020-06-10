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
  },
  patchBinary: {
    command: 'git add . && git diff --staged --binary > {0} && git reset',
    message: 'Excecuting: git-lean patchBinary'
  },
}

module.exports = gitCommands;
