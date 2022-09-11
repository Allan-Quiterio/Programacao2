import * as input from 'readline-sync'

let nome:string = input.question('Digite seu nome: ');
let idade:number;
idade = parseInt(input.question('Digite sua idade: '));

console.log('\nOlá mundo de DEVs!!!');
console.log('O nome digitado foi: ', nome);
console.log('A idade digitada foi: ', idade);