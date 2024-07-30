// QUESTÃO 5
for (var i = 0; i < 10; i++) {
    console.log("teste uma frase!");
}
;
// QUESTÃO 6
for (var i = 0; i < 10; i++) {
    console.log(i);
}
;
// QUESTÃO 7
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    ;
    console.log(i);
}
;
// QUESTÃO 8
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    ;
    console.log(i);
}
;
// QUESTÃO 9
var nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];
for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
    var n = nomes_1[_i];
    console.log(n);
}
;
// QUESTÃO 10
for (var index = 1; index < 10; index++) {
    console.log(index);
}
;
// QUESTÃO 11
for (var index = 10; index >= 0; index--) {
    console.log(index);
}
;
// QUESTÃO 12
for (var numeros = 1; numeros <= 100; numeros++) {
    var soma_1 = numeros + numeros;
    console.log("O numero ".concat(numeros, " + ").concat(numeros, " \u00E9 igual a ").concat(soma_1));
}
;
// QUESTÃO 13
console.log("Lista de todos os números pares de 1 a 50: ");
for (var i = 1; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    ;
}
;
// QUESTÃO 14
console.log("Lista com o produto dos números de 1 a 5: ");
for (var i = 1; i < 5; i++) {
    console.log(i * i);
}
;
// QUESTÃO 15
console.log("Tabuada de 7: ");
for (var i = 0; i <= 10; i++) {
    var calculadora = 7 * i;
    console.log("7 X ".concat(i, " = ").concat(calculadora));
}
;
// QUESTÃO 16
var notas = [];
for (var i = 1; i <= 5; i++) {
    var nota = Number(prompt("Digite uma nota: "));
    notas.push(nota);
}
;
console.log(notas);
// let media = (notas[0] + notas[1] + notas [2] + notas[3] + notas[4]) / 5; 
var somaNotas = notas.reduce(function (acc, curr) { return acc + curr; }, 0); // usando o .reduce() que transforma os valores de um array em um único valor.
var m = somaNotas / 5;
console.log("A m\u00E9dia das notas \u00E9 ".concat(m.toFixed(2)));
// QUESTÃO 17
for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
    ;
}
;
// QUESTÃO 18
var guardaNums = [];
for (var i = 1; i <= 10; i++) {
    var leiaNum = Number(prompt("Digite o número: "));
    guardaNums.push(leiaNum);
}
;
var maiorNum = Math.max.apply(Math, guardaNums);
console.log("O maior n\u00FAmero digitado \u00E9 o n\u00FAmero ".concat(maiorNum)); // ""..." Expande o array em argumentos individuais
// QUESTÃO 19
for (var i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    ;
}
;
// QUESTÃO 20
var mediasAlunos = [];
var contAprovados = 0;
for (var i = 1; i <= 5; i++) {
    var leiaMedia = Number(prompt("Digite a média do aluno(a): "));
    mediasAlunos.push(leiaMedia);
}
;
console.log(mediasAlunos);
for (var i = 0; i < mediasAlunos.length; i++) {
    if (mediasAlunos[i] >= 7) {
        contAprovados++;
    }
    ;
}
;
console.log("".concat(contAprovados, " alunos foram aprovados."));
// QUESTÃO 21
var entradaUsuario = prompt("Digite um número inteiro de dois dígitos: ");
var soma = 0;
if (entradaUsuario !== undefined) {
    var digitos = entradaUsuario === null || entradaUsuario === void 0 ? void 0 : entradaUsuario.split("");
    if (digitos !== undefined) {
        for (var i = 0; i < (digitos === null || digitos === void 0 ? void 0 : digitos.length); i++) {
            var digito = Number(digitos[i]);
            soma += digito;
        }
        console.log("A soma entre os digitos do n\u00FAmero inteiro digitado \u00E9 ".concat(soma));
    }
    ;
}
;
// QUESTÃO 22
var leiInteiro = Number(prompt("Digite um número inteiro: "));
var guardaDivisores = [];
for (var i = 0; i <= leiInteiro; i++) {
    if (leiInteiro % i === 0) {
        guardaDivisores.push(i);
    }
    ;
}
;
console.log("O divisores de ".concat(leiInteiro, " s\u00E3o: ").concat(guardaDivisores));
// QUESTÃO 23
var alturas = [];
for (var i = 1; i <= 5; i++) {
    var leiaAltura = Number(prompt("Digite a altura da pessoa: "));
    alturas.push(leiaAltura);
}
;
var somaAlturas = alturas.reduce(function (acc, curr) { return acc + curr; }, 0); // usando o .reduce() que transforma os valores de um array em um único valor.
var media = somaAlturas / 5;
console.log("A m\u00E9dia das alturas \u00E9 ".concat(media.toFixed(2)));
// QUESTÃO 24 
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ");
    }
    else if (i % 3 === 0) {
        console.log("FIZZ");
    }
    else if (i % 5 === 0) {
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }
    ;
}
;
// QUESTÃO 25
var entradaUser = prompt("Digite um número inteiro com mais de dois dígitos: ");
var digitosPares = [];
if (entradaUser !== undefined) {
    var digitos = entradaUser === null || entradaUser === void 0 ? void 0 : entradaUser.split("");
    if (digitos !== undefined) {
        for (var i = 0; i < (digitos === null || digitos === void 0 ? void 0 : digitos.length); i++) {
            var digito = Number(digitos[i]);
            if (digito % 2 === 0) {
                console.log("O digito ".concat(digito, " \u00E9 par"));
                digitosPares.push(digito);
            }
            ;
        }
        ;
    }
    ;
}
;
var somaDigitos = digitosPares.reduce(function (acc, curr) { return acc + curr; }, 0); // usando o .reduce() que transforma os valores de um array em um único valor.
if (somaDigitos > 0) {
    console.log("A soma dos d\u00EDgitos pares \u00E9 ".concat(somaDigitos));
}
else {
    console.log("Como todos digitos são ímpares, não foi possível realizar a soma.");
}
;
// QUESTÃO 26
var pegaNum = prompt("Digite um número inteiro com mais de dois dígitos: ");
var invertido = pegaNum === null || pegaNum === void 0 ? void 0 : pegaNum.split("").reverse().join(""); // usando os método/propriedades split, reverse e join.
console.log("O n\u00FAmero ".concat(pegaNum, " invertido \u00E9 ").concat(invertido));
