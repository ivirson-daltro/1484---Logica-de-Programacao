/*
    Imagine que você foi contratado para criar um pequeno sistema para uma escola.
    Esse sistema precisa:

    - Receber as notas de vários alunos,
    - Calcular a média,
    - Verificar se o aluno passou ou reprovou,
    - E permitir que o professor insira quantos alunos quiser sem reiniciar o programa.
*/

let continuar = true;
const alunos = [];

while (continuar) {
  let nome = prompt("Digite o nome do aluno:");
  let notas = [];

  let nota;
  do {
    nota = Number(prompt("Digite a nota ou -1 sair:"));
    if (nota > -1) {
      notas.push(nota);
    }
  } while (nota > -1);

  alunos.push({ nome, notas });

  const opcaoUsuario = prompt("Deseja cadastrar mais um aluno? S/N");
  const media = calculaMedia(notas);
  console.log(
    `Aluno(a) ${nome} está ${
      media >= 7 ? "aprovado(a)" : "reprovado(a)"
    } com média ${media.toFixed(1)}`
  );

  continuar = opcaoUsuario.toLowerCase() === "s" ? true : false;
}

function calculaMedia(notas) {
  let somaNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }
  return somaNotas / notas.length;
}
