const prompt = require('prompt-sync')({ sigint: true });

let dia = Number(prompt("Digite um número correspondente ao dia da semana: "));

switch (dia) {
case 1:
    console.log("Bom domingo!");
    break;
case 2:
    console.log("Boa segunda!");
    break;
case 3:
    console.log("Boa terca!");
    break;
case 4:
    console.log("Boa quarta!");
    break;
case 5:
    console.log("Boa quinta!");
    break;
case 6:
    console.log("Boa sexta!");
    break;
case 7:
    console.log("Bom sabado!");
    break;
    
default:
    console.log("invalido");
}
