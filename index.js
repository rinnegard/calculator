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

function reset() {
    numbers = [];
    operators = [];
    let resultDisplay = document.querySelector(".calculator p");

    resultDisplay.textContent = "";
}

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

let finished = false;
let numbers = [];
let operators = [];

let input = document.querySelector("#num");



let digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (finished) {
            reset();
            finished = false;
        }
        if (button.textContent == "." && input.value.includes(".")) {
            return
        }
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
    reset();
    clearInput();
})




let operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!input.value == "") {
            numbers.push(getInput());
            writeDisplay(input.value);
            writeDisplay(button.textContent);
            clearInput();
            operators.push(button.textContent);
        }
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

    finished = true;
})