const canConstruct = (target, wordBanks, memo = new Map()) => {
  if (memo.get(target) !== undefined) return memo.get(target);
  if (target === "") return true;

  for (let word of wordBanks) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBanks, memo)) {
        return true;
      }
    }
  }

  memo.set(target, false);
  return false;
};

module.exports = canConstruct;
