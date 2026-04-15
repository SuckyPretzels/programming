const prompt = require('prompt-sync')({ sigint: true });

let x = 69;
let number = 0;
while(number !== x) {
    number = Number(prompt("qual o numero que eu estou pensando? "));
    if (number === x) {
        console.log("voce acertou!");
        break;
    }
    console.log("tente de novo");
}
