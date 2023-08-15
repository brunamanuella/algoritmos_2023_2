import {question} from 'readline-sync'

console.log('Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.')

  //Entrada
  const m = Number(question('Digite um valor inteiro de meses: '))
    
  //Processamento
  const meses = m % 12  
  const anos = Math.floor(m / 12)

  //Saída
  console.log(`${m} meses corresponde a: ${anos} anos e ${meses} meses`)