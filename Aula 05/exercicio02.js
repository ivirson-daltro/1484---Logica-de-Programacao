/*
    Dada a lista de alunos abaixo:
 
    const alunos = [
        { nome: "João", notas: [10, 8, 9] },
        { nome: "Felipe", notas: [5, 8, 7.5] },
        { nome: "Andreia", notas: [10, 10, 6] },
        { nome: "Magali", notas: [7.8, 8.5, 9] },
    ];

    Pede-se:

    1. Calcular a média de cada aluno
    2. Retornar um novo array, com objetos que contém, nome e media
*/

const alunos = [
  { nome: "João", notas: [10, 8, 9] },
  { nome: "Felipe", notas: [5, 8, 7.5] },
  { nome: "Andreia", notas: [10, 10, 6] },
  { nome: "Magali", notas: [7.8, 8.5, 9] },
];

const alunosMedia = alunos.map((aluno) => {
  let somaNotas = 0;
  aluno.notas.forEach((nota) => (somaNotas += nota));
  const media = somaNotas / aluno.notas.length;
  return {
    nome: aluno.nome,
    media: media.toFixed(1),
  };
});

console.log(alunosMedia);
