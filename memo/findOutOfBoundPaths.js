function findPaths(m, n, maxMove, startRow, startColumn, memo = new Map()) {
  const key = maxMove + "," + startRow + "," + startColumn;
  if (memo.get(key) !== undefined) return memo.get(key);
  if (startRow < 0 || startRow >= m || startColumn < 0 || startColumn >= n)
    return 1; // reached out of boundary

  if (maxMove === 0) return 0; // run out of moves

  const nextMaxMove = maxMove - 1;
  memo.set(
    key,
    (findPaths(m, n, nextMaxMove, startRow - 1, startColumn, memo) +
      findPaths(m, n, nextMaxMove, startRow, startColumn - 1, memo) +
      findPaths(m, n, nextMaxMove, startRow, startColumn + 1, memo) +
      findPaths(m, n, nextMaxMove, startRow + 1, startColumn, memo)) %
      (10 ** 9 + 7)
  );
  return memo.get(key);
}
