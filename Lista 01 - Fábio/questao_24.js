import {question} from 'readline-sync'

console.log('Leia um valor em m, calcule e escreva o equivalente em cm.')

 //Entrada
 const metros = Number(question('Digite um valor em metros: '))

 //Processamento
 const cm = metros * 100

 //Saída
 console.log(`${metros}m, equivale a ${cm}cm`)