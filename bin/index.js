#! /usr/bin/env node
const yargs = require("yargs");
const fib = require("./utils");

const usage = "returns the number at position <n> in the fibonacci sequence";
const options = yargs.usage(usage).help(true).argv;

// console.log(options)

if (isNaN(options._)) {
  return console.log(`"${options._}" is not a number`);
}

const num = options._;

const output = fib(num);

console.log(output);
