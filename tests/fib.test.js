const fib = require("../fib");
const assert = require("assert");

describe("fib", () => {
  it("base case is correct", () => {
    assert.strictEqual(fib(1), 1);
    assert.strictEqual(fib(2), 1);
  });

  // 1 1 2 3 5 8 13
  const tests = new Map([
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [50, 12586269025],
  ]);

  for (let [n, val] of tests) {
    it(`correct number is returned for ${n}th fib number`, () => {
      assert.strictEqual(fib(n), val);
    });
  }
});
