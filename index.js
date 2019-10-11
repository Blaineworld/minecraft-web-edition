'use strict';

const I = new (require("./lib/initializer.js"))(2, function() {
	console.log("Finished!");

	// Minecraft . . .
});

const fs = require("fs");

const properties = require("./lib/parsers/properties.js");

fs.readFile("server.properties", "utf8", async function(error, data) {
	// Process the server.properties . . .
	console.log(properties([
		"allow-flight",
		"allow-nether",
		"broadcast-console-to-ops",
		"broadcast-rcon-to-ops",
		"difficulty",
		"enable-command-block",
		"enable-query",
		"enable-rcon",
		"enforce-whitelist",
		"force-gamemode",
		"gamemode",
		"generate-structures",
		"generator-settings",
		"hardcore",
		"level-name",
		"level-seed",
		"level-type",
		"max-build-height",
		"max-players",
		"max-tick-time",
		"max-world-size",
		"motd",
		"network-compression-threshold",
		"online-mode",
		"op-permission-level",
		"player-idle-timeout",
		"prevent-proxy-connections",
		"pvp",
		"query.port",
		"rcon.password",
		"rcon.port",
		"resource-pack",
		"resource-pack-sha1",
		"server-ip",
		"server-port",
		"snooper-enabled",
		"spawn-animals",
		"spawn-monsters",
		"spawn-npcs",
		"spawn-protection",
		"use-native-transport",
		"view-distance",
		"white-list"
	], data));

	I.tick();
});