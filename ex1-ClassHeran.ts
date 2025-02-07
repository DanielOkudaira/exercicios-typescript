// Definição da classe Funcionario
class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

// Método que retorna uma descrição básica do funcionário 
    descricao(): string {
      return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
  }
  
// Definindo a subclasse Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
      super(nome, cargo, salario);
    }
  
    descricaoDetalhada(): string {
      return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
  }
  
  // Exemplo de uso
  const gerenteExemplo = new Gerente('Daniel Okudaira', 'Gerente de TI', 1000000, 'Tecnologia');
  console.log(gerenteExemplo.descricaoDetalhada());