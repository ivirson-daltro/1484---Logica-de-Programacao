/*
    Dada uma lista de produtos, onde cada produto tem um nome, custo e percentualDeLucro.

    Pede-se:

    1. Calcular o lucro obtido em cima de cada produto, levando conta o custo e o percentualDeLucro
    2. Devolver uma nova lista, contendo, além do nome, custo e percentualDeLucro de cada produto,
        o preco (valor final para venda)
*/

const produtos = [
  { nome: "Camiseta", custo: 30, percentualDeLucro: 50 },
  { nome: "Calça", custo: 80, percentualDeLucro: 30 },
  { nome: "Tênis", custo: 120, percentualDeLucro: 40 },
];

const produtosComLucro = produtos.map((produto) => {
  const lucro = produto.custo * (produto.percentualDeLucro / 100);
  produto.preco = (produto.custo + lucro).toFixed(2);
  return produto;
});

console.log(produtosComLucro);
