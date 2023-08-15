import {question} from 'readline-sync'

console.log('Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.')

 //Entrada
 const numero_1 = Number(question('numero 1: '))
 const numero_2 = Number(question('numero 2: '))
 const numero_3 = Number(question('numero 3: '))

 //Processamento
 const soma = (numero_1 + numero_2)
 const diferenca = (numero_2 - numero_3)

 //Saída
 console.log(`a soma entre os dois pprimeiro numeros é de: ${soma} e a diferenca entre os dois ultimos é de: ${diferenca}`)