import {question} from 'readline-sync'

console.log('Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)')

 //Entrada
 const numero = Number(question('Digite um número inteiro (3 dígitos): '))

 //Processamento
 const centena = Math.floor(numero / 100)
 const resto = numero % 100

 const dezena = Math.floor(resto / 10)
 const unidade = resto % 10

 //Saída
 console.log(`O inverso de ${numero} é ${unidade}${dezena}${centena}`)
