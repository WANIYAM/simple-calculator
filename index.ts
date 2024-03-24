#! /usr/bin/env node

import inquirer from "inquirer";

//Taking Input From User 
let answer = await inquirer.prompt([
  { message: " Enter First Number ", type: "number", name: "firstNumber" },
  { message: " Enter Second Number ", type: "number", name: "secondNumber" },
  {
    message: "Select One Operator To Perform Operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// Adding Conditional Statements
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("invalid input");
}
