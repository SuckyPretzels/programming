const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Qual o teu nome? ");
console.log("\n(1 - Adulto)");
console.log("(2 - Estudante)");
console.log("(3 - Idoso)");
console.log("(4 - Criança menor de 5 anos)\n");
let pass = Number(prompt("Qual a categoria da passagem? "));
let discount = 0;
let price = 0;

switch (pass) {
case 1:
    discount = 0; 
    pass = "Adulto";
    break;
case 2:
    discount = .5; 
    pass = "Estudante";
    break;
case 3:
    discount = .5; 
    pass = "Idoso";
    break;
case 4:
    discount = 1; 
    pass = "Criança";
    break;
default:
    console.log("Categoria invalida.");
    return;
}

console.log("\n(1 - Destino A: R$ 45,00)");
console.log("(2 - Destino B: R$ 72,00)");
console.log("(3 - Destino C: R$ 110,00)");
console.log("(4 - Destino D: R$ 138,00)\n");
let dest = Number(prompt("Qual o seu destino? "));

switch (dest) {
case 1:
    price = 45; 
    dest = "Destino A";
    break;
case 2:
    price = 72; 
    dest = "Destino B";
    break;
case 3:
    price = 110; 
    dest = "Destino C";
    break;
case 4:
    price = 138; 
    dest = "Destino D";
    break;
default:
    console.log("Destino invalido.");
    return;
}

let passq = Number(prompt("Quantas passagens serao? "));
let subtotal = price * passq;
let discountv = subtotal * discount;
let total = subtotal - discountv;

console.log(
    (total < 100 ? "pagamento a vista." :
     "parcelavel em ate 3x sem juros.").toUpperCase()
);

let payment;

switch (true) {
case total == 0:
    payment = "Embaque gratuito liberado.";
    console.log(payment);
    break;
case total < 100:
    payment = "Dirija-se ao guiche para pagamento.";
    console.log(payment);
    break;
case total < 200:
    payment = "Pagamento via terminal disponivel.";
    console.log(payment);
    break;
case total >= 200:
    payment = "Atendimento prioritario no guiche VIP.";
    console.log(payment);
    break;
default:
    console.log("Total negativo?");
    return;
}

console.log("----------------- Comprovante de compra -----------------");
console.log("Nome do passageiro:       "+name);
console.log("Tipo da passagem:         "+pass);
console.log("Destino Escolhido:        "+dest);
console.log("Pagamento:                "+payment);
console.log("Subtotal:                 "+"R$"+subtotal.toFixed(2));
console.log("Desconto aplicado:        "+"R$"+discountv.toFixed(2));
console.log("Preco total:              "+"R$"+total.toFixed(2));
