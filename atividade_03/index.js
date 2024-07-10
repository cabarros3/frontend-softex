// Questão 5
var seuNome = prompt("Digite seu nome: ");
console.log("Ol\u00E1, ".concat(seuNome));
// Questão 6
var suaIdade = Number(prompt("Digite sua idade: "));
console.log("Ol\u00E1, ".concat(seuNome, "! Sua idade \u00E9 ").concat(suaIdade));
// Questão 7
var seuNumero = Number(prompt("Digite um número inteiro: "));
console.log("".concat(seuNome, ", o n\u00FAmero ").concat(seuNumero, " convertido para decimal \u00E9 ").concat(seuNumero.toFixed(2)));
// Questão 8
var num1 = Number(prompt("Digite o primeiro número inteiro: "));
var num2 = Number(prompt("Digite o segundo número inteiro: "));
console.log("A soma do n\u00FAmero ".concat(num1, " com o n\u00FAmero ").concat(num2, " \u00E9 ").concat(num1 + num2));
// Questão 9 
var decimal = Number(prompt("Digite um número decimal: "));
console.log(decimal * decimal);
// Questão 10
var userIdade = Number(prompt("Digite o seu ano de nascimento: "));
var yearNow = 2024;
console.log("".concat(seuNome, " sua idade \u00E9 ").concat(yearNow - userIdade, " anos"));
// Questão 11
var sobrenome = prompt("".concat(seuNome, ", digite o seu \u00FAltimo sobrenome: "));
console.log("Seu nome completo \u00E9 ".concat(seuNome, " ").concat(sobrenome));
// Questão 12
var insiraNumeros = prompt("Digite número separados por espaço: ");
var array1 = insiraNumeros.split(" ");
console.log(array1.length);
// Questão 13
var nomeAnimal = prompt("Digite um nome de um animal: ");
console.log("Ol\u00E1, ".concat(seuNome, " o animal digitado por voc\u00EA foi ").concat(nomeAnimal));
// Questão 14
console.log("".concat(sobrenome, ", ").concat(seuNome));
// Questão 15
var digiteAlgumaCoisa = prompt("Digite uma frase: ");
console.log(digiteAlgumaCoisa.length);
// Questão 16
var numeroInteiro = Number(prompt("Digite um número inteiro: "));
console.log("".concat(numeroInteiro % 2 == 0 ? "É par" : "É ímpar")); // usando ternário
// Questão 17
console.log("".concat(numeroInteiro >= 0 ? "É positivo" : "É negativo"));
// Questão 18
console.log("O maior n\u00FAmero digitado foi ".concat(Math.max(num1, num2)));
// Questão 19
var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura:"));
var imc = peso / Math.pow(altura, 2);
console.log("Seu IMC \u00E9 ".concat(imc.toFixed(2)));
// Questão 20
console.log("".concat(seuNome.length > 5 ? "É maior que 5" : "É menor que 5"));
// Questão 21
var estadoCivil = prompt("Digite seu estado civil: ");
//console.log(estadoCivil);
console.log("".concat(estadoCivil == "solteiro" || estadoCivil == "solteira" ? "você é solteiro" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado" : "Digite uma opção válida"));
// Questão 22
var b = Number(prompt("Digite a medida da base do retângulo: "));
var h = Number(prompt("Digite a medidad da altura do retângulo: "));
var a = b * h;
console.log("A \u00E1rea do ret\u00E2ngulo com base de ".concat(b, " e altura de ").concat(h, " \u00E9 ").concat(a));
// Questão 23 - é preciso usar o split aqui?
//  usando o método .includes() em if ternário
var cidade = prompt("Digite o nome da sua cidade: ");
var temS = "S" || "s";
console.log("".concat(cidade.includes(temS) == true ? "Essa cidade contém a letra S" : "Essa cidade não contém a letra S"));
// usando o .search() em if ternário
console.log("".concat(cidade.search(temS) == 0 ? "Essa cidade contém a letra S" : "Essa cidade não contém a letra S"));
// Questão 24 
var decimal2 = Number(prompt("Digite um segundo número decimal: "));
var restoDecimal = decimal % decimal2;
console.log("O resto da divis\u00E3o entre ".concat(decimal, " e ").concat(decimal2, " \u00E9 ").concat(restoDecimal));
// Questão 25 -- irei usar aqui o parseInt()
var decimal3 = prompt("Digite um terceiro número decimal: ");
//console.log(parseInt(decimal3));
// Questão 26 - usando o .toString()
var paraString = numeroInteiro.toString();
console.log(typeof paraString);
// Questão 27
var dataUsuario = prompt("Digite uma data no formato dd/mm/aaaa: ");
console.log("voc\u00EA digitou a seguinte data ".concat(dataUsuario, " e ela \u00E9 do tipo ").concat(typeof dataUsuario));
var dataSep = dataUsuario.split("/");
var dataDia = parseInt(dataSep[0]);
var dataMes = parseInt(dataSep[1]);
var dataAno = parseInt(dataSep[2]);
console.log("O dia digitado foi ".concat(dataDia, " e \u00E9 do tipo ").concat(typeof dataDia, ", o m\u00EAs digitado foi ").concat(dataMes, " e \u00E9 do tipo ").concat(typeof dataMes, " e o ano digitado foi ").concat(dataAno, " e \u00E9 do tipo ").concat(typeof dataAno));
// Questão 28
var estado = prompt("Digite o seu estado: ");
console.log("Sua cidade \u00E9 ".concat(cidade, " que fica no estado de ").concat(estado));
// Questão 29
console.log("Bem-vindo ao nosso programa, ".concat(seuNome, "! Voc\u00EA nasceu em ").concat(suaIdade, " e \u00E9 um millenial. Congrats!"));
// Questão 30
console.log(numeroInteiro + "" + digiteAlgumaCoisa);
// Questão 31
