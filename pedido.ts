// Pedido.ts

import { Cliente } from './cliente'; // Importando a classe Cliente

// Definindo a classe Pedido
export class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor: number) {}

// Método para exibir as informações do pedido
    exibirInformacoes(): string {
        return `Nome do Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
    }
}
