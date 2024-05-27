import { doMath } from "./calcTools.js";

console.log("Welcome to Calculator 1.0");

function updateInput(value) {
    input.value = input.value + value;
}

function getInput() {
    let val = Number(input.value);
    console.log(val);
    return val;
}

function clearInput(value) {
    input.value = "";
}



let digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateInput(button.textContent);
    })
});

let signButton = document.querySelector(".sign");

signButton.addEventListener("click", () => {
    if (input.value.at(0) == "-") {
        input.value = input.value.replace("-", "");
    } else {
        input.value = "-" + input.value;
    }
}
);


let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    clearInput();
    numbers = [];
    operators = [];
    let resultDisplay = document.querySelector(".calculator p");

    resultDisplay.textContent = "";
})

let input = document.querySelector("#num");


let operatorButtons = document.querySelectorAll(".operator");

let numbers = [];
let operators = [];

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        numbers.push(getInput());
        writeDisplay(input.value);
        writeDisplay(button.textContent);
        clearInput();
        operators.push(button.textContent);
    })
});

let equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
    numbers.push(getInput());
    operators.push(equalButton.textContent);
    writeDisplay(input.value);
    writeDisplay(equalButton.textContent);
    console.log(numbers);
    console.log(operators);
    clearInput();

    writeDisplay(getResult());

    numbers = [];
    operators = []; 
})

function getResult() {
    
    let result;

    for (let index = 0; index < numbers.length; index++) {
        if (index == 0) {
            result = numbers[0];
        } else {
            result = doMath(result, numbers[index], operators[index - 1]);
        }
    }

    return result;
}

function writeDisplay(result) {
    let resultDisplay = document.querySelector(".calculator p");

    resultDisplay.textContent += result;
}

