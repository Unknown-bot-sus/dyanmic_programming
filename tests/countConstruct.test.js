const countConstruct = require("../countConstruct");
const assert = require("assert");

describe("countConstruct", () => {
  it("returns 0 for impossible combinations", () => {
    assert.strictEqual(countConstruct("abc", ["def", "hik"]), 0);
  });

  it("edge case empty string", () => {
    assert.strictEqual(countConstruct("", ["efer"]), 1);
  });

  it("returns the correct value", () => {
    assert.strictEqual(
      countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]),
      1
    );

    assert.strictEqual(
      countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]),
      2
    );
  });

  it("it is optimized", () => {
    assert.strictEqual(
      countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeeee",
        "eeeee",
        "eeeeeee",
      ]),
      0
    );
  });
});
