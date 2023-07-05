const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

//In case you want to accept text from user input, has been commented in createTodo
var text = process.argv[2];
if (text == null) {
  console.error("No input received from user, reverting to Default object");
  text = "Make Video";
}

const client = new todoPackage.Todo(
  "0.0.0.0:40000",
  grpc.credentials.createInsecure()
);

client.createTodo(
  {
    id: -1,
    // text: "Create Video",
    text: text,
  },
  (err, response) => {
    console.log("Calling Create Todo\n" + JSON.stringify(response));
  }
);

client.readTodos({}, (err, response) => {
  console.log("******List of Todos received from server*******\n");
  if (response.todoItems != null) {
    response.todoItems.forEach((todoItem) => console.log(todoItem.text));
  }
});

const callForFetchingTodos = client.readTodosStream();
callForFetchingTodos.on("data", (item) => {
  console.log("received item from server " + JSON.stringify(item));
});
callForFetchingTodos.on("end", (e) => console.log("server done!"));
