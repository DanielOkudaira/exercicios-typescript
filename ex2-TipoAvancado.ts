// Definindo o tipo Pessoa
type Pessoa = {
    nome: string;
    idade: number;
};

// Definindo o tipo Empregado
type Empregado = {
    empresa: string;
    salario: number;
};

// Combinando Pessoa e Empregado usando interseção de tipos
type PessoaEmpregado = Pessoa & Empregado;

// Função que recebe um objeto do tipo PessoaEmpregado
function descreverPessoaEmpregado(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.nome}, Idade: ${pessoaEmpregado.idade}, Empresa: ${pessoaEmpregado.empresa}, Salário: R$${pessoaEmpregado.salario.toFixed(2)}.`;
}

// Exemplo de uso
const pessoaEmpregado1: PessoaEmpregado = {
    nome: "Daniel Okudaira",
    idade: 20,
    empresa: "FICO",
    salario: 1000000
};

// Exibindo a mensagem com as informações da pessoa e do empregado
console.log(descreverPessoaEmpregado(pessoaEmpregado1));
