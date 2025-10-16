/*
    Eu gosto de ir para a praia, mas geralmente eu só vou quando duas condições são atendidas:
    Quando eu tenho dinheiro e se o tempo estiver bom (ensolarado)
*/

// = Atribuir valor
// == Compara dois termos, quanto ao valor
// === Compara dois termos, quanto ao valor e o tipo

const tenhoDinheiro = false;
const estaEnsolarado = false;
const meuAmigoMeChamouEBancou = true;
let fiqueiDevendoUma = false;

// && - operador AND
// || - operador OR
if (meuAmigoMeChamouEBancou || (tenhoDinheiro && estaEnsolarado)) {
  // código que será executado, caso a condição seja atendida
  console.log("Obaa!! Vou à praia!");
} else {
  // codigo que será executado, caso a condição não seja atendida
  console.log("Deu ruim, vou ficar em casa :(");
}

if (tenhoDinheiro && estaEnsolarado) {
  // código que será executado, caso a condição seja atendida
  console.log("Obaa!! Vou à praia!");
} else if (meuAmigoMeChamouEBancou) {
  fiqueiDevendoUma = true;
  console.log("Tou liso, mas vou à praia!");
} else {
  // codigo que será executado, caso a condição não seja atendida
  console.log("Deu ruim, vou ficar em casa :(");
}

// -------------------------------------------------------------------------------
// Dias da semana (0 a 6)
const diaDaSemana = 10;

if (diaDaSemana === 0) {
  console.log("Domingo");
} else if (diaDaSemana === 1) {
  console.log("Segunda-feira");
} else if (diaDaSemana === 2) {
  console.log("Terça-feira");
} else if (diaDaSemana === 3) {
  console.log("Quarta-feira");
} else if (diaDaSemana === 4) {
  console.log("Quinta-feira");
} else if (diaDaSemana === 5) {
  console.log("Sexta-feira");
} else if (diaDaSemana === 6) {
  console.log("Sábado");
} else {
  console.log("Não é um dia da semana");
}
