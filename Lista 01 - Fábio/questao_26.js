import {question} from 'readline-sync'

console.log('Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.')

  //Entrada
  const dias = Number(question('Digite um numero inteiro de dias: '))

  //Processamento
  const semanas = Math.floor(dias / 7)
  const d = dias % 7

  //Saída
  console.log(`${dias} dias corresponde a ${semanas} semanas e ${d} dias`)