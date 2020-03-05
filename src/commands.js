const stash = 'git stash --include-untracked && git fetch origin master && git reset --hard origin/master';
const stashAndPop = 'stash && git stash pop';