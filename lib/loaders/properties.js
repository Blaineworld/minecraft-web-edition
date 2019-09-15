'use strict';

/* MCWE's Properties File Loader */

const newlines = /[\n\r]+/g, comments = /\n#.+/g;

module.exports = async function parseProperties(data, delimiter = "=", separator = "\n") {
	// Create an object to store the data in.
	const output = {};

	// Split the file into lines.
	const lines = await await await ("\n" + await String(data) + "\n").replace(newlines, "\n").replace(comments, "").split(separator), last = lines.length - 1;

	// Loop through the lines and parse them.
	for (let index, line, i = 1; i < last; ++i)
		if ((index = await (line = lines[i]).indexOf(delimiter)) >= 0)
			output[await line.substring(0, index)] = await line.substring(index + 1, line.length);

	return output;
};