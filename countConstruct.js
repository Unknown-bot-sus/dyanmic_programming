const countConstruct = (target, wordBanks, memo = new Map()) => {
  if (memo.get(target) !== undefined) return memo.get(target);
  if (target === "") return 1;

  let sum = 0;
  for (let word of wordBanks) {
    if (target.startsWith(word)) {
      sum += countConstruct(target.slice(word.length), wordBanks, memo);
    }
  }

  memo.set(target, sum);
  return sum;
};

module.exports = countConstruct;
