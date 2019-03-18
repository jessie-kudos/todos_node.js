console.log('Running app.js');

const _ = require('lodash');
const yargs = require('yargs');
const todos = require('./todos.js');

const argv = yargs.argv;
var command = argv._[0]

console.log('You ran the command: ', command);

if (command === 'addTodo'){
  todos.addTodo(argv.title);
} else if (command === 'deleteTodo'){
  var todoDeleted = todos.deleteTodo(argv.title);
  var message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
  console.log(message);
} else {
  console.log('Invalid command')
}
