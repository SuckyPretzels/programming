const counterLabel = document.getElementById('counter-label');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

let counter = 0;

function increase() {
    counter++;
    counterLabel.textContent = counter;
}
increaseButton.addEventListener('click', increase);
function decrease() {
    counter--; 
    counterLabel.textContent = counter;
}
decreaseButton.addEventListener('click', decrease);
function reset() {
    counter = 0;
    counterLabel.textContent = counter;
}
resetButton.addEventListener('click', reset);
