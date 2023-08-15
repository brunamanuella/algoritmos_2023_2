import {question} from 'readline-sync'

console.log('Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)')

//Entrada
const velocidade_ms = Number(question('Velocidade (m/s): '))

//Processamento
const velocidade_kmh = velocidade_ms * 3.6

//Saída
console.log(`${velocidade_ms} m/s equivale a, ${velocidade_kmh} km/h`)