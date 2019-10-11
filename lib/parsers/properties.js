'use strict';

/* MCWE's Properties File Library */

const newlines = /[\n\r]+/g, comments = /[\r\n]#.+/g;

function specified(names, input, separator = "=") {
	const output = {};

	if (!(Symbol.iterator in names))
		throw Error("The key name list must be iterable.");

	for (let key of names)
		output[key] = null;

	const lines = String(input).replace(comments, "").split(newlines);

	for (let index, key, line, i = 0; i < lines.length; ++i)
		if ((index = (line = lines[i]).indexOf(separator)) >= 0)
			if ((key = line.substring(0, index)) in output)
				output[key] = line.substring(index + separator.length, line.length);

	return output;
}

function unspecified(input, separator = "=") {
	const output = {};

	const lines = String(input).replace(comments, "").split(newlines);

	for (let index, line, i = 0; i < lines.length; ++i)
		if ((index = (line = lines[i]).indexOf(separator)) >= 0)
			output[line.substring(0, index)] = line.substring(index + separator.length, line.length);

	return output;
}

module.exports = function properties(names = "", input = "", separator = "=") {
	switch (arguments.length) {
		case 1:
		return unspecified(String(names));
		case 2:
		return specified(names || "", String(input));
		case 3:
		return specified(names || "", String(input), String(separator));
		default:
		throw TypeError(`This function takes 1 or 2 arguments, not ${arguments.length}.`);
	}
};

// Why not make it a command-line utility?
if (!module.parent) {
	let fs = require("fs"), actual = Array.from(process.argv), display = actual;
	actual.splice(0, 2);
	actual = actual.join(" ");

	if (!actual)
		console.error("Please specify a file to parse.");
	else {
		if (!fs.existsSync(actual)) {
			if (!actual.toUpperCase().endsWith(".PROPERTIES"))
				display += ".properties";
			actual += ".properties";
		}

		try {
			const input = module.exports(fs.readFileSync(actual, "utf8"));

			console.log(`- ${display} -\n`);
			for (let key in input)
				console.log(`${JSON.stringify(key)}: ${input[key]}`);
		} catch(error) {
			console.error(`Unable to read\n  ${JSON.stringify(display)}\nAre you sure you spelled it correctly?`, error);
		}
	}
}