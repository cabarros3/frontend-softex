// QUESTÃO 5 
// function soma(a: number, b: number) {
//     return a + b;
// };
// console.log(soma(4, 3));
// QUESTÃO 6
// function isPar(num: number) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     };
// };
// console.log(isPar(3));
// QUESTÃO 7
// function media(nota1: number, nota2: number, nota3: number) {
//     let resultado: number = (nota1 + nota2 + nota3) / 3;
//     return resultado.toFixed(2); 
// };
// console.log(`A média dos números é ${media(8, 5, 9)}`);
// QUESTÃO 8
// function imc(peso: number, altura: number) {
//     let calcula: number = peso / (altura ** 2);
//     console.log(calcula.toFixed(2));
// };
// imc(83, 1.65);
// QUESTÃO 9
// function calculaDesconto(valor: number, porcento: number) {
//     let desconto: number = (porcento / 100) * valor;
//     console.log(`O seu desconto é de R$ ${desconto}`)
//     let calculo = valor - desconto;
//     console.log(`O valor do produto com o desconto é ${calculo}`);
// }
// calculaDesconto(1000, 20);
// QUESTÃO 10
// function calcularImpostoRenda(salarioBruto: number) {
//     let salariofinal = 0;
//     if (salarioBruto <= 1903.98) {
//         console.log("Você está isento.");
//     } else if (salarioBruto <= 2826.65) {
//         const a =  (salarioBruto - 1903.98) * 0.075;
//         salariofinal = salarioBruto - a
//         console.log(`Salário Bruto: ${salarioBruto}. Será descontado do seu salário ${a.toFixed(2)} e você receberá ${salariofinal.toFixed(2)}`)
//     } else if (salarioBruto <= 3751.05) {
//         const imposto7_5 = (2826.65 - 1903.98) * 0.075;
//         const b =  imposto7_5 + (salarioBruto - 2826.65) * 0.15;
//         salariofinal = salarioBruto - b
//         console.log(`Salário Bruto: ${salarioBruto}. Será descontado do seu salário ${b.toFixed(2)} e você receberá ${salariofinal.toFixed(2)}`)
//     } else if (salarioBruto <= 4664.68) {
//         const imposto7_5 = (2826.65 - 1903.98) * 0.075;
//         const imposto15 = (3751.05 - 2826.65) * 0.15;
//         const c =  imposto7_5 + imposto15 + (salarioBruto - 3751.05) * 0.225;
//         salariofinal = salarioBruto - c
//         console.log(`Salário Bruto: ${salarioBruto}. Será descontado do seu salário ${c.toFixed(2)} e você receberá ${salariofinal.toFixed(2)}`)
//     } else {
//         const imposto7_5 = (2826.65 - 1903.98) * 0.075;
//         const imposto15 = (3751.05 - 2826.65) * 0.15;
//         const imposto22_5 = (4664.68 - 3751.05) * 0.225;
//         const d = imposto7_5 + imposto15 + imposto22_5 + (salarioBruto - 4664.68) * 0.275;
//         salariofinal = salarioBruto - d
//         console.log(`Salário Bruto: ${salarioBruto}. Será descontado do seu salário ${d.toFixed(2)} e você receberá ${salariofinal.toFixed(2)}`)
//     };
// }
// calcularImpostoRenda(1500.00); // Deve retornar 0.0
// calcularImpostoRenda(2500.00); // Deve retornar um valor calculado com base na faixa de 7,5%
// calcularImpostoRenda(3500.00); // Deve retornar um valor calculado com base nas faixas de 7,5% e 15%
// calcularImpostoRenda(4500.00); // Deve retornar um valor calculado com base nas faixas de 7,5%, 15% e 22,5%
// calcularImpostoRenda(5000.00); // Deve retornar um valor calculado com base em todas as faixas
// QUESTÃO 11
// function mediaArredondada(num: number[]) {
//     const soma = num.reduce((a, b) => a + b);
//     const media = soma / num.length;
//     let resultado = Math.round(media);
//     console.log(`A média arredondada das notas ${num} é:  ${resultado}`);
// };
// mediaArredondada([9.5, 6.4, 7.4, 6.0]);
// QUESTÃO 12
// const digitosPares: number[] = [];
// const digitosImpares: number[] = [];
// function contaDigitos(entrada: string) {
//     let digitos = entrada.split("");
//     for (let i = 0; i < digitos.length; i++) {
//         const digito: number = Number(digitos[i]);
//         if (digito % 2 === 0) {
//             console.log(`O digito ${digito} é par`)
//             digitosPares.push(digito);
//         } else if (digito % 2 !== 0) {
//             console.log(`O digito ${digito} é ímpar`)
//             digitosImpares.push(digito);
//         };
//     };
// };
// function somaDigitos() {
//     let somaDigitosP = digitosPares.reduce((a, b) => a + b, 0);
//     let somaDigitosI = digitosImpares.reduce((a, b) => a + b, 0);
//     if (somaDigitosP > 0) {
//         console.log(`A soma dos dígitos pares é ${somaDigitosP}`);
//     }
//     if (somaDigitosI > 0) {
//         console.log(`A soma dos dígitos ímpares é ${somaDigitosI}`);
//     };
// };
// console.log("Antes de contar dígitos:");
// contaDigitos("396485");
// console.log("Depois de contar dígitos, antes de somar:");
// console.log("Dígitos pares:", digitosPares);
// console.log("Dígitos ímpares:", digitosImpares);
// somaDigitos();
// QUESTÃO 13
// type Aluno = {
//     nome: string,
//     nota: number,
// };
// const listaAlunos: Aluno[] = [
//     {nome: "joão", nota: 9.4},
//     {nome: "camilla", nota: 10},
//     {nome: "Bianca", nota: 6.4},
//     {nome: "clarissa", nota: 7.0},
// ];
// function mediaAluno(alunos: Aluno[]){
//     const somaNotas = alunos.reduce((a, aluno) => a + aluno.nota, 0)
//     const media = somaNotas / alunos.length;
//     return media;
// };
// function listarAlunos(alunos: Aluno[]) {
//     for (const aluno of alunos){
//         console.log(`A nota do aluno ${aluno.nome} é ${aluno.nota}`)
//     };
// }
// const media = mediaAluno(listaAlunos);
// listarAlunos(listaAlunos);
// console.log(`A média das notas dos alunos é ${media.toFixed(2)}`);
// QUESTÃO 14
// function calcularIdade(nascimento: number) {
//     let idade = 2024 - nascimento;
//     console.log(`A idade de uma pessoa que nasceu no ano ${nascimento} é ${idade} anos.`);
// };
// calcularIdade(1994);
// QUESTÃO 15
// function gerarTabuada(numero: number) {
//     console.log(`Tabuada de ${numero}: `)
//     for (let i = 1; i <= 10; i++) {
//         let calcular = numero * i;
//         console.log(`${numero} X ${i} = ${calcular}`);
//     };
// };
// gerarTabuada(3);
// QUESTÃO 16
// primeira parte: gerando e guardando número aleatório
// function gerarAleatorio(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const aleatorio = gerarAleatorio(1, 100)
// // segunda parte: criar a função advinheNumero
// function advinheNumero() {
//     let tentativas = Number(prompt("Digite um número de tentativas: "))
//     let i = 1;
//     while (i <= tentativas) {
//         let entradaUser = Number(prompt("Digite um número: "));
//         if (entradaUser < aleatorio) {
//             alert("Você tentou um número muito baixo");
//         } else if (entradaUser > aleatorio) {
//             alert("Você tentou um número muito alto");
//         } else if (entradaUser === aleatorio) {
//             alert(`Você acertou! Parabéns!!! Você utilizou ${i}/${tentativas} tentativas.`);
//             break;
//         } else{
//             alert("Entrada inválida");
//         };
//         i++
//     };
// };
// advinheNumero();
// alert(`O número aleatório é ${aleatorio}`);
// QUESTÃO 17 
// type EntradaObjeto = {
//     nome: string
// };
// function verificaPropriedade(objeto: EntradaObjeto, entrada: string) {
//     if (objeto.nome === entrada) {
//         return true;
//     } else {
//         return false;
//     };
// };
// console.log(verificaPropriedade({nome: "camilla"}, "Olá"));
// QUESTÃO 18
