const fib = (n) => {
  const table = new Array(n + 1).fill(0);

  if (n < 1) {
    return table[n];
  }

  table[1] = 1;

  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];

    if (table[i + 2] === undefined) {
      return table[n];
    }

    table[i + 2] += table[i];
  }
};

module.exports = fib;
