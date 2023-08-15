import {question} from 'readline-sync'

console.log('Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.')

//Entrada
const minutos = Number(question('digite um valor em minutos: '))

//Processamento
const horas = Math.floor(minutos / 60)
const min_rest = minutos % 60

//Saída
console.log(`${minutos} corresponde a ${horas} horas e ${min_rest} minutos`)