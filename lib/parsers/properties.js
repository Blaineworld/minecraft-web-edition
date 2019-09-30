'use strict';

/* MCWE's Properties File Parser */

const newlines = /[\n\r]+/g, comments = /\n#.+/g;

module.exports = function parseProperties(data, delimiter = "=", separator = "\n", newlineRegularExpression = newlines, commentRegularExpression = comments) {
	// Create an object to store the data in.
	const output = {};

	// Split the file into lines.
	const lines = ("\n" + String(data) + "\n").replace(newlineRegularExpression, separator).replace(commentRegularExpression, "").split(separator), last = lines.length - 1;

	// Loop through the lines and parse them.
	for (let index, line, i = 1; i < last; ++i)
		if ((index = (line = lines[i]).indexOf(delimiter)) >= 0)
			output[line.substring(0, index)] = line.substring(index + 1, line.length);

	// What's the point of all that if we don-'t return the output?
	return output;
};