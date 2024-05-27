// const prompt = require('prompt-sync')({
//     sigint: true
// });

import promptSync from 'prompt-sync';
import { doMath } from "./calcTools.js";

const prompt = promptSync({
    sigint: true
});

import {  } from "prompt-sync";


function getNum() {
    let num;

    while (isNaN(num) || num == "") {
        num = prompt("Number:");
        if (isNaN(num) || num == "") {
            console.log(`"${num}" is not a valid number. Try again.`);
        }
    }
    return Number(num);
}

function getOp() {
    let op;

    while (!validOperators.includes(op)) {
        op = prompt("Operator:");

        if (!validOperators.includes(op)) {
            console.log(`"${op}" is not a valid operator. Try again.`);
        }
    }


    return op;
}

// function doMath(num1, num2, op) {
//     let res;

//     switch (op) {
//         case "+":
//             res = num1 + num2;
//             break;
//         case "-":
//             res = num1 - num2;
//             break;
//         case "/":
//             res = num1 / num2;
//             break;
//         case "*":
//             res = num1 * num2;
//             break;
//         default:
//             console.log("wops, something went wrong");
//             break;
//     }

//     return res;
// }


let validOperators = ["+", "-", "/", "*", "="];

let numbers = [];
let operators = [];
let result;
let fullCalc = "";

console.log("Calc 1.0 | This calculator does not know order of operations");

while (operators[operators.length - 1] != "=") {
    let num = getNum()
    fullCalc += num;
    numbers.push(num);

    let op = getOp()
    fullCalc += op;
    operators.push(op);

}

for (let index = 0; index < numbers.length; index++) {
    if (index == 0) {
        result = numbers[0];
    } else {
        result = doMath(result, numbers[index], operators[index - 1]);
    }
}

console.log(fullCalc);
console.log(result);

export default doMath;


