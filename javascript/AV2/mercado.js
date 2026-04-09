const prompt = require('prompt-sync')({ sigint: true });

let stock = 500;
let sold = 0;
let restock = 0;
let partialSale = 0;


for (let day = 1; day <= 30; day++) {
    sold = Number(prompt("Quanta unidades vendidas hoje? "));

    if (sold > stock) {
        console.log(`VENDA PARCIAL no dia ${day}: solicitado ${sold}, vendido ${stock}`);
        sold = stock;
        partialSale++;
    }

    stock-=sold;

    if (stock === 0) {
        console.log(`RUPTURA DE ESTOQUE no dia ${day}`);
        break;
    }

    if (stock < 80) {
        if (restock < 2) {
            stock += 200;
            restock++;
        } else {
            console.log(`REPOSIÇÃO ESGOTADA no dia ${day} --- estoque crítico`);
        }
    }
}

console.log(`Estoque final: ${stock}`);
console.log(`Total de reposições realizadas: ${restock}`);
console.log(`Total de dias com venda parcial: ${partialSale}`);
