const display = document.getElementById('display');
display.value = "0";

let equals = false;

function decimalPoint(displayValue) {
    let parts = displayValue.split(/[+\−×÷]/);
    let currentNumber = parts[parts.length -1];

    return currentNumber.includes(".");
}

function isOperator(char) {
    return ["+", "−", "×", "÷"].includes(char);
}

function addToDisplay(s) {
    let lastChar = display.value.slice(-1);
    // handle if an operation was just evaluated
    if (equals) {
        if (!isNaN(s)) {
            display.value = s;
        } else if (display.value == "Indeterminate" || display.value == "Error") {
            display.value = "0";
            display.value += s;
        } else {
            display.value += s;
        }
        equals = false;
        return;
    }

    // check if there is already a decimal point in the current number
    if (s == ".") {
        if (decimalPoint(display.value)) return;   
        if (isNaN(lastChar)) {
            display.value += "0.";
            return;
        }
    }
    
    // prevent multiple operators in sequence
    if (isOperator(lastChar) && isOperator(s)) {
        display.value = display.value.slice(0, -1) + s;
        return;
    }
    
    // handle leading zeros.
    if (display.value == "0" && (!isNaN(s) || s == "−" || s == "+")) {
        display.value = s;
    } else {
        display.value += s;
    }
}

function backspace() {
    if (display.value == "Error" || display.value == "Indeterminate") {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1) || "0";
    }
}

function clearDisplay() {
    display.value = "0";
    equals = false;
}

function calculate() {
    let input = display.value;
    let expression = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "÷") {
            expression += "/";
        } else if (input[i] == "×") {
            expression += "*";
        } else if (input[i] == "−") {
            expression += "-";
        } else {
            expression += input[i];
        }
    }

    let result = eval(expression);

    if (isNaN(result)) {
        display.value = "Indeterminate";
    } else if (!isFinite(result)) {
        display.value = "Error";
    } else {
        display.value = result;
    }
    equals = true;
}
