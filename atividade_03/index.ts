// QUESTÃO 5

let seuNome = prompt("Digite seu nome: ");
console.log(`Olá, ${seuNome}`);

// QUESTÃO 6

let suaIdade = Number(prompt("Digite sua idade: "));
console.log(`Olá, ${seuNome}! Sua idade é ${suaIdade}`);

// QUESTÃO 7

let seuNumero = Number(prompt("Digite um número inteiro: "));
console.log(`${seuNome}, o número ${seuNumero} convertido para decimal é ${seuNumero.toFixed(2)}`);

// QUESTÃO 8

let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número inteiro: "));

console.log(`A soma do número ${num1} com o número ${num2} é ${num1 + num2}`);

// QUESTÃO 9 

let decimal = Number(prompt("Digite um número decimal: "));
console.log(decimal * decimal);

// QUESTÃO 10

let userIdade = Number(prompt("Digite o seu ano de nascimento: "));
let yearNow = 2024;
console.log(`${seuNome} sua idade é ${yearNow - userIdade} anos`);

// QUESTÃO 11

let sobrenome = prompt(`${seuNome}, digite o seu último sobrenome: `);
console.log(`Seu nome completo é ${seuNome} ${sobrenome}`);

// QUESTÃO 12

let insiraNumeros = prompt("Digite número separados por espaço: ");

if (insiraNumeros != null){
    let array1 = insiraNumeros.split(" ");
    console.log(array1.length);
} else {
    console.log("Não foi possível mostrar o resultado");
};

// QUESTÃO 13

let nomeAnimal = prompt("Digite um nome de um animal: ");
console.log(`Olá, ${seuNome} o animal digitado por você foi ${nomeAnimal}`);

// QUESTÃO 14

console.log(`${sobrenome}, ${seuNome}`);

// QUESTÃO 15

let digiteAlgumaCoisa = prompt("Digite uma frase: ");

if (digiteAlgumaCoisa != null){
    console.log(digiteAlgumaCoisa.length);
} else {
    console.log("Não foi possível mostrar o resultado");
};


// QUESTÃO 16

let numeroInteiro = Number(prompt("Digite um número inteiro: "));
console.log(`${numeroInteiro % 2 == 0 ? "É par": "É ímpar"}`); // usando ternário

// QUESTÃO 17

console.log(`${numeroInteiro >= 0 ? "É positivo": "É negativo"}`);


// QUESTÃO 18

console.log(`O maior número digitado foi ${Math.max(num1, num2)}`);


// QUESTÃO 19

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura:"));

let imc  = peso / altura ** 2;
console.log(`Seu IMC é ${imc.toFixed(2)}`);

// QUESTÃO 20

if (seuNome != null) {
    console.log(`${seuNome.length > 5 ? "É maior que 5": "É menor que 5"}`);
} else {
    console.log("Não foi possível mostrar o resultado");
};


// QUESTÃO 21

let estadoCivil = prompt("Digite seu estado civil: ");
//console.log(estadoCivil);
console.log(`${estadoCivil == "solteiro" || estadoCivil == "solteira"  ? "você é solteiro" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado" : "Digite uma opção válida"}`);


// QUESTÃO 22
let b = Number(prompt("Digite a medida da base do retângulo: "));
let h = Number(prompt("Digite a medidad da altura do retângulo: "));
let a = b * h
console.log(`A área do retângulo com base de ${b} e altura de ${h} é ${a}`);

// QUESTÃO 23 - usando o método .charAt()

let cidade =  prompt("Digite o nome da sua cidade: ");

if (cidade != null) {
    console.log(`${cidade.charAt(0) == "S" || cidade.charAt(0) == "s" ? "Essa Cidade tem a letra S como primeira letra" : "Essa Cidade não tem a letra S como primeira letra"}`)
}

// QUESTÃO 24 
let decimal2 = Number(prompt("Digite um segundo número decimal: "));
let restoDecimal = decimal % decimal2;
console.log(`O resto da divisão entre ${decimal} e ${decimal2} é ${restoDecimal}`);

// QUESTÃO 25 -- irei usar aqui o parseInt()
let decimal3 = prompt("Digite um terceiro número decimal: ");

if (decimal3 != null) {
    let beInt = parseInt(decimal3)
    console.log(`O número ${decimal3} decimal agora é um número inteiro do tipo ${typeof decimal3}`);
} else {
    console.log("Nenhum número foi digitado");
};

// QUESTÃO 26 - usando o .toString()

let paraString = numeroInteiro.toString();
console.log(typeof paraString);

// QUESTÃO 27

let dataUsuario = prompt("Digite uma data no formato dd/mm/aaaa: ");
console.log(`você digitou a seguinte data ${dataUsuario} e ela é do tipo ${typeof dataUsuario}`);

