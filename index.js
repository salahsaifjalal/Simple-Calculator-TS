#! /usr/bin/env node
// The above line code is shabang means it is executable file
import inquirer from "inquirer";
import chalk from "chalk";
import systemSays from "say";
import mychalkanimation from "chalk-animation";
let calculatorImage = function () {
    let animation = mychalkanimation.rainbow(`   
      Calculator Made by Salahuddin Muhammad
           _____________________
          |  _________________  |
          | |    Year 2024    | |
          | |_________________| | 
          |  ___ ___ ___   ___  |
          | | 7 | 8 | 9 | | + | |
          | |___|___|___| |___| |
          | | 4 | 5 | 6 | | - | |
          | |___|___|___| |___| |
          | | 1 | 2 | 3 | | x | |
          | |___|___|___| |___| |
          | | . | 0 | = | | / | |
          | |___|___|___| |___| |
          |_____________________|

  `);
    setTimeout(() => {
        animation.stop();
        askQuestion();
    }, 5000);
};
calculatorImage();
systemSays.speak("This Calculator is made by Salahuddin Muhammad", undefined, 0.75, (error_found) => {
    if (error_found) {
        return console.error(error_found);
    }
});
let askQuestion = async function () {
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
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Remainder",
            ],
        },
    ]);
    if (answer.operator === "Addition") {
        //myFunction()
        systemSays.speak(`You perfromed Addition operation of ${answer.firstNumber} & ${answer.secondNumber} and 
    the result is: ${answer.firstNumber + answer.secondNumber}`, undefined, undefined, (error_found) => {
            if (error_found) {
                return console.error(error_found);
            }
        });
        console.log(chalk.bold.bgRedBright(`You perfromed Addition operation of ${answer.firstNumber} & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber + answer.secondNumber} `));
    }
    else if (answer.operator === "Subtraction") {
        systemSays.speak(`You perfromed Subtraction operation of ${answer.firstNumber} & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber - answer.secondNumber}`, undefined, undefined, (error_found) => {
            if (error_found) {
            }
        });
        console.log(chalk.bold.bgRedBright(`You perfromed Subtraction operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber - answer.secondNumber} `));
    }
    else if (answer.operator === "Multiplication") {
        systemSays.speak(`You perfromed Multiplication operation of ${answer.firstNumber} & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber * answer.secondNumber}`, undefined, undefined, (error_found) => {
            if (error_found) {
            }
        });
        console.log(chalk.bold.bgRedBright(`You perfromed Multiplication operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber * answer.secondNumber} `));
    }
    else if (answer.operator === "Division") {
        systemSays.speak(`You perfromed Division operation of ${answer.firstNumber} & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber / answer.secondNumber}`, undefined, undefined, (error_found) => {
            if (error_found) {
            }
        });
        console.log(chalk.bold.bgRedBright(`You perfromed Division operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber / answer.secondNumber} `));
    }
    else if (answer.operator === "Remainder") {
        systemSays.speak(`You perfromed Remainder operation of ${answer.firstNumber} & ${answer.secondNumber} and 
      the result is: ${answer.firstNumber % answer.secondNumber}`, undefined, undefined, (error_found) => {
            if (error_found) {
            }
        });
        console.log(chalk.bold.bgRedBright(`You perfromed Remainder operation of ${answer.firstNumber} & ${answer.secondNumber} and 
        the result is: ${answer.firstNumber % answer.secondNumber} `));
    }
    else {
        systemSays.speak("Please select any valid operation", undefined, undefined, (error_found) => {
            if (error_found) {
            }
        });
        console.log(chalk.bold.bgCyanBright("Please select any valid operation"));
    }
};
/*
   mymain() {
  //clear();
  await calculatorImage ();
}

setTimeout(() => {
}, timeout);
//const myCalculator = new Calculator();
mymain();

//askQuestion();
*/
