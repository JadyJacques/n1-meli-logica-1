// Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

/*
digitar um numero
identificar o numero
informar se é divisivel por 2
se o resto for igual a 0 é par
se nao, é impar
*/

const inteiro = parseInt (prompt("digite um numero")) //transformar string em numero

if (inteiro % 2 == 0) {
    alert(`${inteiro} é par!`)

    }
    else{
        alert(`${inteiro} é impar!`)
    }
