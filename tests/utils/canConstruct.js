const assert = require("assert");

module.exports = (canConstruct) => () => {
  it("return true for empty string", () => {
    assert.strictEqual(canConstruct("", []), true);
  });

  it("returns false for impossible string", () => {
    assert.strictEqual(canConstruct("abc", ["a", "b", "cd"]), false);
  });

  it("it is optimized", () => {
    assert.strictEqual(
      canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeeee",
        "eeeee",
        "eeeeeee",
      ]),
      false
    );
  });
};
