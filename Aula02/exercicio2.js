/*
-Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.
1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte,
mas informa se o número sorteado é maior ou menor que o primeiro palpite.
1.2. Faça o mesmo programa anterior, agora com 3 palpites.
-Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não
necessariamente na mesma ordem.
-Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).
-Escreva um programa que joga par ou ímpar com o usuário.
-Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A.
O programa deve então exibir uma mensagem dizendo se ele acertou ou errou. (Importante o programa
aceitar que a letra A seja digitada tanto em minúsculas quanto em maiúsculas). */


/* 1 - Escreva um programa que sorteia um número de 1 a 10 e dá duas chances
para que o usuário acerte.*/

//aqui eu pego o numero do user
const num = parseInt(prompt('Digite um numero de 1 a 10'));

//aqui eu gero numero randomico
const sorte = Math.floor(Math.random()*10+1);
console.log('sorte fora do if e else: ', sorte)

//verifico pela primera vez que ela acertou 
if(num == sorte){
    alert(`Parabéns você acertou! O número é ${num}`)
}
//verifico pela segunda vez
else{
    //dou mais uma chance ao usuario
    const num2 = parseInt(prompt('Digite um numero de 1 a 10'));
    console.log('sorte dentro else: ', sorte)

    //verifico se ele acertou dessa vez
    if(num2 == sorte){
        alert(`Parabéns você acertou! O número é ${sorte}`)
    }
    // o usuario errou nas duas tentivas
    else{
        alert('não foi dessa vez :(')
    }

}