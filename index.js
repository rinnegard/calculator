import { doMath } from "./calcTools.js";

console.log("Welcome to Calculator 1.0");

function updateInput(value) {
    input.value = input.value + value;
}

function getInput() {
    let val = Number(input.value);
    clearInput();
    return val;
}

function clearInput(value) {
    input.value = "";
}



let digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        writeDisplay(button.textContent);
        updateInput(button.textContent);
    })
});

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
        writeDisplay(button.textContent);
        operators.push(button.textContent);
    })
});

let equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
    numbers.push(getInput());
    operators.push(equalButton.textContent);
    writeDisplay(equalButton.textContent);
    console.log(numbers);
    console.log(operators);

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

