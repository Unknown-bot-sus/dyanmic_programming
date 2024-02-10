const howSum = (targetSum, nums) => {
  const table = new Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    const curr = table[i];

    if (curr === null) continue;

    for (let num of nums) {
      table[i + num] = [...table[i], num];
    }
  }

  return table[targetSum];
};

module.exports = howSum;
