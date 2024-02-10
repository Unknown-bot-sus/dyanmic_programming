const fib = require("../../memo/fib");
const gen = require("../utils/fib");
describe("fib memo", gen(fib));
