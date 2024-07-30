//QUESTÃO 1
alert("Digite um número inteiro e eu direi se é Positivo, Negativo ou Igual a zero");
var numeroInteiro = Number(prompt("Digite um número inteiro: "));
if (numeroInteiro > 0) {
    alert("O n\u00FAmero ".concat(numeroInteiro, " \u00E9 positivo"));
}
else if (numeroInteiro < 0) {
    alert("O n\u00FAmero ".concat(numeroInteiro, " \u00E9 negativo"));
}
else if (numeroInteiro == 0) {
    alert("O n\u00FAmero \u00E9 igual a zero");
}
else {
    alert("Entrada inválida");
}
;
// QUESTÃO 2
var idade = Number(prompt("Digite a sua idade: "));
if (idade < 18) {
    alert("Voc\u00EA tem ".concat(idade, " anos e ainda \u00E9 menor de idade"));
}
else if (idade >= 18) {
    alert("Voc\u00EA tem ".concat(idade, " anos e voc\u00EA \u00E9 maior de idade"));
}
else {
    alert("Entrada inválida");
}
;
// QUESTÃO 3
var num1 = Number(prompt("Digite o primeiro número inteiro: "));
var num2 = Number(prompt("Digite o segundo número: "));
if (num1 > num2) {
    alert("O n\u00FAmero ".concat(num1, " \u00E9 maior que o n\u00FAmero ").concat(num2));
}
else if (num2 > num1) {
    alert("O n\u00FAmero ".concat(num2, " \u00E9 maior que o n\u00FAmero ").concat(num1));
}
else if (num1 == num2 || num2 == num1) {
    alert("Os números são iguais");
}
else {
    alert("entrada inválida!");
}
;
// QUESTÃO 4
var parOuImpar = Number(prompt("Digite um número e direi se é par ou ímpar: "));
if (parOuImpar % 2 == 0) {
    console.log(parOuImpar % 2);
    alert("O número é par");
}
else if (parOuImpar % 2 > 0) {
    console.log(parOuImpar % 2);
    alert("O número é ímpar");
}
else {
    alert("Entrada inválida!");
}
;
// QUESTÃO 5
var nota1 = Number(prompt("Digite a primeira nota: "));
var nota2 = Number(prompt("Digite a seguda nota: "));
var nota3 = Number(prompt("Digite a terceira nota: "));
var nota4 = Number(prompt("Digite a quarta nota: "));
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media < 7) {
    console.log("A m\u00E9dia \u00E9 ".concat(media, " e a situa\u00E7\u00E3o do aluno \u00E9 reprovado(a)"));
}
else if (media >= 7) {
    console.log("A m\u00E9dia \u00E9 ".concat(media, " e a situa\u00E7\u00E3o do aluno \u00E9 aprovado(a)"));
}
else {
    console.log("Entrada e resposta inválida");
}
;
// QUESTÃO 6
var seuNome = prompt("Digite seu nome: ");
var outroNome = prompt("Digite outro nome: ");
console.log("O nome ".concat(seuNome, " \"").concat(seuNome.length > outroNome.length ? 'é maior que o segundo nome' : 'é menor que o segundo nome'));
// QUESTÃO 7
var caractere = prompt("Digite um caractere: ");
if (caractere != null) {
    var caractereMin = caractere.toLowerCase();
    var vogais = ["a", "e", "i", "o", "u"];
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
    if (vogais.indexOf(caractereMin) !== -1) {
        alert("O caractere digitado é uma vogal");
    }
    else if (consoantes.indexOf(caractereMin) !== -1) {
        alert("O caractere digitado é uma consoante");
    }
    else {
        alert("Entrada inválida");
    }
    ;
}
;
// QUESTÃO 8
var numeros = [];
var insiraNum1 = numeros.push(prompt("Digite o primeiro número: "));
var insiraNum2 = numeros.push(prompt("Digite o segundo número: "));
var insiraNum3 = numeros.push(prompt("Digite o terceiro número: "));
alert("A ordem crescente dos n\u00FAmeros digitados \u00E9 ".concat(numeros.sort()));
// QUESTÃO 9 
var peso = Number(prompt("Digite o seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var imc = peso / (Math.pow(altura, 2));
if (imc < 18.5) {
    alert("O seu imc \u00E9 de ".concat(imc.toFixed(2), " e \u00E9 classificado como Magreza"));
}
else if (imc > 18.5 && imc < 24.9) {
    alert("O seu imc \u00E9 de ".concat(imc.toFixed(2), " e \u00E9 classificado como Normal"));
}
else if (imc > 24.9 && imc < 29.9) {
    alert("O seu imc \u00E9 de ".concat(imc.toFixed(2), " e \u00E9 classificado como Sobrepeso"));
}
else if (imc > 29.9 && imc < 39.9) {
    alert("O seu imc \u00E9 de ".concat(imc.toFixed(2), " e \u00E9 classificado como Obesidade"));
}
else if (imc >= 40) {
    alert("O seu imc \u00E9 de ".concat(imc.toFixed(2), " e \u00E9 classificado como Obesidade Grave"));
}
else {
    alert("Entrada inválida");
}
;
// QUESTÃO 10
var insiraMes = Number(prompt("Digite um número para saber o mês: "));
var meses = [
    { numero: 1, mes: "Janeiro" },
    { numero: 2, mes: "Fevereiro" },
    { numero: 3, mes: "Março" },
    { numero: 4, mes: "Abril" },
    { numero: 5, mes: "Maio" },
    { numero: 6, mes: "Junho" },
    { numero: 7, mes: "Julho" },
    { numero: 8, mes: "Agosto" },
    { numero: 9, mes: "Setembro" },
    { numero: 10, mes: "Outubro" },
    { numero: 11, mes: "Novembro" },
    { numero: 12, mes: "Dezembro" },
];
if (insiraMes != null) {
    var mesEncontrado = meses.find(function (numero) { return numero.numero === insiraMes; });
    if (mesEncontrado) {
        alert("O n\u00FAmero ".concat(insiraMes, " foi digitado e o m\u00EAs referente a ele \u00E9 ").concat(mesEncontrado.mes));
    }
    else {
        alert("O número digitado não corresponde a nenhum mês válido!");
    }
    ;
}
;
// Questão 11
var salarioUser = Number(prompt("Digite o seu salário para calcular o aumento: "));
var percentualAumento;
if (salarioUser > 1500.00) {
    percentualAumento = 10;
}
else {
    percentualAumento = 15;
}
;
var aumento = salarioUser * (percentualAumento / 100);
var salarioAumentado = salarioUser + aumento;
var valorAumento = salarioAumentado - salarioUser;
alert("Atualmente voc\u00EA recebe R$ ".concat(salarioUser, ". Voc\u00EA receber\u00E1 um aumento de ").concat(percentualAumento, "% no valor de R$ ").concat(valorAumento, " e seu novo sal\u00E1rio ser\u00E1 de R$ ").concat(salarioAumentado, "."));
// QUESTÃO 12
var numeroUser = Number(prompt("Digite um número inteiro para saber se ele é divisível por 3 e por 5: "));
if (numeroUser % 3 === 0 && numeroUser % 5 === 0) {
    alert("O n\u00FAmero ".concat(numeroUser, " \u00E9 divis\u00EDvel por 3 e por 5."));
}
else {
    alert("O n\u00FAmero ".concat(numeroUser, " n\u00E3o \u00E9 divis\u00EDvel por 3 e por 5."));
}
;
// QUESTÃO 13
var diaDaSemana = [
    { index: 2, dia: "segunda feira", classificacao: "dia útil" },
    { index: 3, dia: "terça feira", classificacao: "dia útil" },
    { index: 4, dia: "quarta feira", classificacao: "dia útil" },
    { index: 5, dia: "quinta feira", classificacao: "dia útil" },
    { index: 6, dia: "sexta feira", classificacao: "dia útil" },
    { index: 7, dia: "sábado", classificacao: "fim de semana" },
    { index: 1, dia: "domingo", classificacao: "fim de semana" },
];
var diaUser = prompt("Digite um dia da semana por extenso: ");
if (diaUser != null) {
    var diaEncontrado = diaDaSemana.find(function (dia) { return dia.dia.toLowerCase() === diaUser; });
    if ((diaEncontrado === null || diaEncontrado === void 0 ? void 0 : diaEncontrado.classificacao) == "fim de semana") {
        alert("O dia ".concat(diaUser, " \u00E9 fim de semana"));
    }
    else {
        alert("O dia ".concat(diaUser, " \u00E9 um dia \u00FAtil"));
    }
    ;
}
else {
    alert("entrada inválida");
}
;
// QUESTÃO 14
var notaAvaliativa = Number(prompt("Digite de 1 a 5 para avaliar: "));
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
}
;
// QUESTÃO 15
var numDia = Number(prompt("Digite um número de 1 a 7: "));
if (numDia != null) {
    var numDiaEncontrado = diaDaSemana.find(function (index) { return index.index === numDia; });
    if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 1) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 2) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 3) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 4) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 5) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 6) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else if ((numDiaEncontrado === null || numDiaEncontrado === void 0 ? void 0 : numDiaEncontrado.index) == 7) {
        alert("O n\u00FAmero ".concat(numDia, " corresponde ao dia da semana ").concat(numDiaEncontrado.dia));
    }
    else {
        alert("Entrada inválida");
    }
    ;
}
;
//  QUESTÃO 16 -- NÃO FAZER
// QUESTÃO 17
var idadeUser = Number(prompt("Digite a sua idade: "));
if (idadeUser <= 1) {
    alert("Voc\u00EA tem ".concat(idadeUser, " ano e \u00E9 um beb\u00EA!"));
}
else if (idadeUser > 1 && idadeUser <= 12) {
    alert("Voc\u00EA tem ".concat(idadeUser, " anos e \u00E9 uma crian\u00E7a"));
}
else if (idadeUser >= 13 && idadeUser <= 18) {
    alert("Voc\u00EA tem ".concat(idadeUser, " e \u00E9 um adolescente"));
}
else if (idadeUser > 18) {
    alert("Voc\u00EA tem ".concat(idadeUser, " anos e \u00E9 um adulto"));
}
else {
    alert("Entrada inválida");
}
;
// QUESTÃO 18 
var estadoCivil = prompt("Digite seu estado civil: ");
switch (estadoCivil) {
    case "solteiro":
        alert("Seu estado civil \u00E9 ".concat(estadoCivil, ". Voc\u00EA est\u00E1 livre e desempedido(a)"));
        break;
    case "casado":
        alert("Seu estado civil \u00E9 ".concat(estadoCivil, ". Voc\u00EAs est\u00E1 comprometido(a)."));
        break;
    case "divorciado":
        alert("Seu estado civil \u00E9 ".concat(estadoCivil, ". Voc\u00EA n\u00E3o est\u00E1 comprometido, mas j\u00E1 foi!"));
        break;
    case "viuvo":
        alert("Seu estado civil \u00E9 ".concat(estadoCivil, ". Voc\u00EA n\u00E3o est\u00E1 mais comprometido. Sinto muito."));
        break;
    default:
        alert("Entrada inválida");
        break;
}
;
// QUESTÃO 19
var numDoUser1 = Number(prompt("Digite um número inteiro: "));
var numDoUser2 = Number(prompt("Digite outro número inteiro: "));
var escolha = Number(prompt("Escolha um número de 1 a 4: "));
switch (escolha) {
    case 1:
        var soma = numDoUser1 + numDoUser2;
        alert("Voc\u00EA escolheu a op\u00E7\u00E3o 1 e a soma dos n\u00FAmeros ".concat(numDoUser1, " e ").concat(numDoUser2, " \u00E9 igual a ").concat(soma));
        break;
    case 2:
        var sub = numDoUser1 - numDoUser2;
        alert("Voc\u00EA escolheu a op\u00E7\u00E3o 2 e a subtra\u00E7\u00E3o dos n\u00FAmeros ".concat(numDoUser1, " e ").concat(numDoUser2, " \u00E9 igual a ").concat(sub));
        break;
    case 3:
        var div = numDoUser1 / numDoUser2;
        alert("Voc\u00EA escolheu a op\u00E7\u00E3o 3 e a divis\u00E3o dos n\u00FAmeros ".concat(numDoUser1, " e ").concat(numDoUser2, " e a divis\u00E3o \u00E9 igual a ").concat(div));
        break;
    case 4:
        var mult = numDoUser1 * numDoUser2;
        alert("Voc\u00EA escolheu a op\u00E7\u00E3o 4 e a divis\u00E3o dos n\u00FAmeros ".concat(numDoUser1, " e ").concat(numDoUser2, " e a multiplica\u00E7\u00E3o \u00E9 igual a ").concat(mult));
        break;
    default:
        alert("Entrada inválida");
        break;
}
;
// QUESTÃO 20 - NÃO FAZER
// QUESTÃO 21 - NÃO FAZER