if (dataUsuario != null) {
    let dataSep = dataUsuario.split("/");
    let dataDia = parseInt(dataSep[0]);
    let dataMes = parseInt(dataSep[1]);
    let dataAno = parseInt(dataSep[2]);
    console.log(`O dia digitado foi ${dataDia} e é do tipo ${typeof dataDia}, o mês digitado foi ${dataMes} e é do tipo ${typeof dataMes} e o ano digitado foi ${dataAno} e é do tipo ${typeof dataAno}`);
};


// QUESTÃO 28

let estado = prompt("Digite o seu estado: ");
console.log(`Você mora em ${cidade}, ${estado}`);

// QUESTÃO 29

console.log(`Bem-vindo ao nosso programa, ${seuNome}! Você nasceu em ${suaIdade} e é um millenial. Congrats!`);

// QUESTÃO 30

console.log(numeroInteiro + "" + digiteAlgumaCoisa);

// QUESTÃO 31

const listaProdutos: { produto: string, preco: number }[] = [
    { produto: "sabonete", preco: 5.99 },
    { produto: "Feijão", preco: 10.00 },
    { produto: "Maça", preco: 12.25 },
    { produto: "Peito de Frango", preco: 23.89 },
];

let produtoUser = prompt("Digite o nome de um produto para saber o preço: ");

if (produtoUser !== null) {
    let produtoEncontrado = listaProdutos.find(produto => produto.produto === produtoUser);

    if (produtoEncontrado) {
        console.log(`O preço do item ${produtoUser} é R$ ${produtoEncontrado.preco}.`);
    } else {
        console.log(`O produto ${produtoUser} não está cadastrado em nossa base de dados. Por favor, digite outro produto.`);
    }
} else {
    console.log("Nenhum produto foi digitado.");
}

// QUESTÃO 32

let dobro = numeroInteiro * 2;
console.log(`O dobro do número inteiro ${numeroInteiro} é ${dobro}`);

// QUESTÃO 33

let email = prompt("Digite seu email: ");

if (email != null) {
    console.log(`Olá, ${email}! Você cadastrou seu email na nossa plataforma. Seja bem-vindo(a)!`);
} else {
    console.log("Nenhum email foi digitado.");
};

// QUESTÃO 34

const soma = num1 + num2;
const diferenca = num1 - num2;
const produto = num1 * num2;
const quociente = num1 / num2;

console.log(`A soma entre ${num1} e ${num2} é ${soma}, a diferença é ${diferenca}, o produto é ${produto} e o quociente é ${quociente}.`);

// QUESTÃO 35

const areaTriangulo = (b * h) / 2;
console.log(`A área de um triângulo de base ${b} e altura ${h} é ${areaTriangulo}.`);

// QUESTÃO 36

const pi = 3.14;
let raio = Number(prompt("Digite o raio da circunferência: "));

if (raio != null) {
   const perimetro =  2 * pi * raio;
   console.log(`A circunferência que possui ${raio} de raio tem um perímetro de ${perimetro}.`);
} else {
    console.log("Nenhum raio foi digitado.");
 };

// QUESTÃO 37

let ladoA = Number(prompt("Digite a medida do lado A: "));
let ladoB = Number(prompt("Digite a medida do lado B: "));

const perimetroRetangulo = 2 * (ladoA + ladoB);

console.log(`O perímetro do retângulo com lados de ${ladoA} e ${ladoB} tem como valor ${perimetroRetangulo}`);

// QUESTÃO 38

 let deci3 = Number(prompt("Digite o terceiro número decimal: "));

const media = (decimal + decimal2 + deci3) / 3;

console.log(`A média dos números decimais digitados é ${media.toFixed(2)}`);

// QUESTÃO 39

const idadeUsuario = Number(prompt("Digite a sua idade: "));

if (idadeUsuario !=null) {
    let meses = idadeUsuario * 12;
    let dias = idadeUsuario * 365;
    console.log(`Você tem ${idadeUsuario} anos. Isso quer dizer que você já viveu ${meses} mese e ${dias} dias.`);
} else {
    console.log("Nenhuma idade foi digitada.")
};

// QUESTÃO 40

let emReal = Number(prompt("Digite o valor que quer converter"))
const cotacao = Number(prompt("Digite o valor da cotação: ")) //5.42

let realEmDolar = emReal * cotacao;

console.log(`R$ ${emReal} convertidos em dolares é $ ${realEmDolar}`);

// QUESTÃO 41

let decimalRound = Math.round(decimal);

console.log(`O número decimal ${decimal} arredondado é ${decimalRound}`);

// QUESTÃO 42

let operacao = (num1 + num2) * seuNumero;
console.log(`O resultado da operação é ${operacao}`);

// QUESTÃO 43

let celcius = Number(prompt("Digite a temperatura em graus Celcius: "));

let cToF = (celcius * 1.8) + 32;

console.log(`A temperatura em Fahrenheit é ${cToF}`);