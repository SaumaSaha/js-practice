const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {add, sub} = require('../calculator.js');

describe("Calculator", function() {
  describe("Add", function() {
    it("should add two numbers", function() {
      deepStrictEqual(add(2, 3), 5);
    });
    it("should add two numbers", function() {
      deepStrictEqual(add(2, 3), 6);
    });
  });

  describe("Sub", function() {
    it("should subtract two numbers", function() {
      deepStrictEqual(sub(3, 2), 1);
    });
    it("should subtract two numbers", function() {
      deepStrictEqual(sub(3, 2), 2);
    });
  });
});
