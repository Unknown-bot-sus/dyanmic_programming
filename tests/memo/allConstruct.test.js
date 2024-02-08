const allConstruct = require("../../memo/allConstruct");
const assert = require("assert");

describe("allConstruct", () => {
  it("returns empty [[]] for empty string", () => {
    assert.deepStrictEqual(allConstruct("", ["abc"]), [[]]);
  });

  it("returns empty [[]] for impossible combinations", () => {
    assert.deepStrictEqual(allConstruct("abc", ["def"]), []);
  });

  it("returns correct value for normal cases", () => {
    assert.deepStrictEqual(allConstruct("abc", ["a", "bc", "ab", "c"]), [
      ["a", "bc"],
      ["ab", "c"],
    ]);
  });

  it("it is optimized", () => {
    assert.deepStrictEqual(
      allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeeee",
        "eeeee",
        "eeeeeee",
      ]),
      []
    );
  });
});
