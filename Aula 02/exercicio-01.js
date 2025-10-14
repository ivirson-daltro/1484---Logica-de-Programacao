/*
    Construa uma lista de contatos, com nome, telefone e email (sem usar objetos)
*/

const contatos = [
  [1, "José dos Santos", 71998547841, "jose@email.com"],
  [2, "Andrei Pereira", "andrea@email.com", 71958795425],
  [3, "Sérgio Oliveira", 71925478964, "sergio@email.com"],
  [4, "Camila Medrado", 71936547892, "camila@email.com"],
];

// console.log(
//   `Nome: ${contatos[1][0]}, Telefone: ${contatos[1][1]}, E-mail: ${contatos[1][2]}`
// );

/*
 Agora, o mesmo exercício usando objetos
*/
const contatosWithObjects = [
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

// console.log(
//   `Nome: ${contatosWithObjects[1].nome}, Telefone: ${contatosWithObjects[1].telefone}, E-mail: ${contatosWithObjects[1].email}`
// );
const id = 3;
// const contato = contatosWithObjects.find((c) => {
//   //   console.log(c);
//   return c.id === id;
// });
const contato = contatosWithObjects.find((c) => c.id === id);
console.log(
  `${contato.id} - Nome: ${contato.nome}, Telefone: ${contato.telefone}, E-mail: ${contato.email}`
);
