const display = document.getElementById('display');
display.value = "0";

let equals = false;

function addToDisplay(s) {
    if (display.value == "0" && s != ".") {
        display.value = s;
    } else if (equals == true && (!isNaN(s) || s == ".")) {
        display.value = s;
    } else {
        display.value += s;
    }
    equals = false;
}

function backspace() {
    display.value = display.value.slice(0, -1) || "0";
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
    display.value = eval(expression);
    equals = true;
}
