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
        result = result + numbers[index];
    }
}

console.log(result);

// switch (operators) {
//     case "+":
//         console.log(number + number);
//         break;
//     default:
//         console.log("wops");
//         break;
// }