const buttons = document.querySelectorAll('.buttons button');
const playerSymbol = document.getElementById('player-symbol');
let player = "X";
let boardState = [
    "", "", "",
    "", "", "",
    "", "", ""
];

buttons.forEach(button => {
    button.addEventListener('click', click);
});

function click(event) {
    const button = event.target;
    const index = parseInt(button.dataset.index);

    if (boardState[index] !== "") {
        return;
    }

    boardState[index] = player;
    button.textContent = player;
    
    if (player == "X") {
        button.classList.add("x");
    } else {
        button.classList.add("o");
    }

    player = player == "X" ? "O" : "X";

    playerSymbol.textContent = player;
    playerSymbol.classList.remove('x','o');
    playerSymbol.classList.add(player.toLowerCase());
}

function reset() {
    boardState = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    buttons.forEach(button => {
        button.textContent = "";
        button.classList.remove('x','o');
    });

    player = "X";

    playerSymbol.textContent = player;
    playerSymbol.classList.remove('x','o');
    playerSymbol.classList.add('x');
}
