const assert = require("assert");
const howSum = require("../howSum");

describe("howSum", () => {
  it("returns null for impossible combination", () => {
    assert.strictEqual(howSum(1, [3]), null);
  });

  it("return empty [] for 0", () => {
    assert.deepEqual(howSum(0, [1, 2]), []);
    assert.deepEqual(howSum(0, []), []);
  });

  it("returns correct", () => {
    assert.deepEqual(howSum(300, [1, 2]), new Array(300).fill(1));
    assert.deepEqual(howSum(301, [2]), null);
  });
});
