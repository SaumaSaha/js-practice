process.stdin.on("data", (data) => {
	console.log(`>> ${data}`);
});

setTimeout(
	() => process.stdin.on("data", (data) => console.log(`<< ${data}`)),
	5000
);

process.stdin.on("end", () => console.log(`ended`));
