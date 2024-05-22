console.log("Welcome to Calculator 1.0");

let digits = document.querySelectorAll(".digit");

digits.forEach(button => {
    button.addEventListener("click", () => {
        updateInput(button.textContent);
    })
});

function updateInput(value) {
    let input = document.querySelector("#num");
    console.log(input);
    input.value += value;
}