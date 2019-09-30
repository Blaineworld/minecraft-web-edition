'use strict';

/* MCWE's Properties File Parser */

const newlines = /[\n\r]+/g, comments = /[\r\n]#.+/g;

module.exports = function properties(data, delimiter = "=", newlineRegularExpression = newlines, commentRegularExpression = comments) {
	// Create an object to store the data in.
	const output = {};

	// Split the file into lines.
	const lines = ("\n" + String(data) + "\n").replace(commentRegularExpression, "").split(newlineRegularExpression), last = lines.length - 1;

	// Loop through the lines and parse them.
	for (let index, line, i = 1; i < last; ++i)
		if ((index = (line = lines[i]).indexOf(delimiter)) >= 0)
			output[line.substring(0, index)] = line.substring(index + 1, line.length);

	// There;s no point of all that if we don-'t return the output!
	return output;
};

// Why not use this as a command-line utility?
if (!module.parent) {
	let fs = require("fs"), filename = Array.from(process.argv);
	filename.splice(0, 2);
	filename = filename.join(" ");
	if (!filename)
		console.error("Please specify a file to parse.");
	else {
		if (!filename.toUpperCase().endsWith(".PROPERTIES") && !fs.existsSync(filename))
			filename += ".properties";
		try {
			const data = module.exports(fs.readFileSync(filename, "utf8"));
			console.log(`- ${filename} -\n`);
			for (let key in data)
			console.log(`${JSON.stringify(key)}: ${data[key]}`);
		} catch(error) {
			console.error(`Unable to read:\n${filename}\nAre you sure you spelled it right?`);
		}
	}
}