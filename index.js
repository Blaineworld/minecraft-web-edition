'use strict';

const I = new (require("./lib/initializer.js"))(1, function() {
	console.log("Finished!");

	// Minecraft . . .
});

const fs = require("fs");

fs.readFile("server.properties", "utf8", async function(error, data) {
	// Process it . . .

	// Tick it off!
	I.tick();
});