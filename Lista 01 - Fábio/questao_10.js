import {question} from 'readline-sync'

console.log('Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.')

//Entrada
const numero1 = Number(question('numero 1: '))
const numero2 = Number(question('numero 2: '))

//Processamento
const quociente = numero1 / numero2
const resto = numero1 % numero2

//saida
console.log(`O quociente é: ${quociente} e o resto é: ${resto}`)