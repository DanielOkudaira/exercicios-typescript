// cliente_predido.ts

import { Cliente } from './cliente'; // Importando a classe Cliente
import { Pedido } from './pedido';   // Importando a classe Pedido

// Criando um cliente
const cliente1 = new Cliente("Claudio da Silva", "claudio.silva@exemplo.com");

// Criando um pedido
const pedido1 = new Pedido(cliente1, "Smartphone", 2800);

// Exibindo as informações do pedido
console.log(pedido1.exibirInformacoes());
