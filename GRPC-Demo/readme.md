This is a simple todo application to explore GRPC

Refer this: https://grpc.io/docs/languages/node/basics/
Note that, there are two ways to generate the code needed to work with protocol buffers in Node.js - one approach uses Protobuf.js to dynamically generate the code at runtime, the other uses code statically generated using the protocol buffer compiler protoc

Now since we are doing this: const protoLoader = require("@grpc/proto-loader");
grpc/proto-loader uses Protobuf.js behind the scenes

To make this app run:

npm i grpc
npm install @grpc/proto-loader

Run server.js
go to terminal, type node client.js


RESOURCES
https://www.linkedin.com/advice/0/what-best-practices-designing-testing-grpc-rest-endpoints