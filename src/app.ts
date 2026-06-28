import { Produto } from "./classes/produto.js";

let produtos: Produto[] = []

let p1 = new Produto("Arroz", 10, 5)
let p2 = new Produto("Feijão", 8, 3)

produtos.push(p1)
produtos.push(p2)

produtos.forEach(produto => {
  console.log(`Nome: ${produto.nome}
Preço: ${produto.preco}
Quantidade: ${produto.quantidade}`);
});