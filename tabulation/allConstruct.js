const allConstruct = (target, wordBank) => {
  const dp = Array.from({ length: target.length + 1 }, () => []);

  dp[0].push([]);

  for (let i = 0; i < target.length; i++) {
    if (dp[i].length === 0) continue;

    for (let word of wordBank) {
      if (i + word.length > target.length) continue;
      if (target.slice(i, i + word.length) === word) {
        const newCombination = dp[i].map((comb) => [...comb, word]);
        dp[i + word.length].push(...newCombination);
      }
    }
  }

  return dp[target.length];
};

module.exports = allConstruct;
