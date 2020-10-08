const fs = require("fs");

const loadData = () => {
  let todoList = fs.readFileSync("data.json").toString();
  todoList = JSON.parse(todoList);
  return todoList;
};

const listComplete = (arg) => {
  const todoList = loadData();
  const newList = todoList.filter((item) => {
    return item.status == arg;
  });
  console.log(newList);
};

const createTodo = (todo, status) => {
  const todoList = loadData();
  todoList.push({ todo: todo, status: status });
  const todoJSON = JSON.stringify(todoList);
  fs.writeFileSync("data.json", todoJSON);
};

const deleteTodo = (todo) => {
  const todoList = loadData();
  const newList = todoList.filter((item) => {
    return item.todo !== todo;
  });
  console.log(newList);
  const todoJSON = JSON.stringify(newList);
  fs.writeFileSync("data.json", todoJSON);
};

const toggleTodo = (title) => {
  const todoList = loadData();
  const singleTodo = todoList.find((item) => item.todo === title);

  if (singleTodo) {
    singleTodo.status = !singleTodo.status;
    const todoJSON = JSON.stringify(todoList);
    fs.writeFileSync("data.json", todoJSON);
  } else {
    console.log("Todo not found");
  }
};

const deleteAll = () => {
  const todoList = loadData();
  const newList = todoList.filter((item) => item.status === false);
  const todoJSON = JSON.stringify(newList);
  fs.writeFileSync("data.json", todoJSON);
};

module.exports = {
  loadData,
  createTodo,
  deleteTodo,
  toggleTodo,
  deleteAll,
  listComplete,
};
