const gridTraveler = (m, n) => {
  const table = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  if (m === n && m === 0) return table[m][n];

  table[1][1] = 1;

  for (let x = 0; x <= m; x++) {
    for (let y = 0; y <= n; y++) {
      const current = table[x][y];
      if (y + 1 <= n) table[x][y + 1] += current;
      if (x + 1 <= m) table[x + 1][y] += current;
    }
  }

  return table[m][n];
};

module.exports = gridTraveler;
