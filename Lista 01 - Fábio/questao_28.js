import {question} from 'readline-sync'

console.log('Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.')

 //Entrada
 const h = Number(question('Digite um valor inteiro de horas: '))
    
 //Processamento
 const horas = h % 24
 const dias = Math.floor(h / 24) % 7
 const semanas = Math.floor(h / (24 * 7))

 //Saída
 console.log(`${h} corresponde a: ${semanas} semanas, ${dias} dias e ${horas} horas`)