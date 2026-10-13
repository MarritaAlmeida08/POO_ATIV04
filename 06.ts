// Exercício 4 - Encapsulamento em TypeScript
// Questão 6 - Classe livro
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida

class Livro {
    private titulo: string;
    private autor: string;
    private numeroPaginas: number = 1;
 
    constructor(titulo: string, autor: string, numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.setNumeroPaginas(numeroPaginas);
    }
 
    getTitulo(): string {
        return this.titulo;
    }
 
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
 
    getAutor(): string {
        return this.autor;
    }
 
    setAutor(autor: string): void {
        this.autor = autor;
    }
 
    getNumeroPaginas(): number {
        return this.numeroPaginas;
    }
 
    // o número de páginas nunca pode ser menor que 1
    setNumeroPaginas(numeroPaginas: number): void {
        if (numeroPaginas >= 1) {
            this.numeroPaginas = numeroPaginas;
        } else {
            console.log("Número de páginas inválido! Tem que ser no mínimo 1.");
        }
    }
 
    resumo(): void {
        console.log(`Livro: ${this.titulo}, por ${this.autor}, com ${this.numeroPaginas} páginas.`);
    }
}
const livro = new Livro("Jantar Secreto", "Raphael Montes", 368);
livro.resumo();
export {};