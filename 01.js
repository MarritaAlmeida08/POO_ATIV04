// Exercício 4 - Encapsulamento em TypeScript
// Questão 1 - Classe Pessoa
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida

class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // getters (servem para LER o valor)
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    // setters (servem para MUDAR o valor)
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa = new Pessoa("Maria Rita", 18);
pessoa.apresentar();
export {};
