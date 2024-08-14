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
// function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number) {
//     let margemLucroPorcento = margemLucro / 100;
//     let valorMargeLucro = valorCusto * margemLucroPorcento;
//     console.log(valorMargeLucro);
//     let precoVenda = valorCusto + valorMargeLucro + valorFrete
//     console.log(`O preço de venda do produto é ${precoVenda}`);
// };
// calcularPrecoProduto(100, 20, 15);
// QUESTÃO 19
// function verificaFrase(frase: string) {
//     let palavras = frase.split(" ");
//     let palavraLonga = "";
//     //let conteChar = fraseSep.map(palavra => palavra.length)
//     //console.log(conteChar);
//     for (let palavra of palavras){
//         if (palavra.length > palavraLonga.length) {
//             palavraLonga = palavra;
//         };
//     };
//     alert(`A palavra mais longa tem ${palavraLonga.length} caracteres`);
//     return palavraLonga;
// };
// let frase = prompt("Digite uma frase: ");
// if (frase != undefined) {
//     let palavraMaisLonga = verificaFrase(frase);
//     alert(`A palavra mais longa é: ${palavraMaisLonga}`);
// };
// QUESTÃO 20
// function listaPalavras(arrayPalavras: string[]) {
//     // definindo medidas
//     const comprimento = Math.max(...arrayPalavras.map(palavra => palavra.length));
//     const largura = comprimento + 4;
//     const borda = "*".repeat(largura);
//     // redenrizando quadrado
//     console.log(borda);
//     for (let palavra of arrayPalavras) {
//         const espacosLados = comprimento - palavra.length;
//         const linha = `* ${palavra} ${' '.repeat(espacosLados)}*`;
//         console.log(linha);
//     };
//     console.log(borda);
// }
// listaPalavras(['olá', 'meu', 'nome', 'é', 'camilla']);
// QUESTÃO 21
// let quantidade = Number(prompt("Quantas palavras quer inserir: "))
// let plavrasDigitadas: string[] = [];
// function digitaPalavras() {
//     let i = 0;
//     while (i < quantidade) {
//         let novaPalavra = prompt("Digite uma palavra: ");
//         if (novaPalavra) { 
//             plavrasDigitadas.push(novaPalavra);
//         };
//         i++;
//     };
// };
// digitaPalavras();
// function verificaMaisLongas(palavrasArray: string[]) {
//     let palavrasLongas: string[] = [];
//     for (let palavra of palavrasArray) {
//         if (palavra.length > 5) {
//             palavrasLongas.push(palavra);
//         }
//     }
//     return palavrasLongas;
// };
// const palavras = verificaMaisLongas(plavrasDigitadas);
// alert(`As palavras maislongas são: ${palavras}`);
// QUESTÃO 22
// type Livros = {
//     titulo: string,
//     autor: string,
//     ano: number,
// }
// let livrosArray: Livros[] = [
//     {titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1988},
//     {titulo: "A culpa é das estrelas", autor: "John Green", ano: 2014},
//     {titulo: "Quem é você, Alasca?", autor: "John Green", ano: 2005},
//     {titulo: "Orgulho e preconceito", autor: "Jane Austen", ano: 1813},
//     {titulo: "Cidade de papel", autor: "John Green", ano: 2008},
// ];
// function retornaAutor(arrayLivros: Livros[]): string[] {
//     let mesmoAutor: string[] = [];
//     for (let livro of arrayLivros) {
//         if (livro.autor === "John Green") {
//             mesmoAutor.push(livro.titulo);
//         }
//     }
//     return mesmoAutor;
// }
// let livros = retornaAutor(livrosArray);
// console.log(`Os livros do mesmo autor são: ${livros.join(', ')}`);
// QUESTÃO 23
// type Pessoa = {
//     nome: string,
//     idade: number,
// };
// const pessoas: Pessoa[] = [
//     {nome: "Camilla", idade: 29},
//     {nome: "João", idade: 27},
//     {nome: "Jéssica", idade: 32},
//     {nome: "Antonio", idade: 20},
//     {nome: "Severina", idade: 71},
//     {nome: "Roberto", idade: 48},
// ];
// function verificaMaiVelho(pessoas: Pessoa[]) {
//     let pessoaMaisVelha = pessoas[0];
//     for (let pessoa of pessoas) {
//         if (pessoa.idade > pessoaMaisVelha.idade){
//             pessoaMaisVelha = pessoa;
//         };
//     };
//     return pessoaMaisVelha.nome;
// };
// const pessoaVelha = verificaMaiVelho(pessoas);
// console.log(`A pessoas mais velha é ${pessoaVelha}`);
// QUESTÃO 24
// type Carro = {
//     marca: string,
//     modelo: string,
//     ano: number,
// };
// const carros: Carro[] = [
//     {marca: "BMW", modelo: "BMW X6 M Competition", ano: 2024},
//     {marca: "BMW", modelo: "BMW X5", ano: 1999},
//     {marca: "Fiat", modelo: "Cronos", ano: 2022},
//     {marca: "Fiat", modelo: "Uno", ano: 2000},
//     {marca: "Fiat", modelo: "Argo", ano: 2021},
//     {marca: "Fiat", modelo: "Pulse", ano: 2019},
// ];
// function verificaFabricacao(carrosArray: Carro[]) {
//     let carrosAno: Carro[] = [];
//     for (let carro of carrosArray) {
//         if (carro.ano > 2010) {
//             carrosAno.push(carro);
//         };
//     };
//     return carrosAno;
// };
// const carrosAno = verificaFabricacao(carros);
// const detalhesCarrosAno = carrosAno.map(carro => `${carro.marca} ${carro.modelo} (${carro.ano})`).join(', ');
// console.log(`Os carros fabricados após 2010 são: ${detalhesCarrosAno}`);
// QUESTÃO 25
// let pegaNum = prompt("Digite um número inteiro com mais de dois dígitos: ");
// let invertido = pegaNum?.split("").reverse().join(""); // usando os método/propriedades split, reverse e join.
// console.log(`O número ${pegaNum} invertido é ${invertido}`);
function inverter(palavra) {
    var invertida = palavra.split("").reverse().join("");
    console.log("A string \"".concat(palavra, "\" invertida fica \"").concat(invertida, "\""));
}
;
inverter("Camilla");
