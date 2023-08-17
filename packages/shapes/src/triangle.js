class Triangle {
	#height;
	#base;
	constructor(height, base) {
		this.#height = height;
		this.#base = base;
	}

	area() {
		return 0.5 * this.#height * this.#base;
	}
}

exports.Triangle = Triangle;
