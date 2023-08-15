import {question} from 'readline-sync'

console.log('Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)')

 //Entrada
 const pi = 3.14
 const raio = Number(question('Digite um valor de um raio de uma esfera: '))

 //Processamento
 const volume = (4 * pi * raio**3) / 3

 //Saída
 console.log(`O volume dessa esfera é de: ${volume.toFixed(2)}cm³`)