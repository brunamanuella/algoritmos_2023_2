import {question} from 'readline-sync'

console.log('Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.')

  //Entrada
  const numero_1 = Number(question('numero 1: '))
  const numero_2 = Number(question('numero 2: '))

  //Processamento
  const divisao = (numero_1 + numero_2)/(numero_1 - numero_2)

  //Saída
  console.log(`a divisao da soma pela subtracao dos numeros lidos é de: ${divisao}`)

