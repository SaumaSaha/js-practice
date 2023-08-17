class StdinReader {
	#readDelay;
	#eventHandlers;
	constructor(readDelay) {
		this.#readDelay = readDelay;
		this.#eventHandlers = { data: [], end: [] };
		this.#start();
	}

	#isDataEventNotThere() {
		return this.#eventHandlers.data.length === 0;
	}

	#start() {
		process.stdin.setEncoding("utf-8");
		const readInterval = setInterval(() => {
			if (this.#isDataEventNotThere()) {
				clearInterval(readInterval);
				return;
			}
			const data = process.stdin.read();
			if (data) {
				this.#eventHandlers.data.forEach((onData) => onData(data));
			}
			if (process.stdin._readableState.ended) {
				clearInterval(readInterval);
				this.#eventHandlers.end.forEach((onEnd) => onEnd());
			}
		}, this.#readDelay);
	}

	on(event, callback) {
		this.#eventHandlers[event].push(callback);
	}
}

const stdinReader = new StdinReader(1);

stdinReader.on("data", (data) => console.log(`1. ${data}`));
stdinReader.on("end", () => console.log("ended"));
setTimeout(
	() => stdinReader.on("data", (data) => console.log(`2. ${data}`)),
	5000
);
