const bestSum = (targetSum, numbers, memo = new Map()) => {
  if (memo.get(targetSum) !== undefined) return memo.get(targetSum);

  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  let shortestCombnation = null;

  for (let num of numbers) {
    let combination = bestSum(targetSum - num, numbers, memo);

    if (combination !== null) {
      combination = [num, ...combination];
      if (
        shortestCombnation === null ||
        combination.length < shortestCombnation.length
      ) {
        shortestCombnation = combination;
      }
    }
  }

  memo.set(targetSum, shortestCombnation);
  return shortestCombnation;
};

module.exports = bestSum;
