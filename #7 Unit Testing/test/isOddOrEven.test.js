import { describe, it } from "mocha";
import { isOddOrEven } from "../02. Even Or Odd.js";
import { assert } from "chai";

describe("Test with non string parameters", () => {
  it("Should throw an error with no parameter", () => {
    assert.isUndefined(isOddOrEven(), "Result must be undefined");
  });

  it("Should throw an error with an object parameter", () => {
    assert.isUndefined(
      isOddOrEven({ name: "pesho" }),
      "Result must be udefined"
    );
  });

  it("Should throw an error with an array parameter", () => {
    assert.isUndefined(isOddOrEven(["pesho"]), "Result must be  udefined");
  });

  it("Should throw an error with a number parameter", () => {
    assert.isUndefined(isOddOrEven(4), "Result must be udefined");
  });

  describe("Test with string parameters", () => {
    it("Should return even", () => {
      assert.equal(isOddOrEven("miro"), "even", "Result must be even");
    });

     it("Should return odd", () => {
       assert.equal(isOddOrEven("miroslava"), "odd", "Result must be odd");
     });
  });
});
