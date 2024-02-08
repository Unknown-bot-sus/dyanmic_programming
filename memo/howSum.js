const howSum = (targetSum, numbers, memo = new Map()) => {
  if (memo.get(targetSum) !== undefined) return memo.get(targetSum);
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const combination = howSum(targetSum - num, numbers, memo);

    if (combination !== null) {
      combination.push(num);
      return combination;
    }
  }

  memo.set(targetSum, null);
  return null;
};

// console.log(howSum(301, [2, 4]));

module.exports = howSum;
