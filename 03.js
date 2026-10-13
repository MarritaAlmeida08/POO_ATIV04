// Exercício 4 - Encapsulamento em TypeScript
// Questão 3 - Classe Pessoa
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida
class Produto {
    nome;
    preco = 0;
    quantidade = 0;
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        // uso os setters aqui para as regras valerem desde o começo
        this.setPreco(preco);
        this.setQuantidade(quantidade);
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPreco() {
        return this.preco;
    }
    // não aceita preço negativo: se for negativo, mantém o preço anterior
    setPreco(preco) {
        if (preco >= 0) {
            this.preco = preco;
        }
        else {
            console.log("Preço inválido! O preço anterior foi mantido.");
        }
    }
    getQuantidade() {
        return this.quantidade;
    }
    // não aceita quantidade menor que zero
    setQuantidade(quantidade) {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
        }
        else {
            console.log("Quantidade inválida! A quantidade anterior foi mantida.");
        }
    }
    // valor total do estoque = preço x quantidade
    calcularValorTotal() {
        return this.preco * this.quantidade;
    }
}
const produto = new Produto("Perfume", 150.30, 4);
console.log("Valor total do estoque: R$ " + produto.calcularValorTotal());
produto.setPreco(-5); // inválido, mantém o preço anterior
console.log("Preço atual: R$ " + produto.getPreco());
export {};
