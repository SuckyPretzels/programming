const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Qual o teu nome? ");
let account = Number(prompt("Qual o tipo de conta? (1 - Conta Corrente 2 - Conta Poupanca 3 - Conta Salario) "));
let saldo = Number(prompt("Qual o saldo de tua conta? "));

let daily;

switch (account) {
case 1:
    daily = 3000;
    break;
case 2:
    daily = 1500;
    break;
case 3:
    daily = 2000;
    break;
default:
    console.log("Tipo de conta invalido.");
}

let operation = Number(prompt("Qual a operacao desejada? (1 - Saque 2 - Depósito 3 - Consultar Saldo) ")); 

switch (operation) {
case 1:
    let saque = Number(prompt("Quanto dinheiro queres sacar? "));
   switch (true) {
   case saque > daily:
       console.log("Saque negado — valor acima do limite diário.");
       break;
   case saque > saldo:
       console.log("Saque negado — saldo insuficiente");
       break;
   case saque <= saldo:
       console.log("Saque realizado com sucesso.");
       break;
   default:
       console.log("Algo deu errado.");
   } 
    break;
case 2:
    let deposit = Number(prompt("Quanto dinheiro queres depositar? "));
    saldo = saldo + deposit;
    console.log("Deposito realizado com sucesso");
    break;
case 3:
    console.log(
        saldo > 0 ? "Saldo positivo" :
            "Saldo zerado/negativo"
    );
    console.log(saldo.toFixed(2));
    break;
default:
    console.log("Operacao invalida.");
}
