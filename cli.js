#!/usr/bin/env node
const { xQuotes } = require("./libs/quotes");
const pbcopy = require("child_process").spawn("pbcopy");
const quotes = xQuotes(10);
let nb_arg = parseInt(process.argv[2]);
if (isNaN(nb_arg)) nb_arg = 1;
pbcopy.stdin.write(JSON.stringify(xQuotes(nb_arg)));
pbcopy.stdin.end();
console.log(`${nb_arg} citations copiedto clipboard`);
