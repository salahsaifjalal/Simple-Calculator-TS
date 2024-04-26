#! /usr/bin/env node
// The above line code is shabang means it is executable file
import inquirer from "inquirer";
import chalk from "chalk";
import systemSays from "say";
systemSays.speak('This Calculator is made by Salahuddin Muhammad', undefined, undefined, (error_found) => {
    if (error_found) {
        return console.log(error_found);
    }
    // console.log('Text has been spoken.')
});
const answer = await inquirer.prompt([
    {
        message: chalk.bold.bgGreenBright("Enter First Number here: "),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.bold.bgYellowBright("Enter Second Number here: "),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk.bold.bgBlueBright("Select one of the operators to perform operation."),
        type: "list", //rawlist,checkbox
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder"],
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.bold.bgRedBright(`You perfromed Addition operation of ${answer.firstNumber} & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber + answer.secondNumber} `));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.bold.bgRedBright(`You perfromed Subtraction operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber - answer.secondNumber} `));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.bold.bgRedBright(`You perfromed Multiplication operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber * answer.secondNumber} `));
}
else if (answer.operator === "Division") {
    console.log(chalk.bold.bgRedBright(`You perfromed Division operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber / answer.secondNumber} `));
}
else if (answer.operator === "Remainder") {
    console.log(chalk.bold.bgRedBright(`You perfromed Remainder operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber % answer.secondNumber} `));
}
else {
    console.log(chalk.bold.bgCyanBright("Please select any valid operation"));
}
