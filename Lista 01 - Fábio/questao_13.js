import {question} from 'readline-sync'

console.log('Leia um valor em real (R$), calcule e escreva 70% deste valor.')

 //Entrada
 const real = Number(question('Digite um valor em real: '))

 //Processamento
 const porcentagem = real * 0.70 

 //Saída
 console.log(`70% desse valor é: ${porcentagem} reais`)