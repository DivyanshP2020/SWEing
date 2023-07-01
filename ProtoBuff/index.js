// This is conventional format of declaring schema, note that since json is not strict, ecen name2 as field will be valid

const fs = require("fs");

const portfolio = [];

portfolio.push(
  {
    name: "Relaince",
    quantity: 10,
    buy_prince: 1000,
    current_price: 1500,
  },
  {
    name: "SBI",
    quantity: 100,
    buy_prince: 100,
    current_price: 300,
  }
);

const stock = {
  name: "TCS",
  quantity: 20,
  buy_prince: 2000,
  current_price: 1500,
};

portfolio.push(stock);

console.log(portfolio);
console.log(JSON.stringify(portfolio));

fs.writeFileSync("portfolioData.json", JSON.stringify(portfolio));
