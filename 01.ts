// Exercício 4 - Encapsulamento em TypeScript
// Questão 1 - Classe Pessoa
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida

class Pessoa {
    private nome: string;
    private idade: number;
 
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
 
    // getters (servem para LER o valor)
    getNome(): string {
        return this.nome;
    }
 
    getIdade(): number {
        return this.idade;
    }
 
    // setters (servem para MUDAR o valor)
    setNome(nome: string): void {
        this.nome = nome;
    }
 
    setIdade(idade: number): void {
        this.idade = idade;
    }
 
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa = new Pessoa("Maria Rita", 18);
pessoa.apresentar();
export {};