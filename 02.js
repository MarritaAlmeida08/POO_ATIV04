// Exercício 4 - Encapsulamento em TypeScript
// Questão 2 - Classe Pessoa
// Disciplina: Programação Orientada a Objetos
// Professor: Ronaldo Pires Borges
// Aluna: Maria Rita Almeida
class ContaBancaria {
    numeroConta;
    saldo;
    // a conta começa com saldo 0 (se eu não informar outro valor)
    constructor(numeroConta, saldoInicial = 0) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
    // consultar o saldo atual
    getSaldo() {
        return this.saldo;
    }
    // o saldo só muda por aqui (depositar) ou por sacar
    depositar(valor) {
        if (valor > 0) {
            this.saldo = this.saldo + valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
        }
        else {
            console.log("Valor de depósito inválido! Tem que ser maior que zero.");
        }
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor de saque inválido! Tem que ser maior que zero.");
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        }
        else {
            this.saldo = this.saldo - valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
        }
    }
}
const conta = new ContaBancaria("18392-5", 300);
conta.depositar(150);
conta.sacar(75);
console.log("Saldo: R$ " + conta.getSaldo());
export {};
