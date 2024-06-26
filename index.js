import { doMath } from "./calcTools.js";

console.log("Welcome to Calculator 1.0");

function updateInput(value) {
    if (finished) {
        reset();
        finished = false;
    }
    if (value == "." && input.value.includes(".")) {
        return
    }
    input.value = input.value + value;
}

function getInput() {
    let val = Number(input.value);
    console.log(val);
    return val;
}

function clearInput() {
    input.value = "";
}

function reset() {
    numbers = [];
    operators = [];
    finished = false;
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

input.addEventListener("keydown", (e) => {
    if (!isNaN(Number(e.key))) {
        if (finished) {
            reset();
        }
    } else if (e.key == ".") {
        if (finished) {
            reset();
        }
        if (input.value.includes(".")) {
            e.preventDefault();
        }
    } else if (e.key == "-"){
        if (finished) {
            reset();
        }
        if (input.value.includes("-") || e.target.selectionStart != 0) {
            e.preventDefault();
            if (input.value != "-") {
                numbers.push(getInput());
                writeDisplay(input.value);
                writeDisplay(e.key);
                clearInput();
                operators.push(e.key);
            }
        }
    } else if (e.key == "e") {
        if (input.value.includes("e") || input.value == "") {
            e.preventDefault();
        }
    } else if (e.key == "+" || e.key == "/" || e.key == "*") {
        e.preventDefault()
        if (input.value != "") {
            operatorHandler(e.key);
        }
    } else if (e.key == "=" || e.key == "Enter") {
        e.preventDefault();
        if (input.value != "") {
            equalsHandler();
        }
    } else if (e.key == "Backspace" || e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "Tab" || e.key == "F5") {
        console.log("Allowed keys, do default.");
    } else {
        console.log(`Prevented: ${e.key}`);
        e.preventDefault();
    }
})

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
    reset();
    clearInput();
})




let operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!input.value == "") {
            operatorHandler(button.textContent)
        }
    })
});

let equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
    if (input.value != "") {
        equalsHandler();
    }

})

function operatorHandler(operator) {
    numbers.push(getInput());
    writeDisplay(input.value);
    writeDisplay(operator);
    clearInput();
    operators.push(operator);
}

function equalsHandler() {
        numbers.push(getInput());
        operators.push("=");
        writeDisplay(input.value);
        writeDisplay("=");
        console.log(numbers);
        console.log(operators);
        clearInput();

        writeDisplay(getResult().toString().slice(0, 6));

        finished = true;
}