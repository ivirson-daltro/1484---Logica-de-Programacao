// for
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const contatos = [
  {
    id: 1,
    nome: "José dos Santos",
    email: "jose@email.com",
    telefone: 71998547841,
  },
  {
    id: 2,
    nome: "Andreia Pereira",
    email: "andrea@email.com",
    telefone: 71958795425,
  },
  {
    id: 3,
    nome: "Sérgio Oliveira",
    email: "sergio@email.com",
    telefone: 71925478964,
  },
  {
    id: 4,
    nome: "Camila Medrado",
    telefone: 71936547892,
    email: "camila@email.com",
  },
];

// for
// for (let i = 0; i < contatos.length; i++) {
//   console.log(
//     `${contatos[i].id} - Nome: ${contatos[i].nome}, Telefone: ${contatos[i].telefone}, E-mail: ${contatos[i].email}`
//   );
// }

// for...of
for (const contato of contatos) {
  //   console.log(
  //     `${contato.id} - Nome: ${contato.nome}, Telefone: ${contato.telefone}, E-mail: ${contato.email}`
  //   );
}

// for...in
const item = contatos[2];
for (const key in item) {
  console.log(item[key]);
}

for (const key in contatos) {
  console.log(
    `${contatos[key].id} - Nome: ${contatos[key].nome}, Telefone: ${contatos[key].telefone}, E-mail: ${contatos[key].email}`
  );
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// nested loops - laços aninhados
// for (let i = 0; i < matriz.length; i++) {
//   const linha = matriz[i];
//   for (let j = 0; j < linha.length; j++) {
//     console.log(`matriz[${i}][${j}] =`, matriz[i][j]);
//   }
// }
