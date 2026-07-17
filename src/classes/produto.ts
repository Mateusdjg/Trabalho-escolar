import { Item } from "./itens.js"

export class Produto extends Item {
    private _id:number
    private _estoque:number = 0
    
    constructor(nome: string, preco: number, quantidade: number, id:number){
        super(nome, preco, quantidade)
        this._id = id
    }

    get id():number{
        return this._id
    }

    get estoque():number{
        return this._estoque
    }
    
    diminuirEstoque(quantidadeVenda:number){
        if(this.quantidade >= quantidadeVenda){
            return this.quantidade -= quantidadeVenda
        }
        else{
            alert("Estoque insuficiente")
        }
    }
    
    adicinarEstoque(quantidadeAdicionada:number){
        return this.quantidade += quantidadeAdicionada
    }
}