const prompt = require("prompt-sync")();

let saldo = 0;
let extrato = [];

function depositar() {
  const valor = Number(prompt("Digite o valor para depósito: "));
  if (valor > 0) {
    saldo += valor;
    extrato.push(`Depósito de R$ ${valor.toFixed(2)}`);
    console.log("Depósito realizado com sucesso!");
    verSaldo();
  } else {
    console.log("Valor inválido para depósito!");
  }
}

function sacar() {
  const valor = Number(prompt("Digite o valor para saque: "));
  if (valor > 0 && valor <= saldo) {
    saldo -= valor;
    extrato.push(`Saque de R$ ${valor.toFixed(2)}`);
    console.log("Saque realizado com sucesso!");
    verSaldo();
  } else if (valor > saldo) {
    console.log("Saldo insuficiente!");
  } else {
    console.log("valor inválido!");
  }
}

function transferir() {
  const contaDestino = prompt("Digite o número da conta de destino: ");
  const valor = Number(prompt("Digite o valor para transferir: "));
  if (valor > 0 && valor <= saldo) {
    saldo -= valor;
    extrato.push(
      `Transferência de R$ ${valor.toFixed(2)} para a conta ${contaDestino}`
    );
    console.log(
      `Transferência de R$ ${valor.toFixed(
        2
      )} para a conta ${contaDestino} realizada com sucesso!`
    );
    verSaldo();
  } else if (valor > saldo) {
    console.log("Saldo insuficiente!");
  } else {
    console.log("valor inválido!");
  }
}

function verExtrato() {
  console.log("\nExtrato da conta:");
  if (!extrato.length) {
    console.log("Nenhuma movimentação realizada.");
  } else {
    extrato.forEach((mov) => {
      console.log("-", mov);
    });
  }

  verSaldo();
}

function verSaldo() {
  console.log(`\nSeu saldo é de: R$ ${saldo.toFixed(2)}\n`);
}

module.exports = { depositar, sacar, transferir, verExtrato };
