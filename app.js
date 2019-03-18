console.log('Running app.js');

const _ = require('lodash');
const yargs = require('yargs');
const todos = require('./todos.js');

const args = yargs.argv;

console.log('You ran the command: ' + args._[0]);
