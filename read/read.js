const fs = require("fs");

const readSync = (renderer, ...files) => {
	if (files.length === 0) return;
	fs.readFile(files[0], "utf-8", (err, data) => {
		if (err) return;
		renderer(data);
		readSync(renderer, ...files.slice(1));
	});
};

const display = (data) => {
	console.log(data);
};

readSync(display, ...process.argv.slice(2));
