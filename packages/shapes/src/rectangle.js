class Rectangle {
	#length;
	#breadth;
	constructor(length, breadth) {
		this.#length = length;
		this.#breadth = breadth;
	}

	area() {
		return this.#length * this.#breadth;
	}
}

exports.Rectangle = Rectangle;
