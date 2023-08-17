const { strictEqual } = require("assert");
const { describe, it } = require("node:test");
const { Triangle } = require("../src/triangle");

describe("Triangle", () => {
	it("should give the area of triangle", () => {
		const triangle = new Triangle(2, 2);
		const actual = triangle.area();
		const expected = 2;
		strictEqual(actual, expected);
	});
});
