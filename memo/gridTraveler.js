const gridTraveler = (m, n, memo = new Map()) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  const key = m + "," + n;
  if (memo.get(key) !== undefined) {
    return memo.get(key);
  }

  memo.set(key, gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo));
  return memo.get(key);
};
