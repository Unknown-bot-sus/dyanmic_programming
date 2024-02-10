const canConstruct = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill(false);

  dp[0] = true;

  for (let i = 0; i < target.length; i++) {
    if (!dp[i]) continue;

    for (let word of wordBank) {
      const targetPart = target.slice(i, i + word.length);

      if (targetPart === word) {
        dp[i + word.length] = true;
      }
    }
  }

  return dp[target.length];
};

module.exports = canConstruct;
