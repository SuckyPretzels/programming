const prompt = require('prompt-sync')({ sigint: true });

let usr_type, usr, pw;

usr_type = prompt("Digite o tipo do usuario (convidado, usuario, admin) ").trim().toLowerCase();

switch (usr_type)  {
case "convidado":
    console.log("Login com sucesso!");
    break;
case "usuario":
    usr = prompt("Qual o nome do usuario? ");
    pw = prompt("Qual a senha do usuario? ");
    console.log(
	usr == "usuario" && pw == "senha123" ?
	    "Login com sucesso!" :
	    "Credenciais incorretas."
    );
    break;
case "admin":
    usr = prompt("Qual o nome do admin? ");
    pw = prompt("Qual a senha do admin? ");
    console.log(
	usr == "admin" && pw == "senha123" ?
	    "Login com sucesso!" :
	    "Credenciais incorretas."
    );
    break;
default:
    console.log("Invalido");
}
