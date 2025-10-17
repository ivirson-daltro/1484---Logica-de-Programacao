const SENHA_DO_USUARIO = "123@4";
let senha = "";
let qtdTentativas = 3;

do {
  senha = prompt("Digite a senha:");

  if (senha !== SENHA_DO_USUARIO) {
    qtdTentativas--;
    alert(
      `Senha incorreta${qtdTentativas > 0 ? ", tente novamente" : ""}.\n${
        qtdTentativas > 0
          ? "Tentativas restantes:" + qtdTentativas
          : "Seu acesso foi bloqueado!"
      }`
    );
    if (qtdTentativas === 0) {
      break;
    }
  }
} while (senha !== SENHA_DO_USUARIO);

if (senha === SENHA_DO_USUARIO) {
  alert("Acessp permitido!");
}
