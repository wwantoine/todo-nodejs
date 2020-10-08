const yargs = require("yargs");
const todoController = require("./controller");
const chalk = require("chalk");

yargs.command({
  command: "list",
  describe: "show the todo list",
  handler: function () {
    let data = todoController.loadData();
    console.log(data);
  },
});

yargs.command({
  command: "listComplete",
  describe: "show completed tasks",
  handler: function (arg) {
    todoController.listComplete(true);
  },
});

yargs.command({
  command: "listIncomplete",
  describe: "show uncompleted tasks",
  handler: function (arg) {
    todoController.listComplete(false);
  },
});

yargs.command({
  command: "create",
  describe: "create a new todo",
  builder: {
    todo: {
      type: "string",
      demandOption: true,
      describe: "Thing to do",
    },
    status: {
      type: "boolean",
      demandOption: true,
      describe: "Complete or not",
      default: false,
    },
  },
  handler: function (arg) {
    todoController.createTodo(arg.todo, arg.status);
  },
});

yargs.command({
  command: "delete",
  describe: "Delete the task",
  builder: {
    todo: {
      type: "string",
      demandOption: true,
      describe: "Task to delete",
    },
  },
  handler: function (arg) {
    todoController.deleteTodo(arg.todo);
  },
});

yargs.command({
  command: "toggle",
  describe: "Toggle the task",
  builder: {
    todo: {
      type: "string",
      demandOption: true,
      describe: "Task to delete",
    },
  },
  handler: function (arg) {
    todoController.toggleTodo(arg.todo);
  },
});

yargs.command({
  command: "deleteAll",
  describe: "Delete all completed tasks",
  handler: function () {
    todoController.deleteAll();
  },
});

yargs.parse();
