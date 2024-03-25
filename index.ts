#! /usr/bin/env node
// The above line code is shabang means it is executable file
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
  {
    message: chalk.bold.bgGreenBright("Enter 1st Number here: "),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.bold.bgYellowBright("Enter 2nd Number here: "),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.bold.bgBlueBright(
      "Select one of the operators to perform operation."
    ),
    type: "list", //rawlist,checkbox
    name: "operator",
    choices: [ "Addition","Subtraction", "Multiplication","Division","Remainder" ],
  },
]);
//console.log(answer);

if (answer.operator === "Addition") {
  console.log(
    chalk.bold.bgRedBright(`You perfromed Addition operation of ${
      answer.firstNumber
    } & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber + answer.secondNumber} `)
  );
} else if (answer.operator === "Subtraction") {
  console.log(
    chalk.bold.bgRedBright(`You perfromed Subtraction operation of ${
      answer.firstNumber
    } & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber - answer.secondNumber} `)
  );
} else if (answer.operator === "Multiplication") {
  console.log(
    chalk.bold.bgRedBright(`You perfromed Multiplication operation of ${
      answer.firstNumber
    } & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber * answer.secondNumber} `)
  );
} else if (answer.operator === "Division") {
  console.log(
    chalk.bold.bgRedBright(`You perfromed Division operation of ${
      answer.firstNumber
    } & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber / answer.secondNumber} `)
  );
} else if (answer.operator === "Remainder") {
  console.log(
    chalk.bold.bgRedBright(`You perfromed Remainder operation of ${
      answer.firstNumber
    } & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber % answer.secondNumber} `)
  );
} else {
  console.log(chalk.bold.bgCyanBright("Please select any valid operation"));
}