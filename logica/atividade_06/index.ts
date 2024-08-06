// QUESTÃO 6

// let i = 0;

// while (i < 10) {
//     i++
//     console.log(i);
// };

// QUESTÃO 7

// let i = 10;

// while (i > 0) {
//     i--;
//     console.log(i)
// };

// QUESTÃO 8

// let numeros = 1;
// let somaAoCubo = 0;

// while (numeros < 100) {
//     numeros++;
//     somaAoCubo = numeros + numeros;
//     console.log(`O numero ${numeros} + ${numeros} é igual a ${somaAoCubo}`);
// };

//QUESTÃO 9

// let nums = 1;
// let produto = 1;

// while (nums <= 5) {
//     produto *= nums;
//     nums++;
// };

// console.log(`O produto dos números de 1 a 5 é: ${produto}`);

// QUESTÃO 10

// let i = 0;
// let calculadora = 0;

// while (i < 10) {
//     i++;
//     calculadora = 9 * i;
//     console.log(`9 X ${i} = ${calculadora}`);
// };

// QUESTÃO 11


// let numUser = Number(prompt("Digite uma sequência de números: "));
// let guardaNums: number[] = [];
// guardaNums.push(numUser);

// while (numUser !== 0) {
//     numUser = Number(prompt("Digite uma sequência de números: "));
//     guardaNums.push(numUser);
//     console.log(`Você digitou o número ${numUser}`);
//     console.log("Digite 0 para parar");
// }

// guardaNums.pop();
// let maior = Math.max(...guardaNums);
// let menor = Math.min(...guardaNums);
// console.log(`A maior sequência de números digitada foi ${maior}`);
// console.log(`A menor sequência de números digitada foi ${menor}`);

// QUESTÃO 12

// let nota = Number(prompt("Digite uma nota: "));
// let notas: number[] = [];
// notas.push(nota);
// let contador = 1;

// while (nota !== -1) {
//     nota = Number(prompt("Digite uma nota: "));
//     notas.push(nota);
//     contador++;
// };

// notas.pop();

// let media = notas.reduce((acc, curr) => acc + curr) / notas.length;
// console.log(`A média das notas foi ${media.toFixed(2)}`);


// QUESTÃO 13

// let i = 0; 
// let soma = 0;
// let somaAoCubo = 0; 

// // entrada do usuário
// let entradaUser = prompt("Digite uma sequência de números inteiros: ");
// let digitos = entradaUser?.split(""); 
// console.log(digitos);

// if (digitos !== undefined) {
//     while (i < digitos.length) {
//         let digito = Number(digitos[i]);
//         soma += digito;
//         somaAoCubo = Math.pow(soma, 3);
//         i++;
//     };
// };

// console.log(`O laço de repetição foi executado ${i} vezes`);
// console.log(`A soma dos dígitos é ${soma}`);
// console.log(`A soma dos dígitos ao cubo é ${somaAoCubo}`);


// QUESTÃO 14

// let i = 1;

// while (i <= 100) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// };

// QUESTÃO 15

// let i = 1;

// while (i <= 50) {
//     if (i % 3 !== 0) {
//         console.log(i);
//     };
//     i++;
// };

// QUESTÃO 16

// let nota = Number(prompt("Digite uma nota: "));
// let notas: number[] = [];
// notas.push(nota);

// let contador = 1;
// let aprovado: number = 0
// let reprovado: number = 0

// while (contador < 5) {
//     nota = Number(prompt("Digite uma nota: "));
//     notas.push(nota);
//     contador++;
// };

// for (let i = 0; i < notas.length; i++){
//     if (notas[i] >= 7){
//         aprovado++
//     } else {
//         reprovado++
//     };
// };

// console.log(`Nessa turma, ${aprovado} alunos foram aprovados e ${reprovado} alunos foram reprovados`);


// QUESTÃO 17

// let leiaUser = Number(prompt("Digite um número inteiro: "));

// let contaPares = 0;

// while (leiaUser !== 0) {
    
//     if (leiaUser % 2 === 0) {
//         contaPares++;
//     } else {
//         break;
//     };

//     leiaUser = Number(prompt("Digite um número inteiro: "));
// };

// console.log(`Foram digitados ${contaPares} números pares antes que um número ímpar fosse digitado`);


// QUESTÃO 18

// let leiaUser = Number(prompt("Digite um número inteiro: "));

// let contaPares = 0;
// let contaImpares = 0;

// while (leiaUser !== 0) {
    
//     if (leiaUser % 2 === 0) {
//         contaPares++;
//     } else {
//         contaImpares++;
//     };

//     leiaUser = Number(prompt("Digite um número inteiro: "));
// };

// console.log(`Foram digitados ${contaPares} números pares e ${contaImpares} números ímpares.`);

// QUESTÃO 19

// let leiaUser = Number(prompt("Digite um número inteiro: "));

// let conta2 = 0;
// let conta3 = 0;
// let conta5 = 0;

// while (leiaUser !== 0) {
    
//     if (leiaUser % 2 === 0) {
//         conta2++;
//     } else if (leiaUser % 3 === 0) {
//         conta3++;
//     } else if (leiaUser % 5 === 0) {
//         conta5++
//     };

//     leiaUser = Number(prompt("Digite um número inteiro: "));
// };

// console.log(`Foram digitados ${conta2} números que são divisíveis por 2, ${conta3} números divisíveis por 3 e ${conta5} divisíveis por 5`);

// QUESTÃO 20