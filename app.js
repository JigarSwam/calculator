let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;


let accumulatedValue = "";
let currentInput = "";
let operator = "";

const display = document.querySelector(".screen");

let operate = (a, b, op) => {
    numA = parseInt(a);
    numB = parseInt(b);
    if (op === "+") {
        return add(numA, numB);
    } else if (op === "-") {
        return subtract(numA, numB);
    } else if (op === "*") {
        return multiply(numA, numB);
    } else if (op === "/") {
        return divide(a, b);
    } else {
        console.log("No valid operator")
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.value;
        // console.log("VAL", value);
        handleInput(value);
    })
})

let handleInput = (input) => {
    switch(input) {
        case "clear":
            accumulatedValue = "";
            currentInput = "";
            operator = "";
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (currentInput === "") {
                operator = input;
            } else {
                if (accumulatedValue === "") {
                    accumulatedValue = currentInput;
                    currentInput = "";
                    operator = input;
                } else if (operator !== "") { // an operator exists so operate based on that
                    let calculatedValue = operate(accumulatedValue, currentInput, operator);
                    accumulatedValue = calculatedValue;
                    currentInput = "";
                    operator = input;

                } else if (operator === "") {
                    operator = input;
                }
            }
            break;
        case "=":
            if(accumulatedValue !== "" && currentInput !== "" && operator !== "") {
                let calculatedValue = operate(accumulatedValue, currentInput, operator);
                accumulatedValue = calculatedValue;
                currentInput = "";
                operator = "";
            }
            break;
        default: // when a number is pressed
            currentInput += input;
    }
    // console.log(`acc: ${accumulatedValue}, curr: ${currentInput}, operator: ${operator}`);
    updateDisplay();
}

let updateDisplay = () => {
    let displayVal;
    if (currentInput === "" && accumulatedValue == "") {
        displayVal = "0";
    } else if (currentInput === "") {
        displayVal = accumulatedValue;
    } else {
        displayVal = currentInput;
    }
    display.textContent = displayVal.toString();
}