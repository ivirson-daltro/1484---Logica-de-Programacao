/*
 1. Crie uma função que calcule a área de um retângulo (largura × altura)
 2. Faça uma função que verifique se um número é par ou ímpar.
 3. Crie uma função converterDolar(valor) que retorne o valor convertido em reais,
    levando em conta a cotação definida em uma variável fora da função.
*/

function calcAreaRetangulo(larg, alt) {
  return larg * alt;
}

function ParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

function ParOuImpar2(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

let resultado = ParOuImpar2(15);
console.log(resultado);

// Variável global com a cotação do dólar
let cotacao = 5.5;

function converterDolar(valor) {
  return valor * cotacao;
}

// Exemplo de uso:
console.log(converterDolar(100)); // Saída: 550
