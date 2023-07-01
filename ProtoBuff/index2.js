// Here, we are making use of _pb.js file generated for us by protoc.
// Command used was: protoc\bin\protoc.exe --js_out=import_style=commonjs,binary:. portfolio.proto

const Portfolio = require("./portfolio_pb.js");
const fs = require("fs");

const reliance_data = new Portfolio.Stock();

// For the list of available functions, check the generated portfolio_pb.js file
reliance_data.setName("Reliance");
reliance_data.setQuantity(10);
reliance_data.setBuyPrice(1000);
reliance_data.setMarketPrice(1500);

console.log(reliance_data.getQuantity());

const sbi_data = new Portfolio.Stock();
sbi_data.setName("SBI");
sbi_data.setQuantity(100);
sbi_data.setBuyPrice(100);
sbi_data.setMarketPrice(300);

const tcs_data = new Portfolio.Stock();
tcs_data.setName("TCS");
tcs_data.setQuantity(20);
tcs_data.setBuyPrice(2000);
tcs_data.setMarketPrice(1500);

const portfolio = new Portfolio.Portfolio();

portfolio.addStock(reliance_data);
portfolio.addStock(sbi_data);
portfolio.addStock(tcs_data);

// Now here is the real advantage, this data can be stored as binary, and it reduces the size by quite a lot
console.log("Binary: " + portfolio.serializeBinary());
const portfolioBinary = portfolio.serializeBinary();
fs.writeFileSync("PortfolioBinary", portfolioBinary);

// Now deserializing

const portfolioDeserialized =
  Portfolio.Portfolio.deserializeBinary(portfolioBinary);

console.log(portfolioDeserialized.toString());
