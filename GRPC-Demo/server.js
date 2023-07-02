const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();
server.bind("localhost:40000", grpc.ServerCredentials.createInsecure());

// This specefies which service to add, and then as second parameter,
// it takes a map where Key is function in package->service, value is local function

server.addService(todoPackage.Todo.service, {
  createTodo: createTodo,
  readTodos: readTodos,
});
server.start();

const todos = [];
function createTodo(call, callback) {
  // console.log(call);
  const todoItem = {
    id: todos.length + 1,
    text: call.request.text,
  };
  todos.push(todoItem);
  callback(null, todoItem);
}
function readTodos(call, callback) {}
