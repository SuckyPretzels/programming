const prompt = require('prompt-sync')({ sigint: true });

let name, maxspd, regspd, excspd, fine;

name = prompt("Qual o nome do motorista? ");
maxspd = Number(prompt("Qual a velocidade maxima da via? "));
regspd = Number(prompt("Qual a velocidade registrada do veiculo? "));

excspd = regspd - maxspd;

if (excspd < 0) {
    console.log("Motorista dentro do limite de velocidade.");
} else if (excspd > 0 && excspd <= 10) {
    fine = "Multa leve de R$50";
} else if (excspd >= 11 && excspd <= 20) {
    fine = "Multa media de R$100";
} else if (excspd > 20) {
    fine = "Multa grave de R$200";
} 

if (fine) {
    console.log(`Nome do motorista: ${name}, velocidade maxima da via: ${maxspd}, velocidade registrada: ${regspd}, tipo de multa: ${fine}.`);
}
