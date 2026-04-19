const prompt = require('prompt-sync')({ sigint: true });

let num = Number(prompt("Number, please: "));

for (let i = 0; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num*i}`);
}
