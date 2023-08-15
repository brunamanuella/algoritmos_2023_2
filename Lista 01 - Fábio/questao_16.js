import {question} from 'readline-sync'

console.log('Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)')

 //Entrada
 const lado = Number(question('Digite o valor do lado de um quadrado: '))

 //Proessamento
 const area = lado**2

 //Saída
 console.log(`A área desse quadrado é de: ${area}cm²`)