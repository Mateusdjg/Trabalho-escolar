# Trabalho-escolar
Trabalho da segunda unidade.

SISTEMA SIMPLES DE CONTROLE DE VENDAS
---

### 1. EQUIPE DO PROJETO<br>
 - Mateus de Jesus Gonçalves<br>
 - Riquelme de Freitas Silva

---
### 2. INTRODUÇÃO

O trabalho consiste em um sistema simples de controle de vendas criado para atender minha mãe que fabrica e vende produtos têxteis. Minha mãe produz e vende os seguintes produtos: Fronhas, Panos de Prato, Almofadas, Cobertas, Toalhas e Capas de sofá. Ela trabalha apenas nas segundas-feiras e domingos e sentia dificuldades em acompanhar seus lucros e estoque de forma organizada e rápida.<br>
O objetivo do sistema é oferecer uma ferramenta simples e acessível, onde minha mãe consiga registrar suas vendas, controlar o estoque de produto e gerenciar o caixa e seu lucro mensal, de uma forma fácil e rápida.


---
### 3. DESENVOLVIMENTO DO SISTEMA


O sistema de controle de vendas é uma página web desenvolvida com as seguintes tecnologias **HTML**, **CSS**, **TypeScript** e **JavaScript**. Ele foi projetado para apenas a proprietária usar.<br>
**Principais funcionalidades:**
 - Cadastro dos produtos vendidos com nome e preço
 - Controle de estoque 
 - Sistema de caixa com entrada, saída e saldo atual
 - Registro de compra de materiais utilizado na fabricação dos produtos 
 - Ver o lucro do mês 


---
### 4. REQUISITOS DO SISTEMA
#### 4.1 Requisitos Funcionais
O que o sistema deve fazer:
 - **Cadastro de produtos:** O sistema deve permitir cadastrar um produto informando nome e preço. Não é permitido cadastrar dois produtos com o mesmo nome. O usuário pode editar ou excluir um produto já cadastrado.
 - **Controle de estoque:** Cada produto possui uma quantidade em estoque. Toda vez que uma venda é registrada, o sistema automaticamente reduz a quantidade vendida do estoque. Se um produto estiver sem estoque, o sistema exibe um aviso e não permite concluir a venda.
 - **Sistema de caixa:** O caixa representa o dinheiro disponível no momento. Ele funciona com três operações:
  -- **Entrada:** quando uma venda é finalizada, o valor total da venda é somado ao caixa.
  -- **Saída:** quando se registra a compra de materiais (tecidos, linhas, etc.), o valor gasto é descontado do caixa.
  -- **Saldo atual:** o sistema exibe sempre o valor atualizado do caixa.


