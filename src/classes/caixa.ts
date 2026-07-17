import { Venda } from "./vendas"

export class Caixa {
    totalEntradas:number
    totalSaidas:number

    constructor(entradas:number, saidas:number){
        this.totalEntradas = entradas
        this.totalSaidas = saidas
    }

    registrarVendas(venda:Venda):number{
        this.totalEntradas += venda.calcularTotal()
        return this.totalEntradas
    }

    registrarDespesa(despesa:number): number{
        this.totalSaidas += despesa
        return this.totalSaidas
    }

    calcularSaldo():number{
        return this.totalEntradas - this.totalSaidas
    }
}