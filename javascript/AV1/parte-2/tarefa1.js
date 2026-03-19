const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Qual o nome do motorista? ");
let fuel = Number(prompt("Qual o tipo de combustivel? (1 - Gasolina, 2 - Etanol, 3 - Diesel) "));
let fuelq = Number(prompt("Quantos litros foram abastecidos? "));
let distance = Number(prompt("Qual foi a distancia percorrida? "));

let expected_consumption, condition;
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

switch (true) {
case (real_consumption / expected_consumption) >= 1.1:
    condition = "ex";
    console.log("Excelente --- acima do esperado."); 
    break;
case (real_consumption / expected_consumption) >= 0.9:
    condition = "reg";
    console.log("Regular --- dentro do esperado");
    break;
case (real_consumption / expected_consumption) >= 0.7:
    condition = "bad";
    console.log("Ruim --- abaixo do esperado");
    break;
default:
    condition = "crit";
    console.log("Critico --- veiculo requer manutencao.");
}

console.log(
    condition == "ex" || condition == "reg" ? "LIBERADO PARA FROTA"
	: "ENCAMINHADO PARA REVISAO"
);

console.log("Consumo do veiculo: ", real_consumption.toFixed(2));
console.log("Consumo esperado: ", expected_consumption.toFixed(2));
