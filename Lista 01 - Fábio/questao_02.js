import {question} from 'readline-sync'

console.log('Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.')

//Entrada
const horas = Number(question('digite um valor em horas: '))
const minutos = Number(question('digite um valor em minutos: '))

//Processamento
const total_minutos = horas * 60 + minutos

//Saída
console.log(`o total de minutos é: ${total_minutos}`)