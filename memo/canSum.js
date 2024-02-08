const canSum = (targetSum, numbers, memo = new Map()) => {
  if (memo.get(targetSum) !== undefined) return memo.get(targetSum);
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers, memo)) {
      return true;
    }
  }

  memo.set(targetSum, false);
  return false;
};

// console.log(canSum(7, [2, 3]));
// console.log(canSum(300, [7, 14]));
