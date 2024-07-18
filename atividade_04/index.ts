//QUESTÃO 1

// type NumeroInteiro = "positivo" | "Negativo" | "Igual a zero";

// alert("Digite um número inteiro e eu direi se é Positivo, Negativo ou Igual a zero")
// let numeroInteiro = Number(prompt("Digite um número inteiro: "));

// if (numeroInteiro > 0) {
//     alert(`O número ${numeroInteiro} é positivo`);
// } else if (numeroInteiro < 0) {
//     alert(`O número ${numeroInteiro} é negativo`);
// } else if (numeroInteiro == 0) {
//     alert(`O número é igual a zero`);
// } else {
//     alert("Entrada inválida");
// };


// QUESTÃO 2

// let idade = Number(prompt("Digite a sua idade: "));

// if (idade < 18){
//     alert(`Você tem ${idade} anos e ainda é menor de idade`);
// } else if (idade >= 18) {
//     alert(`Você tem ${idade} anos e você é maior de idade`);
// } else {
//     alert("Entrada inválida");
// };

// QUESTÃO 3

// let num1 = Number(prompt("Digite o primeiro número inteiro: "));
// let num2 = Number(prompt("Digite o segundo número: "));

// if (num1 > num2) {
//     alert(`O número ${num1} é maior que o número ${num2}`);
// } else if (num2 > num1) {
//     alert(`O número ${num2} é maior que o número ${num1}`);
// } else if (num1 == num2 || num2 == num1){
//     alert("Os números são iguais");
// } else {
//     alert("entrada inválida!")
// };

// QUESTÃO 4

// let parOuImpar = Number(prompt("Digite um número e direi se é par ou ímpar: "))

// if (parOuImpar % 2 == 0) {
//     //console.log(parOuImpar % 2);
//     alert("O número é par");
// } else if (parOuImpar % 2 > 0) {
//     //console.log(parOuImpar % 2);
//     alert("O número é ímpar")
// } else {
//     alert("Entrada inválida!")
// };

// QUESTÃO 5

// let nota1 = Number(prompt("Digite a primeira nota: "));
// let nota2 = Number(prompt("Digite a seguda nota: "));
// let nota3 = Number(prompt("Digite a terceira nota: "));
// let nota4 = Number(prompt("Digite a quarta nota: "));

// let media = (nota1 + nota2 + nota3 + nota4) / 4

// if (media < 7) {
//     console.log(`A média é ${media} e a situação do aluno é reprovado(a)`);
// } else if(media >= 7) {
//     console.log(`A média é ${media} e a situação do aluno é aprovado(a)`);
// } else {
//     console.log("Entrada e resposta inválida");
// };

// QUESTÃO 6

// let seuNome = prompt("Digite seu nome: ");
// let outroNome = prompt("Digite outro nome: ");

// console.log(`O nome ${seuNome} "${seuNome.length > outroNome.length ? 'é maior que o segundo nome' : 'é menor que o segundo nome'}`);

// QUESTÃO 7

// const caractere = prompt("Digite um caractere: ");

// if (caractere != null) {
//     caractere.toLowerCase;
//     let vogais = ["a", "e", "i", "o", "u"];
//     let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q","r", "s", "t", "v", "x", "y", "z"];

//     if (vogais.includes(caractere)) {
//         alert("O caractere digitado é uma vogal");
//     } else if (consoantes.includes(caractere)) {
//         alert("O caractere digitado é uma consoante")
//     } else {
//         alert("Entrada inválida");
//     };
// };

// QUESTÃO 8

// let numeros = [];
// let insiraNum1 = numeros.push(prompt("Digite o primeiro número: "));
// let insiraNum2 = numeros.push(prompt("Digite o segundo número: "));
// let insiraNum3 = numeros.push(prompt("Digite o terceiro número: "));

// alert(`A ordem crescente dos números digitados é ${numeros.sort()}`);

// QUESTÃO 9 

// const peso = Number(prompt("Digite o seu peso: "));
// const altura = Number(prompt("Digite sua altura: "));

// let imc = peso / (altura**2);

// if (imc < 18.5) {
//     alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Magreza`);
// } else if (imc > 18.5 && imc < 24.9) {
//     alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Normal`);
// } else if (imc > 24.9 && imc < 29.9) {
//     alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Sobrepeso`);
// } else if (imc > 29.9 && imc < 39.9) {
//     alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Obesidade`);
// } else if (imc >= 40) {
//     alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Obesidade Grave`);
// } else {
//     alert("Entrada inválida");
// };

// QUESTÃO 10

// let insiraMes = Number(prompt("Digite um número para saber o mês: "));

// if (insiraMes != null) {
//     // type Meses = [{
//     //     mes1: string, mes2: string,
//     // }];

//     const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

//     switch (insiraMes) {
//         case 1:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[0]}`);
//             break;

//         case 2:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[1]}`);
//             break;

//         case 3:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[2]}`);
//             break;
        
//         case 4:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[3]}`);
//             break;

//         case 5:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[4]}`);
//             break;

//         case 6:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[5]}`);
//             break;

//         case 7:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[6]}`);
//             break;

//         case 8:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[7]}`);
//             break;

//         case 9: 
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[8]}`);
//             break;

//         case 10:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[9]}`);
//             break;

//         case 11:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[10]}`);
//             break;

//         case 12:
//             alert(`O número ${insiraMes} foi digitado e o mês correspondente é ${meses[11]}`);
//             break;
//         default:
//             console.log("Dados inválidos.");
//             break;
//     }

// };

// let meses: {numero: number, mes: string}[] = [
//     {numero: 1, mes: "Janeiro"},
//     {numero: 2, mes: "Fevereiro"},
//     {numero: 3, mes: "Março"},
//     {numero: 4, mes: "Abril"},
//     {numero: 5, mes: "Maio"},
//     {numero: 6, mes: "Junho"},
//     {numero: 7, mes: "Julho"},
//     {numero: 8, mes: "Agosto"},
//     {numero: 9, mes: "Setembro"},
//     {numero: 10, mes: "Outubro"},
//     {numero: 11, mes: "Novembro"},
//     {numero: 12, mes: "Dezembro"},
// ];

// if (insiraMes != null) {
//     let mesEncontrado = meses.find(numero => numero.numero === insiraMes);

//     if (mesEncontrado) {
//         alert(`O número ${insiraMes} foi digitado e o mês referente a ele é ${mesEncontrado.mes}`);
//     } else {
//         alert("O número digitado não corresponde a nenhum mês válido!");
//     };
// };

// Questão 11



