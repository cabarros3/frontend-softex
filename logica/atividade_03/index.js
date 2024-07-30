// QUESTÃO 5
var seuNome = prompt("Digite seu nome: ");
console.log("Ol\u00E1, ".concat(seuNome));
// QUESTÃO 6
var suaIdade = Number(prompt("Digite sua idade: "));
console.log("Ol\u00E1, ".concat(seuNome, "! Sua idade \u00E9 ").concat(suaIdade));
// QUESTÃO 7
var seuNumero = Number(prompt("Digite um número inteiro: "));
console.log("".concat(seuNome, ", o n\u00FAmero ").concat(seuNumero, " convertido para decimal \u00E9 ").concat(seuNumero.toFixed(2)));
// QUESTÃO 8
var num1 = Number(prompt("Digite o primeiro número inteiro: "));
var num2 = Number(prompt("Digite o segundo número inteiro: "));
console.log("A soma do n\u00FAmero ".concat(num1, " com o n\u00FAmero ").concat(num2, " \u00E9 ").concat(num1 + num2));
// QUESTÃO 9 
var decimal = Number(prompt("Digite um número decimal: "));
console.log(decimal * decimal);
// QUESTÃO 10
var userIdade = Number(prompt("Digite o seu ano de nascimento: "));
var yearNow = 2024;
console.log("".concat(seuNome, " sua idade \u00E9 ").concat(yearNow - userIdade, " anos"));
// QUESTÃO 11
var sobrenome = prompt("".concat(seuNome, ", digite o seu \u00FAltimo sobrenome: "));
console.log("Seu nome completo \u00E9 ".concat(seuNome, " ").concat(sobrenome));
// QUESTÃO 12
var insiraNumeros = prompt("Digite número separados por espaço: ");
if (insiraNumeros != null) {
    var array1 = insiraNumeros.split(" ");
    console.log(array1.length);
}
else {
    console.log("Não foi possível mostrar o resultado");
}
;
// QUESTÃO 13
var nomeAnimal = prompt("Digite um nome de um animal: ");
console.log("Ol\u00E1, ".concat(seuNome, " o animal digitado por voc\u00EA foi ").concat(nomeAnimal));
// QUESTÃO 14
console.log("".concat(sobrenome, ", ").concat(seuNome));
// QUESTÃO 15
var digiteAlgumaCoisa = prompt("Digite uma frase: ");
if (digiteAlgumaCoisa != null) {
    console.log(digiteAlgumaCoisa.length);
}
else {
    console.log("Não foi possível mostrar o resultado");
}
;
// QUESTÃO 16
var numeroInteiro = Number(prompt("Digite um número inteiro: "));
console.log("".concat(numeroInteiro % 2 == 0 ? "É par" : "É ímpar")); // usando ternário
// QUESTÃO 17
console.log("".concat(numeroInteiro >= 0 ? "É positivo" : "É negativo"));
// QUESTÃO 18
console.log("O maior n\u00FAmero digitado foi ".concat(Math.max(num1, num2)));
// QUESTÃO 19
var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura:"));
var imc = peso / Math.pow(altura, 2);
console.log("Seu IMC \u00E9 ".concat(imc.toFixed(2)));
// QUESTÃO 20
if (seuNome != null) {
    console.log("".concat(seuNome.length > 5 ? "É maior que 5" : "É menor que 5"));
}
else {
    console.log("Não foi possível mostrar o resultado");
}
;
// QUESTÃO 21
var estadoCivil = prompt("Digite seu estado civil: ");
//console.log(estadoCivil);
console.log("".concat(estadoCivil == "solteiro" || estadoCivil == "solteira" ? "você é solteiro" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado" : "Digite uma opção válida"));
// QUESTÃO 22
var b = Number(prompt("Digite a medida da base do retângulo: "));
var h = Number(prompt("Digite a medidad da altura do retângulo: "));
var a = b * h;
console.log("A \u00E1rea do ret\u00E2ngulo com base de ".concat(b, " e altura de ").concat(h, " \u00E9 ").concat(a));
// QUESTÃO 23 - usando o método .charAt()
var cidade = prompt("Digite o nome da sua cidade: ");
if (cidade != null) {
    console.log("".concat(cidade.charAt(0) == "S" || cidade.charAt(0) == "s" ? "Essa Cidade tem a letra S como primeira letra" : "Essa Cidade não tem a letra S como primeira letra"));
}
// QUESTÃO 24 
var decimal2 = Number(prompt("Digite um segundo número decimal: "));
var restoDecimal = decimal % decimal2;
console.log("O resto da divis\u00E3o entre ".concat(decimal, " e ").concat(decimal2, " \u00E9 ").concat(restoDecimal));
// QUESTÃO 25 -- irei usar aqui o parseInt()
var decimal3 = prompt("Digite um terceiro número decimal: ");
if (decimal3 != null) {
    var beInt = parseInt(decimal3);
    console.log("O n\u00FAmero ".concat(decimal3, " decimal agora \u00E9 um n\u00FAmero inteiro do tipo ").concat(typeof decimal3));
}
else {
    console.log("Nenhum número foi digitado");
}
;
// QUESTÃO 26 - usando o .toString()
var paraString = numeroInteiro.toString();
console.log(typeof paraString);
// QUESTÃO 27
var dataUsuario = prompt("Digite uma data no formato dd/mm/aaaa: ");
console.log("voc\u00EA digitou a seguinte data ".concat(dataUsuario, " e ela \u00E9 do tipo ").concat(typeof dataUsuario));
if (dataUsuario != null) {
    var dataSep = dataUsuario.split("/");
    var dataDia = parseInt(dataSep[0]);
    var dataMes = parseInt(dataSep[1]);
    var dataAno = parseInt(dataSep[2]);
    console.log("O dia digitado foi ".concat(dataDia, " e \u00E9 do tipo ").concat(typeof dataDia, ", o m\u00EAs digitado foi ").concat(dataMes, " e \u00E9 do tipo ").concat(typeof dataMes, " e o ano digitado foi ").concat(dataAno, " e \u00E9 do tipo ").concat(typeof dataAno));
}
;
// QUESTÃO 28
var estado = prompt("Digite o seu estado: ");
console.log("Voc\u00EA mora em ".concat(cidade, ", ").concat(estado));
// QUESTÃO 29
console.log("Bem-vindo ao nosso programa, ".concat(seuNome, "! Voc\u00EA nasceu em ").concat(suaIdade, " e \u00E9 um millenial. Congrats!"));
// QUESTÃO 30
console.log(numeroInteiro + "" + digiteAlgumaCoisa);
// QUESTÃO 31
var listaProdutos = [
    { produto: "sabonete", preco: 5.99 },
    { produto: "Feijão", preco: 10.00 },
    { produto: "Maça", preco: 12.25 },
    { produto: "Peito de Frango", preco: 23.89 },
];
var produtoUser = prompt("Digite o nome de um produto para saber o preço: ");
if (produtoUser !== null) {
    var produtoEncontrado = listaProdutos.find(function (produto) { return produto.produto === produtoUser; });
    if (produtoEncontrado) {
        console.log("O pre\u00E7o do item ".concat(produtoUser, " \u00E9 R$ ").concat(produtoEncontrado.preco, "."));
    }
    else {
        console.log("O produto ".concat(produtoUser, " n\u00E3o est\u00E1 cadastrado em nossa base de dados. Por favor, digite outro produto."));
    }
}
else {
    console.log("Nenhum produto foi digitado.");
}
// QUESTÃO 32
var dobro = numeroInteiro * 2;
console.log("O dobro do n\u00FAmero inteiro ".concat(numeroInteiro, " \u00E9 ").concat(dobro));
// QUESTÃO 33
var email = prompt("Digite seu email: ");
if (email != null) {
    console.log("Ol\u00E1, ".concat(email, "! Voc\u00EA cadastrou seu email na nossa plataforma. Seja bem-vindo(a)!"));
}
else {
    console.log("Nenhum email foi digitado.");
}
;
// QUESTÃO 34
var soma = num1 + num2;
var diferenca = num1 - num2;
var produto = num1 * num2;
var quociente = num1 / num2;
console.log("A soma entre ".concat(num1, " e ").concat(num2, " \u00E9 ").concat(soma, ", a diferen\u00E7a \u00E9 ").concat(diferenca, ", o produto \u00E9 ").concat(produto, " e o quociente \u00E9 ").concat(quociente, "."));
// QUESTÃO 35
var areaTriangulo = (b * h) / 2;
console.log("A \u00E1rea de um tri\u00E2ngulo de base ".concat(b, " e altura ").concat(h, " \u00E9 ").concat(areaTriangulo, "."));
// QUESTÃO 36
var pi = 3.14;
var raio = Number(prompt("Digite o raio da circunferência: "));
if (raio != null) {
    var perimetro = 2 * pi * raio;
    console.log("A circunfer\u00EAncia que possui ".concat(raio, " de raio tem um per\u00EDmetro de ").concat(perimetro, "."));
}
else {
    console.log("Nenhum raio foi digitado.");
}
;
// QUESTÃO 37
var ladoA = Number(prompt("Digite a medida do lado A: "));
var ladoB = Number(prompt("Digite a medida do lado B: "));
var perimetroRetangulo = 2 * (ladoA + ladoB);
console.log("O per\u00EDmetro do ret\u00E2ngulo com lados de ".concat(ladoA, " e ").concat(ladoB, " tem como valor ").concat(perimetroRetangulo));
// QUESTÃO 38
var deci3 = Number(prompt("Digite o terceiro número decimal: "));
var media = (decimal + decimal2 + deci3) / 3;
console.log("A m\u00E9dia dos n\u00FAmeros decimais digitados \u00E9 ".concat(media.toFixed(2)));
// QUESTÃO 39
var idadeUsuario = Number(prompt("Digite a sua idade: "));
if (idadeUsuario != null) {
    var meses = idadeUsuario * 12;
    var dias = idadeUsuario * 365;
    console.log("Voc\u00EA tem ".concat(idadeUsuario, " anos. Isso quer dizer que voc\u00EA j\u00E1 viveu ").concat(meses, " mese e ").concat(dias, " dias."));
}
else {
    console.log("Nenhuma idade foi digitada.");
}
;
// QUESTÃO 40
var emReal = Number(prompt("Digite o valor que quer converter"));
var cotacao = Number(prompt("Digite o valor da cotação: ")); //5.42
var realEmDolar = emReal * cotacao;
console.log("R$ ".concat(emReal, " convertidos em dolares \u00E9 $ ").concat(realEmDolar));
// QUESTÃO 41
var decimalRound = Math.round(decimal);
console.log("O n\u00FAmero decimal ".concat(decimal, " arredondado \u00E9 ").concat(decimalRound));
// QUESTÃO 42
var operacao = (num1 + num2) * seuNumero;
console.log("O resultado da opera\u00E7\u00E3o \u00E9 ".concat(operacao));
// QUESTÃO 43
var celcius = Number(prompt("Digite a temperatura em graus Celcius: "));
var cToF = (celcius * 1.8) + 32;
console.log("A temperatura em Fahrenheit \u00E9 ".concat(cToF));
