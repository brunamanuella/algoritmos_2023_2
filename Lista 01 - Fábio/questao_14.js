import {question} from 'readline-sync'

console.log('Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.')

//Entrada
const nota1 = Number(question('Nota1: '))
const peso1 = Number(question('Peso para a nota1: '))

const nota2 = Number(question('Nota2: '))
const peso2 = Number(question('Peso para a nota2: '))

const nota3 = Number(question('Nota3: '))
const peso3 = Number(question('Peso para a nota3: '))

//Processamento
const media_ponderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) / peso1 + peso2 + peso3

//Saída
console.log(`A média ponderada das notas é: ${media_ponderada}`)
