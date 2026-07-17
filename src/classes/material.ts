import { Item } from "./itens.js"

export class Material extends Item {
    private _tipo: string

    constructor(nome: string, preco: number, quantidade: number, tipo: string) {
        super(nome, preco, quantidade)
        this._tipo = tipo
    }

    get tipo(): string {
        return this._tipo
    }
    
}