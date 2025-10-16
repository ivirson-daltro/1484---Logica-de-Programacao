const tenhoDinheiro = false;
const estaEnsolarado = false;
const meuAmigoMeChamouEBancou = true;
let fiqueiDevendoUma = false;

let resultado;

// if (tenhoDinheiro && estaEnsolarado) {
//   resultado = "Obaa!! Vou à praia!";
// } else {
//   resultado = "Deu ruim, vou ficar em casa :(";
// }

tenhoDinheiro && estaEnsolarado // checagem das condições
  ? (resultado = "Obaa!! Vou à praia!") // código que será executado, caso a condição seja atendida
  : (resultado = "Deu ruim, vou ficar em casa :("); // código que será executado, caso a condição não seja atendida

console.log(resultado);

// function qualquer(param1, param2) {
//   if (param1 && param2) {
//     return true;
//   } else {
//     return false;
//   }
// }

function qualquer(param1, param2) {
  return param1 && param2 ? true : false;
}

// function qualquer(param1, param2) {
//   return param1 && param2;
// }

const retorno = qualquer(true, false);
console.log(retorno);
