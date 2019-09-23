// Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
// Altere o exercício anterior de forma que ele informe também se os números são iguais.

/* INICIO

ler valores
identificar valores
informar qual deles é maior

 FIM */

const numero = parseInt (prompt("digite o primeiro numero")) //transformar string em numero
const numero2 = parseInt (prompt("digite o segundo numero")) //transformar string em numero
 

 if(numero > numero2){
     alert(`${numero} é o maior que o ${numero2}`)
 }
 else{

     if(numero < numero2){
         alert(`${numero} é menor que ${numero2}`)
     }
     if(numero === numero2){
        alert(`${numero} é igual ${numero2}`)
    }
 }
