const prompt = require('prompt-sync')({ sigint: true });

let email = "123@123.com";
let senha = "123123";
while(true) {
    let usr_email = prompt("Qual o seu email? ");
    let usr_senha = prompt("Qual a sua senha? ");
    if (usr_email !== email & usr_senha !== senha) {
        console.log("email e senha errados");
    } else if (usr_email !== email) {
        console.log("email errado");
    } else if (usr_senha !== senha) {
        console.log("senha errada");
    } else {
        console.log("logado com sucesso!!!");
        break;
    }
}
