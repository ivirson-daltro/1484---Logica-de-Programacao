const prompt = require("prompt-sync")();

try {
  const numero = parseInt(prompt("Digite um número: "));
  if (isNaN(numero)) {
    throw "Isso não é um número!";
  }
  const dobro = numero * 2;
  console.log(dobro);
} catch (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Houve um erro, tente novamente em instantes.");
  }
} finally {
  console.log("Fim da execução");
}
