// Exercício 4 - Encapsulamento em TypeScript
// Questão 6 - Classe Pessoa
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida
class Livro {
    titulo;
    autor;
    numeroPaginas = 1;
    constructor(titulo, autor, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.setNumeroPaginas(numeroPaginas);
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumeroPaginas() {
        return this.numeroPaginas;
    }
    // o número de páginas nunca pode ser menor que 1
    setNumeroPaginas(numeroPaginas) {
        if (numeroPaginas >= 1) {
            this.numeroPaginas = numeroPaginas;
        }
        else {
            console.log("Número de páginas inválido! Tem que ser no mínimo 1.");
        }
    }
    resumo() {
        console.log(`Livro: ${this.titulo}, por ${this.autor}, com ${this.numeroPaginas} páginas.`);
    }
}
const livro = new Livro("Jantar Secreto", "Raphael Montes", 368);
livro.resumo();
export {};
