// Questão 5

let seuNome = prompt("Digite seu nome: ");
console.log(`Olá, ${seuNome}`);

// Questão 6

let suaIdade = Number(prompt("Digite sua idade: "));
console.log(`Olá, ${seuNome}! Sua idade é ${suaIdade}`);

// Questão 7

let seuNumero = Number(prompt("Digite um número inteiro: "));
console.log(`${seuNome}, o número ${seuNumero} convertido para decimal é ${seuNumero.toFixed(2)}`);

// Questão 8

let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número inteiro: "));

console.log(`A soma do número ${num1} com o número ${num2} é ${num1 + num2}`);

// Questão 9 

let decimal = Number(prompt("Digite um número decimal: "));
console.log(decimal * decimal);

// Questão 10

let userIdade = Number(prompt("Digite o seu ano de nascimento: "));
let yearNow = 2024;
console.log(`${seuNome} sua idade é ${yearNow - userIdade} anos`);

// Questão 11

let sobrenome = prompt(`${seuNome}, digite o seu último sobrenome: `);
console.log(`Seu nome completo é ${seuNome} ${sobrenome}`);

// Questão 12

let insiraNumeros = prompt("Digite número separados por espaço: ");
let array1 = insiraNumeros.split(" ");

console.log(array1.length);

// Questão 13

let nomeAnimal = prompt("Digite um nome de um animal: ");
console.log(`Olá, ${seuNome} o animal digitado por você foi ${nomeAnimal}`);

// Questão 14

console.log(`${sobrenome}, ${seuNome}`);

// Questão 15

let digiteAlgumaCoisa = prompt("Digite uma frase: ");
console.log(digiteAlgumaCoisa.length);

// Questão 16

let numeroInteiro = Number(prompt("Digite um número inteiro: "));
console.log(`${numeroInteiro % 2 == 0 ? "É par": "É ímpar"}`); // usando ternário

// Questão 17

console.log(`${numeroInteiro >= 0 ? "É positivo": "É negativo"}`);


// Questão 18

console.log(`O maior número digitado foi ${Math.max(num1, num2)}`);


// Questão 19

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura:"));

let imc  = peso / altura ** 2;
console.log(`Seu IMC é ${imc.toFixed(2)}`);

// Questão 20

console.log(`${seuNome.length > 5 ? "É maior que 5": "É menor que 5"}`);

// Questão 21

let estadoCivil = prompt("Digite seu estado civil: ");
//console.log(estadoCivil);
console.log(`${estadoCivil == "solteiro" || estadoCivil == "solteira"  ? "você é solteiro" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado" : "Digite uma opção válida"}`);


// Questão 22
let b = Number(prompt("Digite a medida da base do retângulo: "));
let h = Number(prompt("Digite a medidad da altura do retângulo: "));
let a = b * h
console.log(`A área do retângulo com base de ${b} e altura de ${h} é ${a}`);

// Questão 23 - é preciso usar o split aqui?

//  usando o método .includes() em if ternário

let cidade = prompt("Digite o nome da sua cidade: ");
let temS = "S" || "s"
console.log(`${cidade.includes(temS) == true ? "Essa cidade contém a letra S" : "Essa cidade não contém a letra S"}`);

// usando o .search() em if ternário

console.log(`${cidade.search(temS) == 0 ? "Essa cidade contém a letra S" : "Essa cidade não contém a letra S"}`);

// Questão 24 
let decimal2 = Number(prompt("Digite um segundo número decimal: "));
let restoDecimal = decimal % decimal2;
console.log(`O resto da divisão entre ${decimal} e ${decimal2} é ${restoDecimal}`);

// Questão 25 -- irei usar aqui o parseInt()
let decimal3 = prompt("Digite um terceiro número decimal: ");
//console.log(parseInt(decimal3));


// Questão 26 - usando o .toString()

let paraString = numeroInteiro.toString();
console.log(typeof paraString);

// Questão 27

let dataUsuario = prompt("Digite uma data no formato dd/mm/aaaa: ");
console.log(`você digitou a seguinte data ${dataUsuario} e ela é do tipo ${typeof dataUsuario}`);
let dataSep = dataUsuario.split("/");
let dataDia = parseInt(dataSep[0]);
let dataMes = parseInt(dataSep[1]);
let dataAno = parseInt(dataSep[2]);
console.log(`O dia digitado foi ${dataDia} e é do tipo ${typeof dataDia}, o mês digitado foi ${dataMes} e é do tipo ${typeof dataMes} e o ano digitado foi ${dataAno} e é do tipo ${typeof dataAno}`);


// Questão 28

let estado = prompt("Digite o seu estado: ");
console.log(`Você mora em ${cidade}, ${estado}`);

// Questão 29

console.log(`Bem-vindo ao nosso programa, ${seuNome}! Você nasceu em ${suaIdade} e é um millenial. Congrats!`);

// Questão 30

console.log(numeroInteiro + "" + digiteAlgumaCoisa);

// Questão 31

