import {question} from 'readline-sync'

console.log('Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).')

 //Entrada
 const fahreheit = Number(question('Digite uma temperatura em Fahrenheit: '))

 //Processamento
 const fahreheit_celsius = ((5 * fahreheit) - 160) / 9

 //Saída
 console.log(`A temperatura em Celsius é de: ${fahreheit_celsius.toFixed(1)}°C`)