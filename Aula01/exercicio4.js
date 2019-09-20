// Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.

const inteiro = parseInt (prompt("digite um numero")) //transformar string em numero

if (inteiro % 10 == 0) {
    alert(`${inteiro} é múltiplo de 10!`)

    }
    else{
        alert(`${inteiro} não é múltiplo de 10!`)
    }
