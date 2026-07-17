import { Material } from "./material.js"
import { Produto } from "./Produto.js"

export class SistemaComercial {
    private _entrada: number = 0
    private _saida: number = 0

    get entrada(): number {
        return this._entrada
    }

    get saida(): number {
        return this._saida
    }

    exibirResumo(): void {
        console.log(`${"=".repeat(16)} RESUMO DO SISTEMA ${"=".repeat(16)}\nEntradas: R$${this._entrada.toFixed(2)}\nSaídas: R$${this._saida.toFixed(2)}\nSaldo: R$${(this._entrada - this._saida).toFixed(2)}`)
    }

    calcularVenda(produto: Produto, quantidade: number){
        let totalVenda = produto.preco * quantidade
        this._entrada += totalVenda
    }

    calcularSaida(material: Material, quantidade: number){
        let precoMaterial = material.preco * quantidade
        this._saida += precoMaterial
    }

    descontarEstoque(produto: Produto, quantidade: number){
        return produto.diminuirEstoque(quantidade)
    }
    
}