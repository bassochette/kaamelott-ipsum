#!/usr/bin/env node
const { xQuotes } = require("./libs/quotes");
const pbcopy = require("child_process").spawn("pbcopy");
let nb_arg = parseInt(process.argv[2]);
if (isNaN(nb_arg)) nb_arg = 1;
const quotes = xQuotes(nb_arg);
pbcopy.stdin.write(JSON.stringify(quotes));
pbcopy.stdin.end();
console.log(quotes);
