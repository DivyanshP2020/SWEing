Using protobufjs: https://www.npmjs.com/package/protobufjs

What is Protobuff

Do ls -lh to see file size
–l – displays a list of files and directories in long format and shows the sizes in bytes.
–h – scales file sizes and directory sizes into KB, MB, GB, or TB when the file or directory size is larger than 1024 bytes.
–s – displays a list of the files and directories and shows the sizes in blocks.

Install protoc from: https://github.com/protocolbuffers/protobuf/releases

Command for protoc:
protoc\bin\protoc.exe --js_out=import_style=commonjs,binary:. portfolio.proto

npm install google-protobuf

To debug index2.js, you have to either place it in main ield in package.json, or follow this to create a launch.js:
https://stackoverflow.com/questions/47167457/debug-single-javascript-file-in-visual-studio-code

Clearly, for just three records, PortfolioBinary has 49bytes, portfolioData.json has 209 bytes
$ ls -lh
total 26K
-rw-r--r-- 1 divya 197609 537 Jul 1 2023 index.js
-rw-r--r-- 1 divya 197609 12K Jul 1 05:57 portfolio_pb.js
-rw-r--r-- 1 divya 197609 49 Jul 1 06:50 PortfolioBinary
-rw-r--r-- 1 divya 197609 209 Jul 1 06:32 portfolioData.json
