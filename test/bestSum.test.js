const assert = require("assert");
const bestSum = require("../bestSum");

describe("bestSum", () => {
  it("returns empty [] for 0", () => {
    assert.deepStrictEqual(bestSum(0, [1, 2]), []);
  });

  it("returns null for impossible combination", () => {
    assert.strictEqual(bestSum(1, [2]), null);
  });

  it("returns a array for possible sum", () => {
    assert.deepStrictEqual(bestSum(10, [2, 1]), new Array(5).fill(2));
  });

  it("returns the most optimal combination", () => {
    assert.deepStrictEqual(bestSum(8, [1, 4, 5]), [4, 4]);
  });
});
