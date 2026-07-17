class Itens {
    
    private _nome: string
    private _preco: number
    private _quantidade: number

    constructor(nome: string, preco: number, quantidade: number){
        this._nome = nome
        this._preco = preco
        this._quantidade = quantidade
    }
    get nome(): string {
        return this._nome
    }
    set nome(novoNome: string) {
        this._nome = novoNome
    }
    get preco(): number{
        return this._preco
    }
    set preco(novoPreco: number) {
        this._preco = novoPreco
    }

    get quantidade(): number {
       return this._quantidade
    }
    set quantidade(novaQuantidade: number){
        this._quantidade = novaQuantidade
    }
    alterarNome(novoNome: string){
        this._nome = novoNome
    }
    alteraPreco(novoPreco: number){
        this._preco = novoPreco
    }
}
class Produtos extends Itens {
    private _id: number

    constructor(nome: string, preco: number, quantidade: number, id: number){
        super(nome, preco, quantidade)
        this._id = id
    }
    get id(): number {
        return this._id
    }
    set id(novoId: number ){
        this._id = novoId
    }
}
class Material extends Itens {
    private _tipo: string

    constructor(nome: string, preco: number, quantidade: number, tipo: string) {
        super(nome, preco, quantidade)
        this._tipo = tipo
    }
    get tipo(): string {
        return this._tipo
    }
}