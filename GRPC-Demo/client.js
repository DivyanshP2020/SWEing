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
    console.log("Calling Create Todo" + JSON.stringify(response));
  }
);

client.readTodos({}, (err, response) => {
  console.log("Received from server " + JSON.stringify(response));
});
