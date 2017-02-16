"use strict";

const chalk = require("chalk");

const logger = {};

logger.warning = function(s){
	const t = new Date(Date.now());
	console.log(chalk.bold(t));
	console.log(chalk.yellow(s));
}

logger.error = function(s){
	const t = new Date(Date.now());
	console.log(chalk.bold(t));
	console.log(chalk.red(s));
}

logger.info = function(s){
	const t = new Date(Date.now());
	console.log(chalk.bold(t));
	console.log(chalk.green(s));
}

logger.debug = function(s){
	const t = new Date(Date.now());
	console.log(chalk.bold(t));
	console.log(chalk.blue(s));
}


module.exports = logger;