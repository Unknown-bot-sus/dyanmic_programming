const assert = require("assert");
const howSum = require("../../memo/howSum");
const gen = require("../utils/howSum");

describe("howSum memo", gen(howSum));
