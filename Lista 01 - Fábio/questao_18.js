import {question} from 'readline-sync'

console.log('Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)')

 //Entrada
 const pi = 3.14
 const raio = Number(question('Digite um valor de uma circunferência: '))

 //Processamento
 const comprimento = 2 * pi * raio

 //Saída
 console.log(`O comprimento dessa circunferência é de: ${comprimento.toFixed(1)}cm`)