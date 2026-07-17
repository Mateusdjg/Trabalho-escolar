export abstract class Iten {
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
}

