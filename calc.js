const prompt = require('prompt-sync')({
    sigint: true
});


function getNum(num) {
    num = Number(prompt("Number?"));
    return num;
}

function getOp(op) {
    op = prompt("Operator?");
    return op;
}

let numbers = [];
let operators = [];

while (operators[operators.length - 1] != "=") {
    numbers.push(getNum());
    operators.push(getOp());

}

console.log(numbers);
console.log(operators);

let result;

for (let index = 0; index < numbers.length; index++) {
    if (index == 0) {
        result = numbers[0];
    } else {
        result = doMath(result, numbers[index], operators[index - 1]);
    }
}

console.log(result);

function doMath(num1, num2, op) {
    let res;

    switch (op) {
        case "+":
            console.log("Adding");
            res = num1 + num2;
            break;
        case "-":
            console.log("Subtracting");
            res = num1 - num2;
            break;
        case "/":
            console.log("Dividing");
            res = num1 / num2;
            break;
        case "*":
            console.log("Multiplying");
            res = num1 * num2;
            break;
        default:
            console.log("wops");
            break;
    }

    return res;
}

