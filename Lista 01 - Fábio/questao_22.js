import {question} from 'readline-sync'

console.log('Leia um valor em km, calcule e escreva o equivalente em m.')

  //Entrada
  const km = Number(question('Digite um valor em km: '))

  //Processamento
  const metros = km * 1000

  //Saída
  console.log(`O valor em metros é de ${metros}`)