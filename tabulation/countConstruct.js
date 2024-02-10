const countConstruct = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < target.length; i++) {
    if (dp[i] === 0) continue;

    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        dp[i + word.length] += dp[i];
      }
    }
  }

  return dp[target.length];
};

module.exports = countConstruct;
