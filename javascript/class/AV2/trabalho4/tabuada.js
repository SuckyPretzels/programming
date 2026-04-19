const prompt = require('prompt-sync')({ sigint: true });

let i = 1;
let num = Number(prompt("digite um numero para ver a tabuada: "));
while (i <= 10) {
    let mult = num * (i);
    console.log(`${num} x ${i} = ${mult}`);
    i++;
}
