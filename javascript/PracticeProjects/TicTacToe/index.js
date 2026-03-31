const buttons = document.querySelectorAll('.buttons button');
const playerSymbol = document.getElementById('player-symbol');
const resetBtn = document.getElementById('reset-btn');
const statusMessage = document.getElementById('status-message');
let playerStart = "X"; // who should start the NEXT round.
let player = playerStart;
let boardState = emptyBoard();
let gameOver = false;
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

function emptyBoard() {
    return [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
}

function handleClick(event) {
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

    const winningResult = checkWin();

    if (winningResult || checkDraw()) {
        gameOver = true;
    }

    if (winningResult) {
        winningResult.forEach(line => {
            highlightWinningLine(line);
        });
        const winner = boardState[winningResult[0][0]];
        updateStatus("win", winner);
        return;
    }

    if (checkDraw()) {
        updateStatus("draw");
        return;
    }
    updatePlayer("turn");
    updateStatus("turn", player);
}

function reset() {
    boardState = emptyBoard();

    buttons.forEach(button => {
        button.textContent = "";
        button.classList.remove('x','o','winner');
    });
    updatePlayer("reset");
    gameOver = false;
    updateStatus("turn", player);
}

resetBtn.addEventListener('click', reset);

function updatePlayer(type) {
    if (type === "reset") {
        if (gameOver) {
            playerStart = playerStart === "X" ? "O" : "X";
            player = playerStart;
        } else {
            player = playerStart;
        }
    } else if (type === "turn") {
        player = player === "X" ? "O" : "X";
    }
}

function updateStatus(type, value) {
    playerSymbol.classList.remove('x','o');

    if (type === "turn") {
        playerSymbol.textContent = value;
        playerSymbol.classList.add(value.toLowerCase());
        statusMessage.textContent = "'s turn";
    }

    if (type === "win") {
        playerSymbol.textContent = value;
        playerSymbol.classList.add(value.toLowerCase());
        statusMessage.textContent = " wins!";
    }

    if (type === "draw") {
        playerSymbol.textContent = "";
        statusMessage.textContent = "Draw!";
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

    let winningLines = [];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (boardState[a] !== "" &&
            boardState[a] === boardState[b] &&
            boardState[b] === boardState[c]) {

            winningLines.push(pattern);
        }
    }

    if (winningLines.length > 0) {
        return winningLines;
    }
    return null;
}

function checkDraw() {
    return boardState.every(cell => cell !== "");
}

function highlightWinningLine(winningIndices) {
    winningIndices.forEach(index => {
        const button = buttons[index];
        if (button) {
            button.classList.add('winner');
        }
    });
}
