import {question} from 'readline-sync'

console.log('Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.')

  //Entrada
  const min = Number(question(`Digite um valor inteiro de minutos: `))

  //Processamento
  const minutos = min % 60
  const horas = Math.floor(min / 60) % 24 
  const dias = Math.floor(min / (24 * 60)) 

  //Saída
  console.log(`${min} minutos, corresponde a: ${dias} dias, ${horas} horas e ${minutos} minutos`)