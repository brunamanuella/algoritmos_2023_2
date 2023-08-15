import {question} from 'readline-sync'

console.log('Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.')

 //Entrada
 const s = Number(question('Digite um numero inteiro de segundos: '))

 //Processamento
 const horas = Math.floor(s / 3600)
 const minutos = Math.floor(s / 60) % 60
 const segundos = s % 60
 
 //Saída
 console.log(`${s} corresponde a ${horas} horas, ${minutos} minutos e ${segundos} segundos`)