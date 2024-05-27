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

export { doMath };