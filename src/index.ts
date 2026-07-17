import { Material } from "./classes/material.js";
import { SistemaComercial } from "./classes/SistemaComercial.js";
import { Produto } from "./classes/Produto.js";

let sistemaDoComercio = new SistemaComercial()

let material1 = new Material("tecido", 50, 5, "algodão")

let produto1 = new Produto("Capa de sofá", 120, 4, 84378)

sistemaDoComercio.calcularVenda(produto1, 2)

sistemaDoComercio.calcularSaida(material1, 5)

sistemaDoComercio.exibirResumo()