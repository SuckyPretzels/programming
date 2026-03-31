const buttons = document.querySelectorAll('.buttons button');
const playerSymbol = document.getElementById('player-symbol');
const resetbtn = document.getElementById('resetbtn');
const statusMessage = document.getElementById('statusmessage');
// let playerStart = "X"; // who should start the NEXT match.
let player = "X";
let boardState = [
    "", "", "",
    "", "", "",
    "", "", ""
];
let gameOver = false;

buttons.forEach(button => {
    button.addEventListener('click', click);
});

function click(event) {
    const button = event.target;
    const index = parseInt(button.dataset.index);

    if (gameOver || boardState[index] !== "") { return; }

    boardState[index] = player;
    button.textContent = player;
    
    if (player === "X") {
        button.classList.add("x");
    } else {
        button.classList.add("o");
    }

    if (checkWin()) {
        updateStatus(checkWin());
        return;
    }

    player = player === "X" ? "O" : "X";
    updateStatus();

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

    if (checkWin() == "" || !gameOver) {
        player = player === "X" ? "X" : "O";
    } else {
        player = player === "X" ? "O" : "X";
    }

    gameOver = false;
    updateStatus();
}

resetbtn.addEventListener('click', reset);

function updateStatus(playervalue) {
    playervalue = playervalue || player;
    playerSymbol.textContent = playervalue;
    playerSymbol.classList.remove('x','o');
    playerSymbol.classList.add(playervalue.toLowerCase());
    if (gameOver && checkWin() !== "") {
        statusMessage.textContent = " wins!";
    } else if (gameOver) {
        playerSymbol.textContent = "";
        statusMessage.textContent = "Draw!";
    } else {
        statusMessage.textContent = "'s turn";
    }
}

function checkWin() {
    const winPatterns = [
        // horizontal wins
        [0,1,2],
        [3,4,5],
        [6,7,8],

        // vertical wins
        [0,3,6],
        [1,4,7],
        [2,5,8],

        // diagonal wins
        [0,4,8],
        [2,4,6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (boardState[a] !== "" &&
            boardState[a] === boardState[b] &&
            boardState[b] === boardState[c]) {
            
            gameOver = true;
            return boardState[a];
        }
    }
    gameOver = false;
    return null;
}
