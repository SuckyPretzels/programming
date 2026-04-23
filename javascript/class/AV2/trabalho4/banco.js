const prompt = require('prompt-sync')({ sigint: true });
let saldo = 1000;
let opNum = 0;
let input = 1;
let valor = 0;
let menu = true;

while (input !== 0) {
    if (menu) {
        console.log("=== MENU ===");
        console.log("1 - Depositar");
        console.log("2 - Sacar");
        console.log("3 - Consultar saldo");
        console.log("0 - Sair");
    }
    menu = true;

    input = Number(prompt("Operacao: "));

    switch(input) {
    case 1:
        valor = Number(prompt("Valor a depositar: "));
        if (isNaN(valor || valor < 0)) {
            console.log(`valor invalido '${valor}'`);
            continue;
        }
        saldo += valor;
        opNum++;
        console.log(`Deposito realizado. Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        valor = Number(prompt("Valor a sacar: "));
        if (isNaN(valor || valor > 0)) {
            console.log(`valor invalido '${valor}'`);
            continue;
        }
        // saldo -= valor > saldo ? saldo : valor;
        if (valor > saldo) {
            console.log(`Saldo insuficiente.`);
            menu = false;
            opNum++;
            continue;
        }
        saldo -= valor;
        opNum++;
        console.log(`Saque realizado. Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 3:
        console.log(`Saldo: R$ ${saldo}`);
        menu = false;
        opNum++;
        break;
    case 0:
        break;
    default:
        console.log(`operacao invalida '${input}'`);
        menu = false;
        continue;
    }
}
console.log(`Saldo final: R$ ${saldo.toFixed(2)}`);
console.log(`Operacoes realizadas: ${opNum}`);
