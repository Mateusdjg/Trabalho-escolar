import { Iten } from "./itens"
export class Produto extends Iten {
    private _id:number
    private estoque:number
    
    constructor(nome: string, preco: number, quantidade: number, id:number, estoque:number){
        super(nome, preco, quantidade)
        this._id = id
        this.estoque = estoque
    }

    get id():number{
        return this._id
    }

    diminuirEstoque(quantidade:number){
        if(this.estoque >= quantidade){
            return this.estoque -= quantidade
        }
        else{
            alert("Estoque insuficiente")
        }
    }
    
    adicinarEstoque(quantidade:number){
        return this.estoque += quantidade
    }
}