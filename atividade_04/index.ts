//QUESTÃO 1

alert("Digite um número inteiro e eu direi se é Positivo, Negativo ou Igual a zero")
let numeroInteiro = Number(prompt("Digite um número inteiro: "));

if (numeroInteiro > 0) {
    alert(`O número ${numeroInteiro} é positivo`);
} else if (numeroInteiro < 0) {
    alert(`O número ${numeroInteiro} é negativo`);
} else if (numeroInteiro == 0) {
    alert(`O número é igual a zero`);
} else {
    alert("Entrada inválida");
};


// QUESTÃO 2

let idade = Number(prompt("Digite a sua idade: "));

if (idade < 18){
    alert(`Você tem ${idade} anos e ainda é menor de idade`);
} else if (idade >= 18) {
    alert(`Você tem ${idade} anos e você é maior de idade`);
} else {
    alert("Entrada inválida");
};

// QUESTÃO 3

let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (num1 > num2) {
    alert(`O número ${num1} é maior que o número ${num2}`);
} else if (num2 > num1) {
    alert(`O número ${num2} é maior que o número ${num1}`);
} else if (num1 == num2 || num2 == num1){
    alert("Os números são iguais");
} else {
    alert("entrada inválida!")
};

// QUESTÃO 4

let parOuImpar = Number(prompt("Digite um número e direi se é par ou ímpar: "))

if (parOuImpar % 2 == 0) {
    console.log(parOuImpar % 2);
    alert("O número é par");
} else if (parOuImpar % 2 > 0) {
    console.log(parOuImpar % 2);
    alert("O número é ímpar")
} else {
    alert("Entrada inválida!")
};

// QUESTÃO 5

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a seguda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media < 7) {
    console.log(`A média é ${media} e a situação do aluno é reprovado(a)`);
} else if(media >= 7) {
    console.log(`A média é ${media} e a situação do aluno é aprovado(a)`);
} else {
    console.log("Entrada e resposta inválida");
};

// QUESTÃO 6

let seuNome = prompt("Digite seu nome: ");
let outroNome = prompt("Digite outro nome: ");

console.log(`O nome ${seuNome} "${seuNome.length > outroNome.length ? 'é maior que o segundo nome' : 'é menor que o segundo nome'}`);

// QUESTÃO 7

const caractere = prompt("Digite um caractere: ");

if (caractere != null) {
    let caractereMin = caractere.toLowerCase();
    let vogais: string[] = ["a", "e", "i", "o", "u"];
    let consoantes: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q","r", "s", "t", "v", "x", "y", "z"];

    if (vogais.indexOf(caractereMin) !== -1) {
        alert("O caractere digitado é uma vogal");
    } else if (consoantes.indexOf(caractereMin) !== -1) {
        alert("O caractere digitado é uma consoante")
    } else {
        alert("Entrada inválida");
    };
};

// QUESTÃO 8

let numeros = [];
let insiraNum1 = numeros.push(prompt("Digite o primeiro número: "));
let insiraNum2 = numeros.push(prompt("Digite o segundo número: "));
let insiraNum3 = numeros.push(prompt("Digite o terceiro número: "));

alert(`A ordem crescente dos números digitados é ${numeros.sort()}`);

// QUESTÃO 9 

const peso = Number(prompt("Digite o seu peso: "));
const altura = Number(prompt("Digite sua altura: "));

let imc = peso / (altura**2);

if (imc < 18.5) {
    alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Magreza`);
} else if (imc > 18.5 && imc < 24.9) {
    alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Normal`);
} else if (imc > 24.9 && imc < 29.9) {
    alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Sobrepeso`);
} else if (imc > 29.9 && imc < 39.9) {
    alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Obesidade`);
} else if (imc >= 40) {
    alert(`O seu imc é de ${imc.toFixed(2)} e é classificado como Obesidade Grave`);
} else {
    alert("Entrada inválida");
};

// QUESTÃO 10

let insiraMes = Number(prompt("Digite um número para saber o mês: "));

let meses: {numero: number, mes: string}[] = [
    {numero: 1, mes: "Janeiro"},
    {numero: 2, mes: "Fevereiro"},
    {numero: 3, mes: "Março"},
    {numero: 4, mes: "Abril"},
    {numero: 5, mes: "Maio"},
    {numero: 6, mes: "Junho"},
    {numero: 7, mes: "Julho"},
    {numero: 8, mes: "Agosto"},
    {numero: 9, mes: "Setembro"},
    {numero: 10, mes: "Outubro"},
    {numero: 11, mes: "Novembro"},
    {numero: 12, mes: "Dezembro"},
];

if (insiraMes != null) {
    let mesEncontrado = meses.find(numero => numero.numero === insiraMes);

    if (mesEncontrado) {
        alert(`O número ${insiraMes} foi digitado e o mês referente a ele é ${mesEncontrado.mes}`);
    } else {
        alert("O número digitado não corresponde a nenhum mês válido!");
    };
};

// Questão 11

let salarioUser = Number(prompt("Digite o seu salário para calcular o aumento: "));

let percentualAumento: number;

if (salarioUser > 1500.00) {
    percentualAumento = 10;
} else {
    percentualAumento = 15;
};

let aumento = salarioUser * (percentualAumento / 100);

let salarioAumentado = salarioUser + aumento;
let valorAumento = salarioAumentado - salarioUser;

alert(`Atualmente você recebe R$ ${salarioUser}. Você receberá um aumento de ${percentualAumento}% no valor de R$ ${valorAumento} e seu novo salário será de R$ ${salarioAumentado}.`);

