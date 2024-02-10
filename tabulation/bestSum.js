const bestSum = (targetSum, nums) => {
  const dp = new Array(targetSum + 1).fill(null);

  dp[0] = [];

  for (let i = 0; i < targetSum; i++) {
    const current = dp[i];
    if (current === null) continue;

    for (let num of nums) {
      const combination = [...current, num];
      if (!dp[i + num] || combination.length < dp[i + num].length) {
        dp[i + num] = combination;
      }
    }
  }

  return dp[targetSum];
};

module.exports = bestSum;
