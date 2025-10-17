const SENHA_DO_USUARIO = "123@4";

let senha = "";
let contador = 0;

while (senha !== SENHA_DO_USUARIO) {
  if (contador === 3) {
    alert("Sua senha foi bloqueada!");
    break;
  }
  senha = prompt("Digite a senha:");
  contador++;
}

if (senha === SENHA_DO_USUARIO) {
  alert("Acesso permitido!");
}
