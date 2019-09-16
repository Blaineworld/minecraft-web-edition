'use strict';

/* MCWE's Initialization Helper */

class Initializer {
	get remaining() {
		return this.tasks - this.completed;
	}

	tick(count = 1) {
		// Tick a task off the list.
		if (this.completed >= this.tasks)
			return false;

		if ((this.completed += count) >= this.tasks) {
			if (typeof this.callback === "function")
				try {
					this.callback();
				} catch(error) {
					this.error = error;
				}
			return true;
		}

		return false;
	}

	constructor(tasks = 0, callback = null) {
		// Create a new Initializer.
		this.callback = callback;
		this.completed = 0;
		this.tasks = Number(tasks) || 0;
	}
}

module.exports = Initializer;