// QUESTÃO 12

let numeroUser = Number(prompt("Digite um número inteiro para saber se ele é divisível por 3 e por 5: "));

if (numeroUser % 3 === 0 && numeroUser % 5 === 0) {
    alert(`O número ${numeroUser} é divisível por 3 e por 5.`);
} else {
    alert(`O número ${numeroUser} não é divisível por 3 e por 5.`)
};

// QUESTÃO 13

let diaDaSemana: {index: number, dia: string, classificacao: string}[] = [
    {index: 2, dia: "segunda feira", classificacao: "dia útil"},
    {index: 3, dia: "terça feira", classificacao: "dia útil"},
    {index: 4, dia: "quarta feira", classificacao: "dia útil"},
    {index: 5, dia: "quinta feira", classificacao: "dia útil"},
    {index: 6, dia: "sexta feira", classificacao: "dia útil"},
    {index: 7, dia: "sábado", classificacao: "fim de semana"},
    {index: 1, dia: "domingo", classificacao: "fim de semana"},
];

let diaUser = prompt("Digite um dia da semana por extenso: ");

if (diaUser != null) {
    let diaEncontrado = diaDaSemana.find(dia => dia.dia.toLowerCase() === diaUser);

    if (diaEncontrado?.classificacao == "fim de semana") {
        alert(`O dia ${diaUser} é fim de semana`);
    } else {
        alert(`O dia ${diaUser} é um dia útil`)
    };
} else {
    alert("entrada inválida");
};

// QUESTÃO 14

const notaAvaliativa = Number(prompt("Digite de 1 a 5 para avaliar: "));

switch (notaAvaliativa) {
    case 1:
        alert("Muito insuficiente");
        break;

    case 2:
        alert("Insuficiente");
        break;
    
    case 3:
        alert("Regular");
        break;
    
    case 4:
        alert("Bom");
        break;

    case 5:
        alert("Muito bom");
        break;

    default:
        alert("Entrada inválida");
        break;
};

// QUESTÃO 15

let numDia = Number(prompt("Digite um número de 1 a 7: "));

if (numDia != null) {
    let numDiaEncontrado = diaDaSemana.find(index => index.index === numDia);

    if (numDiaEncontrado?.index == 1) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else if (numDiaEncontrado?.index == 2) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else if (numDiaEncontrado?.index == 3) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else if (numDiaEncontrado?.index == 4) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else if (numDiaEncontrado?.index == 5) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else if (numDiaEncontrado?.index == 6) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else if (numDiaEncontrado?.index == 7) {
        alert(`O número ${numDia} corresponde ao dia da semana ${numDiaEncontrado.dia}`);
    } else {
        alert("Entrada inválida");
    }; 
}; 

//  QUESTÃO 16 -- NÃO FAZER

// QUESTÃO 17

let idadeUser = Number(prompt("Digite a sua idade: "));

if (idadeUser <= 1) {
    alert(`Você tem ${idadeUser} ano e é um bebê!`);
} else if (idadeUser > 1 && idadeUser <= 12) {
    alert(`Você tem ${idadeUser} anos e é uma criança`);
} else if (idadeUser >= 13 && idadeUser <= 18) {
    alert(`Você tem ${idadeUser} e é um adolescente`);
} else if (idadeUser > 18) {
    alert(`Você tem ${idadeUser} anos e é um adulto`);
} else {
    alert("Entrada inválida");
};

// QUESTÃO 18 

let estadoCivil = prompt("Digite seu estado civil: ");

switch (estadoCivil) {
    case "solteiro":
        alert(`Seu estado civil é ${estadoCivil}. Você está livre e desempedido(a)`);
        break;

    case "casado":
        alert(`Seu estado civil é ${estadoCivil}. Vocês está comprometido(a).`);
        break;

    case "divorciado":
        alert(`Seu estado civil é ${estadoCivil}. Você não está comprometido, mas já foi!`)
        break;

    case "viuvo":
        alert(`Seu estado civil é ${estadoCivil}. Você não está mais comprometido. Sinto muito.`);
        break;

    default:
        alert("Entrada inválida");
        break;
};

// QUESTÃO 19

const numDoUser1 = Number(prompt("Digite um número inteiro: "));
const numDoUser2 = Number(prompt("Digite outro número inteiro: "));

let escolha = Number(prompt("Escolha um número de 1 a 4: "));

switch (escolha) {
    case 1:
        let soma = numDoUser1 + numDoUser2;
        alert(`Você escolheu a opção 1 e a soma dos números ${numDoUser1} e ${numDoUser2} é igual a ${soma}`);
        break;
    
    case 2:
        let sub = numDoUser1 - numDoUser2;
        alert(`Você escolheu a opção 2 e a subtração dos números ${numDoUser1} e ${numDoUser2} é igual a ${sub}`);
        break;

    case 3:
        let div = numDoUser1 / numDoUser2;
        alert(`Você escolheu a opção 3 e a divisão dos números ${numDoUser1} e ${numDoUser2} e a divisão é igual a ${div}`);
        break;

    case 4:
        let mult = numDoUser1 * numDoUser2;
        alert(`Você escolheu a opção 4 e a divisão dos números ${numDoUser1} e ${numDoUser2} e a multiplicação é igual a ${mult}`);
        break;

    default:
        alert("Entrada inválida");
        break;
};

// QUESTÃO 20 - NÃO FAZER

// QUESTÃO 21 - NÃO FAZER