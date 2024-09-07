// Definindo a interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

// Definindo o tipo de união para forma de pagamento
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

// Função que recebe um objeto Produto e o tipo de pagamento
function processarPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}`;
}

// Exemplo de uso
const produto1: Produto = {
    nome: "SmartPhone",
    preco: 2800,
    categoria: "Eletrônicos"
};

const pagamento1: FormaPagamento = 'pix';

// Exibindo a mensagem com as informações do produto e a forma de pagamento
console.log(processarPagamento(produto1, pagamento1));
