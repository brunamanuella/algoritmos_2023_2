import {question} from 'readline-sync'

console.log('Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.')

//Entrada
const salário = Number(question('Digite o valor de um salário: '))

//Processamento
const aumento_salarial = salário + (salário * 0.25) 

//Saída
console.log(`O novo salario com um aumento de 25% é: ${aumento_salarial} reais`)