// Exercício 4 - Encapsulamento em TypeScript
// Questão 4 - Classe aluno
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida

class Aluno {
    private nome: string;
    private nota1: number = 0;
    private nota2: number = 0;
 
    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.setNota1(nota1);
        this.setNota2(nota2);
    }
 
    getNome(): string {
        return this.nome;
    }
 
    setNome(nome: string): void {
        this.nome = nome;
    }
 
    getNota1(): number {
        return this.nota1;
    }
 
    // só aceita notas de 0 a 10
    setNota1(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this.nota1 = nota;
        } else {
            console.log("Nota 1 inválida! Só vale de 0 a 10.");
        }
    }
 
    getNota2(): number {
        return this.nota2;
    }
 
    setNota2(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this.nota2 = nota;
        } else {
            console.log("Nota 2 inválida! Só vale de 0 a 10.");
        }
    }
 
    media(): number {
        return (this.nota1 + this.nota2) / 2;
    }
 
    // aprovado se a média for 7 ou mais
    aprovado(): boolean {
        return this.media() >= 7;
    }
}
const aluno = new Aluno("Romeu", 6, 7);
console.log("Média: " + aluno.media());
console.log("Aprovado? " + aluno.aprovado());
export {};