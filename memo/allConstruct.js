const allConstruct = (target, wordBanks, memo = new Map()) => {
  if (memo.get(target) !== undefined) return memo.get(target);
  if (target === "") return [[]];

  const combinations = [];
  for (let word of wordBanks) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBanks, memo);
      const targetWays = suffixWays.map((combination) => {
        return [word, ...combination];
      });
      combinations.push(...targetWays);
    }
  }

  memo.set(target, combinations);
  return combinations;
};

module.exports = allConstruct;
