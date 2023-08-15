import {question} from 'readline-sync'

console.log('Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.')

//Entrada
const m = Number(question('Digite um valor inteiro de metros: '))

//Processamento
const km = Math.floor(m / 1000)
const metros = m % 1000

//Saída
console.log(`Esse número corresponde a ${km}km e ${metros}m`)