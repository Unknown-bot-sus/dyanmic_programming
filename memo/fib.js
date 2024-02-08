const fib = (n, memo = new Map()) => {
  if (memo.get(n) !== undefined) {
    return memo.get(n);
  }

  if (n <= 2) {
    return 1;
  }

  memo.set(n, fib(n - 1, memo) + fib(n - 2, memo));
  return memo.get(n);
};

module.exports = fib;
