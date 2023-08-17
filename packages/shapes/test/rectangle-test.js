const { strictEqual } = require("assert");
const { describe, it } = require("node:test");
const { Rectangle } = require("../src/rectangle");

describe("Rectangle", () => {
	it("should give the area of rectangle", () => {
		const rectangle = new Rectangle(2, 2);
		const actual = rectangle.area();
		const expected = 4;
		strictEqual(actual, expected);
	});
});
