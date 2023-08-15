import {question} from 'readline-sync'

console.log('Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)')

 //Entrada
 const base = Number(question('Digite o valor da base de um triangulo: '))
 const altura = Number(question('Digite o valor da altura de um triangulo: '))

 //Processamento
 const area = (base * altura) / 2

 //Saída
 console.log(`A área desse triângulo é de: ${area}cm²`)
