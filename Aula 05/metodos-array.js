const frutas = ["maçã", "banana", "ácerola"];

// Métodos que alteram diretamente o array original
// push
frutas.push("abacaxi");
// console.log(frutas);
frutas.push(...["pêra", "melão"]);
// console.log(frutas);

// pop
frutas.pop();
// console.log(frutas);

// shift
frutas.shift();
// console.log(frutas);

// unshift
frutas.unshift("uva", "abacate");
// console.log(frutas);

// reverse
frutas.reverse();
// console.log(frutas);

// Métodos de iteração e transformação
// includes
// console.log(frutas.includes("abacate"));

// forEach
const imprimeFruta = (fruta) => console.log(fruta);
// frutas.forEach(imprimeFruta);

// Aqui tá o ouro
// frutas.forEach((fruta) => console.log(fruta));

for (let i = 0; i < frutas.length; i++) {
  //   console.log(frutas[i]);
}

// map
const frutasUpperCase = frutas.map((fruta) => fruta.toUpperCase());
// console.log(frutas);
// console.log(frutasUpperCase);

// const numeros = [1, 2, 3, 4];
// const dobrados = numeros.map((n) => n * 2);
// console.log(dobrados);

// filter
// console.log(frutas);
const frutasComE = frutas.filter((f) => f.includes("z"));
// console.log(frutasComE);

// function verificaSeContemLetraE(palavra) {
//   return palavra.includes("e");
// }

// const verificaSeContemLetraE = (palavra) => {
//   // mais de uma linha de implementação
//   palavra.toLoweCase();
//   return palavra.includes("e");
// };

// const verificaSeContemLetraE = (palavra) => palavra.includes("e");

// find
const result = frutas.find((f) => f.includes("z"));
// console.log(result);

const alunos = [
  {
    nome: "Fulano de Tal",
    media: 7.5,
  },
  {
    nome: "Cicrano",
    media: 5.5,
  },
  {
    nome: "Beltrano",
    media: 10,
  },
];

const aprovados = alunos.filter((a) => a.media >= 7);
// console.log(aprovados);

// some
const haAprovados = alunos.some((a) => a.media >= 7);
// console.log(haAprovados);

const haReprovados = alunos.some((a) => a.media < 7);
// console.log(haReprovados);

// every
const todosAprovados = alunos.every((a) => a.media >= 7);
// console.log(todosAprovados);

// sort
const numeros = [3, 5, 11, 20, 2, 1];
// console.log(numeros.sort()); // crescente, mas considera o 11 como menor que o 2
// console.log(numeros.sort((a, b) => a - b)); // crescente
// console.log(numeros.sort((a, b) => b - a)); // decrescente

// console.log(frutas.sort());
// console.log(frutas.sort((a, b) => a.localeCompare(b)));

// reduce
const vaquinha = [
  {
    nome: "Fulano de Tal",
    valorDoado: 20,
  },
  {
    nome: "Cicrano",
    valorDoado: 100,
  },
  {
    nome: "Beltrano",
    valorDoado: 2,
  },
];

let totalDoado = 0;
vaquinha.forEach((doador) => {
  totalDoado += doador.valorDoado;
});

// console.log(totalDoado);

const total = vaquinha.reduce((soma, v) => {
  // console.log("soma:", soma);
  // console.log("v:", v);
  return soma + v.valorDoado;
}, 0);
console.log(total);

const valores = [10, 20, 30, 40];
const somaValores = valores.reduce((soma, v) => soma + v);
console.log(somaValores);
