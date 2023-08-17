const fs = require("fs");
const { EventEmitter } = require("node:events");

const readStream = fs.createReadStream(process.argv[2], "utf-8");

const onFileData = (data) => {
	data.split("\n").forEach((line) => {
		emitter.emit("line", line);
	});
};

const vowels = new Set("aeiouAEIOU");
const isVowel = (char) => vowels.has(char);

const countVowels = (line) => {
	console.log("vowels :", line.split("").filter(isVowel).length);
};

const countCharsInLine = (line) => {
	console.log("characters: ", line.length);
};

const emitter = new EventEmitter();
readStream.on("data", onFileData);
emitter.on("line", countVowels);
emitter.on("line", countCharsInLine);
