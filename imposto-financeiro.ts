// Importação do namespace Financeiro
import { Financeiro } from './financeiro';

// Criação de instâncias e utilização das funções do namespace
const orcamentoExemplo = new Financeiro.Orcamento(10000, ['MousePad', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(10000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(10000, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);