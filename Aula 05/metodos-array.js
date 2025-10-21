const frutas = ["maçã", "banana"];

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

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((n) => n * 2);
// console.log(dobrados);
