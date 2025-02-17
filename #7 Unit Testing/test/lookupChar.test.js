import { describe, it } from "mocha";
import { lookupChar } from "../03. Char Lookup.js";
import { assert } from "chai";

describe("Test with incorrect parameters", () => {
  describe("Should return undefined when the first parameter is not a string", () => {
    it("Should return undefined when there aren't parameters", () => {
      assert.isUndefined(lookupChar(), "Result must be undefined");
    });

    it("Should return undefined when the first parameter is an object", () => {
      assert.isUndefined(
        lookupChar({ param: "string" }, 2),
        "Result must be undefined"
      );
    });

    it("Should return undefined when the first parameter is an array", () => {
      assert.isUndefined(lookupChar(["string"], 2), "Result must be undefined");
    });

    it("Should return undefined when the first parameter is a number", () => {
      assert.isUndefined(lookupChar(4, 2), "Result must be undefined");
    });
  });

  describe("Should return undefined when the second parameter is not a number", () => {
    it("Should return undefined when the second parameter is not given", () => {
      assert.isUndefined(lookupChar("test"), "Result must be undefined");
    });

    it("Should return undefined when the second parameter is an object", () => {
      assert.isUndefined(
        lookupChar("hello", { index: 2 }),
        "Result must be undefined"
      );

         it("Should return undefined when the second parameter is a floating number", () => {
      assert.isUndefined(
        lookupChar("hello", 2.4),
        "Result must be undefined"
      );
    });

    it("Should return undefined when the second parameter is an array", () => {
      assert.isUndefined(lookupChar("test", ["3"]), "Result must be undefined");
    });
  });
});

describe("Test with correct paramter types ", () => {
  describe("Should return inccorect index when the second paramter is not correct", () => {
    it("Should return an inccorect index message when the index is larger than the length of the first parameter", () => {
      assert.equal(
        lookupChar("test", 10),
        "Incorrect index",
        "Incorrect index provided"
      );
    });

    it("Should return an inccorect index message when the provided index is equal to the length of the first parameter", () => {
      assert.equal(
        lookupChar("test", 4),
        "Incorrect index",
        "Incorrect index provided"
      );
    });

    it("Should return an inccorect index message when the provided index is negative", () => {
      assert.equal(
        lookupChar("test", 4),
        "Incorrect index",
        "Incorrect index provided"
      );
    });
  });

  describe("Should return the charcter", () => {
     it("Should return the character at the given index" , () => {
       assert.equal(
         lookupChar("test", 1),
         "e",
         "The character of firt index is 'e' "
       );
     });
  });
})});
