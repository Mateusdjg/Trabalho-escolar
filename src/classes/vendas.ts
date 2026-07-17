import { Produto } from "./produto"
export class Venda {
    produto: Produto
    quantidade:number

    constructor(produto: Produto, quantidade: number){
        this.produto = produto
        this.quantidade = quantidade
    }

    calcularTotal(){
        return this.produto.preco * this.quantidade
    }

    descontarEstoque(){
        return this.produto.diminuirEstoque(this.quantidade)
    }
}