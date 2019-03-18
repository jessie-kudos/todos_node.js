const fs = require('fs');

var addTodo = (title) => {
  var todos = fetchTodos();
  var todo = {
    title: title,
    completed: false
  };

  var duplicatetodos = todos.filter((todo) => todo.title === title);
  if (duplicatetodos.length === 0){
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }
};

var readTodo = (title) => {
  var todos = fetchTodos();
  var filteredtodos = todos.filter((todo) => todo.title === title);
  return filteredtodos[0];
};

var deleteTodo = (title) => {
  var todos = fetchTodos();
  var filteredtodos = todos.filter((todo) => todo.title !== title);
  saveTodos(filteredtodos);

  return todos.length !== filteredtodos.length;
};

var markComplete = (title) => {
  var todos = fetchTodos();
  var todo = readTodo(title);
  if (todo) {
    todo.completed = true;
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    filteredtodos.push(todo);
    saveTodos(filteredtodos);
  }
  return todo
}

var listTodos = () => {
  return fetchTodos();
}

var fetchTodos = () => {
  try {
    var todosString = fs.readFileSync('todos-data.json');
    return JSON.parse(todosString);
  } catch(e){
    return [];
  }
};

var saveTodos = (todos) => {
  fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
  console.log('------');
  console.log(`It's title is: ${todo.title}, completed: ${todo.completed}`);
}

module.exports = {
  addTodo,
  readTodo,
  deleteTodo,
  listTodos,
  logTodo,
  markComplete
};
