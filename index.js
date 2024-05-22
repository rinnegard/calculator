console.log("Welcome to Calculator 1.0");

function updateInput(value) {
    input.value = input.value + value;
}

function getInput() {
    let val = input.value;
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

    numbers = [];
    operators = []; 
})
