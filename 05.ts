// Exercício 4 - Encapsulamento em TypeScript
// Questão 5 - Classe funcionario
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida

class Funcionario {
    private nome: string;
    private salarioMensal: number = 1412; // começa no salário mínimo
    private static readonly SALARIO_MINIMO: number = 1412;
 
    constructor(nome: string, salarioMensal: number) {
        this.nome = nome;
        this.setSalarioMensal(salarioMensal);
    }
 
    getNome(): string {
        return this.nome;
    }
 
    setNome(nome: string): void {
        this.nome = nome;
    }
 
    getSalarioMensal(): number {
        return this.salarioMensal;
    }
 
    // o salário não pode ser menor que o salário mínimo
    setSalarioMensal(salario: number): void {
        if (salario >= Funcionario.SALARIO_MINIMO) {
            this.salarioMensal = salario;
        } else {
            console.log("Salário inválido! Não pode ser menor que R$ 1412,00.");
        }
    }
 
    salarioAnual(): number {
        return this.salarioMensal * 12;
    }
 
    // só aumenta se o percentual for positivo
    // exemplo: aumentarSalario(10) aumenta 10%
    aumentarSalario(percentual: number): void {
        if (percentual > 0) {
            this.salarioMensal = this.salarioMensal + (this.salarioMensal * percentual / 100);
        } else {
            console.log("Percentual inválido! Tem que ser positivo.");
        }
    }
}
const func = new Funcionario("Roberta", 1500);
console.log("Salário anual: R$ " + func.salarioAnual());
func.aumentarSalario(10);
console.log("Salário após aumento de 10%: R$ " + func.getSalarioMensal());
export {};