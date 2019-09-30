'use strict';

const I = new (require("./lib/initializer.js"))(2, function() {
	console.log("Finished!");

	// Minecraft . . .
});

const fs = require("fs");

fs.readFile("server.properties", "utf8", async function(error, data) {
	// Process the server.properties . . .
	I.tick();
});