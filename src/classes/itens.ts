export abstract class Itens {
    private _id:number
    private _nome:string
    quantidade:number

    constructor(nome:string, quantidade:number, id:number){
        this._id = id
        this._nome = nome
        this.quantidade = quantidade
    }

    abstract atualizarEstoque():void
}
