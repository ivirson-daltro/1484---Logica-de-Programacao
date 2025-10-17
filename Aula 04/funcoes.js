function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}

function calculadora(n1, n2, operacao) {
  if (operacao === "soma") {
    return somar;
  } else if (operacao === "subtracao") {
    return subtrair(n1, n2);
  } else if (operacao === "multiplicacao") {
    return multiplicar(n1, n2);
  } else if (operacao === "divisao") {
    return dividir(n1, n2);
  } else {
    return "Operação não permitida!";
  }
}

// console.log(calculadora(2, 4, "multiplicacao"));

// alert("Alguma coisa");

function saudar(nome) {
  //   console.log("Olá, ", nome);
}

saudar("Débora");

function exibeHoraAtual() {
  const hoje = new Date();
  const horaAtual = `${hoje.getHours()}:${hoje.getMinutes()}`;
  //   console.log("Em Brasília, são", horaAtual);
}

exibeHoraAtual();

const soma = function (n1, n2) {
  return n1 + n2;
};

// console.log(soma(2, 5));

function calcular(n1, n2, fn) {
  return fn(n1, n2);
}

const result = calcular(5, 6, somar);
// console.log(result);

const arr = [1, 2, 3, 4, 5, 6];
function acharONum4(n) {
  return n === 4;
}
const numero = arr.find(acharONum4);
// console.log(numero);

function multiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}

const dobrar = multiplicador(2);
// const dobrar = function (numero) {
//   return numero * 2;
// };

// console.log(dobrar(3));

const resultado = multiplicador(2)(3);
// console.log(resultado);

function criaCalculadoraDesconto(taxa) {
  return function (preco) {
    return preco - preco * taxa;
  };
}

// const desconto10 = criaCalculadoraDesconto(0.1);
// const precoComDesconto = desconto10(100);
// console.log(precoComDesconto);
console.log(criaCalculadoraDesconto(0.1)(100));
