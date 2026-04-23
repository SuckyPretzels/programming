const prompt = require('prompt-sync')({ sigint: true });
let input = 0;
let products = 0;
let total = 0;
let max = input;

while (input >= 0) {
    input = Number(prompt("Preco do produto: "));
    if (input < 0) {
        break;
    }
    products++;
    max = input > max ? input : max;
    total+=input;
}
console.log(`Produtos: ${products}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Produto mais caro: R$ ${max.toFixed(2)}`);
