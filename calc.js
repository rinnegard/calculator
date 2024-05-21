const prompt = require('prompt-sync')({
    sigint: true
});


function getNum() {
    let num;

    while (isNaN(num) || num == "") {
        num = prompt("Number:");
    }
    return Number(num);
}

function getOp() {
    let op;

    while (!validOperators.includes(op)) {
        op = prompt("Operator:");
    }


    return op;
}

function doMath(num1, num2, op) {
    let res;

    switch (op) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "/":
            res = num1 / num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        default:
            console.log("wops, something went wrong");
            break;
    }

    return res;
}


let validOperators = ["+", "-", "/", "*", "="];

let numbers = [];
let operators = [];
let result;

console.log("Calc 1.0 | This calculator does not know order of operations");

while (operators[operators.length - 1] != "=") {
    numbers.push(getNum());
    operators.push(getOp());

}

for (let index = 0; index < numbers.length; index++) {
    if (index == 0) {
        result = numbers[0];
    } else {
        result = doMath(result, numbers[index], operators[index - 1]);
    }
}

console.log(result);


