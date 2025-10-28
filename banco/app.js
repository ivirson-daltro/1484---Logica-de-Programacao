const prompt = require("prompt-sync")();
const { depositar, sacar, transferir, verExtrato } = require("./funcoes");

let continuar = true;

do {
  console.log(`
        === MENU BANCÁRIO ===

        1 -  Depositar
        2 - Sacar
        3 - Transferir
        4 - Ver Extrato
        5 - Sair
    `);

  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      depositar();
      break;
    case "2":
      sacar();
      break;
    case "3":
      transferir();
      break;
    case "4":
      verExtrato();
      break;
    case "5":
      console.log("Saindo do sistema... até logo!");
      continuar = false;
      break;
    default:
      console.log("Opção inválida, tente novamente!");
      break;
  }
} while (continuar);
