import {question} from 'readline-sync'

console.log('Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).')

 //Entrada
 const kg = Number(question('Digite um valor em kg (quilograma): '))

 //Processamento
 const gramas = kg * 1000

 //Saída
 console.log(`O valor em gramas é de: ${gramas}`)