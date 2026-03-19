const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Qual o nome do motorista? ");
let fuel = Number(prompt("Qual o tipo de combustivel? (1 - Gasolina, 2 - Etanol, 3 - Diesel) "));
let fuelq = Number(prompt("Quantos litros foram abastecidos? "));
let distance = Number(prompt("Qual foi a distancia percorrida? "));

let expected_consumption;
const real_consumption = distance / fuelq;


switch (fuel) {
case 1:
    expected_consumption = 12;
    break;
case 2:
    expected_consumption = 8,5;
    break;
case 3:
    expected_consumption = 15;
    break;
default:
    console.log("Combustivel invalido");
}

let ratio = real_consumption / expected_consumption;

switch (true) {
case ratio >= 1.1:
    console.log("Excelente --- acima do esperado."); 
    console.log("LIBERADO PARA FROTA");
    break;
case ratio >= 0.9:
    console.log("Regular --- dentro do esperado");
    console.log("LIBERADO PARA FROTA");
    break;
case ratio >= 0.7:
    console.log("Ruim --- abaixo do esperado");
    console.log("ENCAMINHADO PARA REVISAO");
    break;
default:
    console.log("Critico --- veiculo requer manutencao.");
    console.log("ENCAMINHADO PARA REVISAO");
}

console.log("Consumo do veiculo: ", real_consumption.toFixed(2));
console.log("Consumo esperado: ", expected_consumption.toFixed(2));
