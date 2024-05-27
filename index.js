import { doMath } from "./calcTools.js";

console.log("Welcome to Calculator 1.0");

function updateInput(value) {
    input.value = input.value + value;
}

function getInput() {
    let val = Number(input.value);
    console.log(val);
    clearInput();
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

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    clearInput();
})

let input = document.querySelector("#num");


let operatorButtons = document.querySelectorAll(".operator");

let numbers = [];
let operators = [];

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        numbers.push(getInput());
        operators.push(button.textContent);
    })
});

let equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
    numbers.push(getInput());
    operators.push(equalButton.textContent);
    console.log(numbers);
    console.log(operators);

    showResult();

    numbers = [];
    operators = []; 
})

function showResult() {
    let resultDisplay = document.querySelector(".calculator p");
    let result;

    for (let index = 0; index < numbers.length; index++) {
        if (index == 0) {
            result = numbers[0];
        } else {
            result = doMath(result, numbers[index], operators[index - 1]);
        }
    }

    resultDisplay.textContent = result;
}

