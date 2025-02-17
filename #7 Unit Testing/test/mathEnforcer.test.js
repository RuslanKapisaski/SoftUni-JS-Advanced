import { describe, it } from "mocha";
import { mathEnforcer } from "../04. Math Enforcer.js";
import { assert } from "chai";

describe("Testing addFive method", () => {
  describe("Should return undefined if the parameter is not a number", () => {
    it("Should return undefined if the parameter not provided", () => {
      assert.isUndefined(mathEnforcer.addFive(), "Result should be undefined");
    });

    it("Should return undefined if the parameter is an object", () => {
      assert.isUndefined(
        mathEnforcer.addFive({ parameter: 10 }),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the parameter is an array", () => {
      assert.isUndefined(
        mathEnforcer.addFive([10]),
        "Result should be undefined"
      );

      it("Should return undefined if the parameter is a string", () => {
        assert.isUndefined(
          mathEnforcer.addFive("10"),
          "Result should be undefined"
        );
      });
    });

    describe("Should return the number + 5 if paramter is correct", () => {
      it("Should return 10 if the parameter is 5", () => {
        assert.equal(mathEnforcer.addFive(5), 10, "Result is 10");
      });
      it("Should return 10.5 if the parameter is 5.5", () => {
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "Result is 10.5");
      });
      it("Should return 0 if the parameter is -5", () => {
        assert.equal(mathEnforcer.addFive(-5), 0, "Result is 0");
      });
      it("Should return -5 if the parameter is -10", () => {
        assert.equal(mathEnforcer.addFive(-10), -5, "Result is -5");
      });
      it("Should return -15.5 if the parameter is -20.5", () => {
        assert.equal(mathEnforcer.addFive(-20.5), -15.5, "Result is -15.5");
      });
    });
  });
});

describe("Testing substractTen method", () => {
  describe("Should return undefined if the parameter is not a number", () => {
    it("Should return undefined if the parameter is not provided", () => {
      assert.isUndefined(
        mathEnforcer.subtractTen(),
        "Result should be undefined"
      );
    });
    it("Should return undefined if the parameter is a string", () => {
      assert.isUndefined(
        mathEnforcer.subtractTen("10"),
        "Result should be undefined"
      );
    });
    it("Should return undefined if the parameter is an array", () => {
      assert.isUndefined(
        mathEnforcer.subtractTen([10]),
        "Result should be undefined"
      );
    });
    it("Should return undefined if the parameter is an object", () => {
      assert.isUndefined(
        mathEnforcer.subtractTen({ number: 10 }, "Result should be undefined")
      );
    });
  });

  describe("Should return number -10 if the parameter is correct", () => {
    it("Should return 10 if the parameter is 20", () => {
      assert.equal(mathEnforcer.subtractTen(20), 10, "Result is 10");
    });
    it("Should return 20.5 if the parameter is 30.5", () => {
      assert.equal(mathEnforcer.subtractTen(30.5), 20.5, "Result is 20.5");
    });
    it("Should return 0 if the parameter is 10", () => {
      assert.equal(mathEnforcer.subtractTen(10), 0, "Result is 0");
    });
    it("Should return -10 if the parameter is 0", () => {
      assert.equal(mathEnforcer.subtractTen(0), -10, "Result is -10");
    });
    it("Should return -10.5 if the parameter is -0.5", () => {
      assert.equal(mathEnforcer.subtractTen(-0.5), -10.5, "Result is -10.5");
    });
    it("Should return -40 if the parameter is -30", () => {
      assert.equal(mathEnforcer.subtractTen(-30), -40, "Result is -40");
    });
  });
});

describe("Testing sum method", () => {
  describe("Should return undefined if the first paramter is not a number", () => {
    it("Should return undefined if the first parameter is not provided", () => {
      assert.isUndefined(
        mathEnforcer.sum(" ", 10),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the first parameter is a string", () => {
      assert.isUndefined(
        mathEnforcer.sum("10", 10),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the first parameter is an object", () => {
      assert.isUndefined(
        mathEnforcer.sum({ num: 10 }, 10),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the first parameter is an array", () => {
      assert.isUndefined(
        mathEnforcer.sum([10], 10),
        "Result should be undefined"
      );
    });
  });
  describe("Should return undefined if the second paramter is not a number", () => {
    it("Should return undefined if the second parameter is not provided", () => {
      assert.isUndefined(
        mathEnforcer.sum(10, " "),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the second parameter is a string", () => {
      assert.isUndefined(
        mathEnforcer.sum(10, "10"),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the first parameter is an object", () => {
      assert.isUndefined(
        mathEnforcer.sum(10, { num: 10 }),
        "Result should be undefined"
      );
    });

    it("Should return undefined if the first parameter is an array", () => {
      assert.isUndefined(
        mathEnforcer.sum(10, [10]),
        "Result should be undefined"
      );
    });
  });

  describe("Should return the result if both of paramters are correct", () => {
    it("Should return 20 if paramters are both 10", () => {
      assert.equal(
        mathEnforcer.sum(10, 10),
        20,
        "Result is the sum of the 2 parameters"
      );
    });

    it("Should return 10 if paramters are 10 and 0", () => {
      assert.equal(
        mathEnforcer.sum(10, 0),
        10,
        "Result is the sum of the 2 parameters"
      );
    });
    it("Should return 0 if paramters are 10 and -10", () => {
      assert.equal(
        mathEnforcer.sum(10, -10),
        0,
        "Result is the sum of the 2 parameters"
      );
    });

    it("Should return -22,5 if paramters are -12,5 and -10", () => {
      assert.equal(
        mathEnforcer.sum(-12.5, -10),
        -22.5,
        "Result is the sum of the 2 parameters"
      );
    });
    it("Should return -2,5 if paramters are -12,5 and 10", () => {
      assert.equal(
        mathEnforcer.sum(-12.5, 10),
        -2.5,
        "Result is the sum of the 2 parameters"
      );
    });
    it("Should return 11 if paramters are 5,5 and 5.5", () => {
      assert.equal(
        mathEnforcer.sum(5.5, 5.5),
        11,
        "Result is the sum of the 2 parameters"
      );
    });
  });
});
