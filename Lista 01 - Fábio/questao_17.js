import {question} from 'readline-sync'

console.log('Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)')

 //Entrada
 const base = Number(question('Digite o valor da base de um retangulo: '))
 const altura = Number(question('Digite o valor da altura de um retangulo: '))

 //Processamento
 const area = base * altura

 //Saída
 console.log(`A área desse retangulo é de: ${area}cm²`)
