import {question} from 'readline-sync'

console.log('Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).')

//Entrada
const valor_do_dolar = Number(question('digite o valor do dolar: '))
const valor_em_dolar = Number(question('digite o valor em dolar: '))

//Processamento
const valor_em_real = valor_do_dolar * valor_em_dolar

//Saída
console.log(`o valor de ${valor_em_dolar} dolares equivalente a R$ ${valor_em_real.toFixed(2)} em reais.`)