const alunos = ["João", "Ana", "Eduardo", "Nestor", "Marjorie", "Leo"];

const aluna = alunos[4];
// console.log(aluna);
// console.log(alunos[4]);
// const ultimoAluno = alunos[alunos.length - 1];
const ultimoAluno = alunos.at(-1);
const penultimoAluno = alunos.at(-2);
// console.log(alunos.length)
// console.log(ultimoAluno);
// console.log(penultimoAluno);

// obter o aluno que está na metade do array
const index = parseInt((alunos.length - 1) / 2);
// console.log(index);
const alunoDoMeio = alunos[index];
// console.log(alunoDoMeio);

// const novaListaDeAlunos = alunos;
// const novaListaDeAlunos = Array.from(alunos);
const novaListaDeAlunos = [...alunos]; // = ["joão", "ana", "eduardo"]
novaListaDeAlunos.push("André");
novaListaDeAlunos.unshift("Jonas");
// console.log(alunos);
// console.log(novaListaDeAlunos);

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matriz);
// const linha = matriz[1];
// console.log(linha[1]);
console.log(matriz[2][0]);
