const assert = require("assert");

module.exports = (gridTraveler) => () => {
  it("returns 1 for 1 x 1 grid", () =>
    assert.strictEqual(gridTraveler(1, 1), 1));

  it("returns 0 for invalid grid 0x0", () =>
    assert.strictEqual(gridTraveler(0, 0), 0));

  const tests = new Map([
    [[2, 3], 3],
    [[3, 2], 3],
    [[3, 3], 6],
  ]);

  for (let [size, val] of tests) {
    it(`correct number is returned for grid of ${size[0]}x${size[1]}`, () => {
      assert.strictEqual(gridTraveler(...size), val);
    });
  }

  it("it is optimized", () => {
    assert.strictEqual(gridTraveler(18, 18), 2333606220);
  });
};
