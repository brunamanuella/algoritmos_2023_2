import {question} from 'readline-sync'

console.log('Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).')

 //Entrada
 const numero_1 = Number(question('Número 1: '))
 const numero_2 = Number(question('Número 2: '))


 //Processamento e Saída
 console.log(`O inverso é: ${numero_2}, ${numero_1}`)