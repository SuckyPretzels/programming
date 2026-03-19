const prompt = require('prompt-sync')({ sigint: true });

let age;

age = Number(prompt("Qual sua idade? "));
	     
c = age >= 65 ? "Você pode se aposentar." :
    age >= 60 ? Number(prompt("Qual seu tempo de contribuicao? ")) >= 30 ? "Voce pode se aposentar." :
    "Você não pode se aposentar." :
    "Você não pode se aposentar.";

console.log(c);
