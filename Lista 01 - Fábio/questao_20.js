import {question} from 'readline-sync'

console.log('Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)')

 //Entrada
 const celsius = Number(question('Digite uma temperatura em Celsius: '))

 //Processamento
 const celsius_fahrenheit = ((9 * celsius) + 160) / 5

 //Saída
 console.log(`A temperatura em fahreheit é de: ${celsius_fahrenheit.toFixed(1)}°F`)