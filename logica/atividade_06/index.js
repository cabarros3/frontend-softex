// QUESTÃO 3
var a = 0;
while (a < 10) {
    console.log("testando uma frase");
    a++;
}
;
// QUESTÃO 4
var b = 465484133;
while (b > 10) {
    console.log(b);
    b /= 35;
}
;
// QUESTÃO 5
var c = 0;
do {
    console.log(b);
    c++;
} while (c < 5);
// QUESTÃO 6
var d = 0;
while (d < 10) {
    d++;
    console.log(d);
}
;
// QUESTÃO 7
var e = 10;
while (e > 0) {
    e--;
    console.log(e);
}
;
// QUESTÃO 8
var numers = 1;
var somaAoCub = 0;
while (numers < 100) {
    numers++;
    somaAoCub = numers + numers;
    console.log("O numero ".concat(numers, " + ").concat(numers, " \u00E9 igual a ").concat(somaAoCub));
}
;
// QUESTÃO 9
var nums = 1;
var produto = 1;
while (nums <= 5) {
    produto *= nums;
    nums++;
}
;
console.log("O produto dos n\u00FAmeros de 1 a 5 \u00E9: ".concat(produto));
// QUESTÃO 10
var f = 0;
var calculadora = 0;
while (f < 10) {
    f++;
    calculadora = 9 * f;
    console.log("9 X ".concat(f, " = ").concat(calculadora));
}
;
// QUESTÃO 11
var numUser = Number(prompt("Digite uma sequência de números: "));
var guardaNums = [];
while (numUser !== 0) {
    guardaNums.push(numUser);
    numUser = Number(prompt("Digite uma sequência de números: "));
}
;
var maior = Math.max.apply(Math, guardaNums);
var menor = Math.min.apply(Math, guardaNums);
console.log("Voc\u00EA digitou a seguinte sequ\u00EAncia de n\u00FAmeros: ".concat(guardaNums));
console.log("A maior sequ\u00EAncia de n\u00FAmeros digitada foi ".concat(maior));
console.log("A menor sequ\u00EAncia de n\u00FAmeros digitada foi ".concat(menor));
// QUESTÃO 12
var notA = Number(prompt("Digite uma nota: "));
var notaS = [];
var conta = 1;
while (notA !== -1) {
    notaS.push(notA);
    notA = Number(prompt("Digite uma nota: "));
    conta++;
}
;
var mediA = notaS.reduce(function (acc, curr) { return acc + curr; }) / notaS.length;
console.log("A m\u00E9dia das notas foi ".concat(mediA.toFixed(2)));
// QUESTÃO 13
var g = 0;
var soma = 0;
var somaAoCubo = 0;
// entrada do usuário
var entradaUser = prompt("Digite uma sequência de números inteiros: ");
var digitos = entradaUser === null || entradaUser === void 0 ? void 0 : entradaUser.split("");
console.log(digitos);
if (digitos !== undefined) {
    while (g < digitos.length) {
        var digito = Number(digitos[g]);
        soma += digito;
        somaAoCubo = Math.pow(soma, 3);
        g++;
    }
    ;
}
;
console.log("O la\u00E7o de repeti\u00E7\u00E3o foi executado ".concat(g, " vezes"));
console.log("A soma dos d\u00EDgitos \u00E9 ".concat(soma));
console.log("A soma dos d\u00EDgitos ao cubo \u00E9 ".concat(somaAoCubo));
// QUESTÃO 14
var h = 1;
while (h <= 100) {
    if (h % 2 !== 0) {
        console.log(h);
    }
    h++;
}
;
// QUESTÃO 15
var j = 1;
while (j <= 50) {
    if (j % 3 !== 0) {
        console.log(j);
    }
    ;
    j++;
}
;
// QUESTÃO 16
var nota = Number(prompt("Digite uma nota: "));
var notas = [];
notas.push(nota);
var contador = 1;
var aprovado = 0;
var reprovado = 0;
while (contador < 5) {
    nota = Number(prompt("Digite uma nota: "));
    notas.push(nota);
    contador++;
}
;
for (var i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        aprovado++;
    }
    else {
        reprovado++;
    }
    ;
}
;
console.log("Nessa turma, ".concat(aprovado, " alunos foram aprovados e ").concat(reprovado, " alunos foram reprovados"));
// QUESTÃO 17
var leiaUsr = Number(prompt("Digite um número inteiro: "));
var contaPar = 0;
while (leiaUsr !== 0) {
    if (leiaUsr % 2 === 0) {
        contaPar++;
    }
    else {
        break;
    }
    ;
    leiaUsr = Number(prompt("Digite um número inteiro: "));
}
;
console.log("Foram digitados ".concat(contaPar, " n\u00FAmeros pares antes que um n\u00FAmero \u00EDmpar fosse digitado"));
// QUESTÃO 18
var leiaU = Number(prompt("Digite um número inteiro: "));
var contaPars = 0;
var contaImpars = 0;
while (leiaU !== 0) {
    if (leiaU % 2 === 0) {
        contaPars++;
    }
    else {
        contaImpars++;
    }
    ;
    leiaU = Number(prompt("Digite um número inteiro: "));
}
;
console.log("Foram digitados ".concat(contaPars, " n\u00FAmeros pares e ").concat(contaImpars, " n\u00FAmeros \u00EDmpares."));
// QUESTÃO 19
var leia = Number(prompt("Digite um número inteiro: "));
var conta2 = 0;
var conta3 = 0;
var conta5 = 0;
while (leia !== 0) {
    if (leia % 2 === 0) {
        conta2++;
    }
    else if (leia % 3 === 0) {
        conta3++;
    }
    else if (leia % 5 === 0) {
        conta5++;
    }
    ;
    leia = Number(prompt("Digite um número inteiro: "));
}
;
console.log("Foram digitados ".concat(conta2, " n\u00FAmeros que s\u00E3o divis\u00EDveis por 2, ").concat(conta3, " n\u00FAmeros divis\u00EDveis por 3 e ").concat(conta5, " divis\u00EDveis por 5"));
// QUESTÃO 20
var userNums = Number(prompt("Digite um número inteiro"));
var divisiveis3 = [];
while (userNums !== 0) {
    if (userNums % 3 === 0) {
        divisiveis3.push(userNums);
    }
    ;
    userNums = Number(prompt("Digite um número inteiro"));
}
;
console.log("Os n\u00FAmeros digitados divis\u00EDveis por 3 s\u00E3o: ".concat(divisiveis3));
var meDia = divisiveis3.reduce(function (acc, curr) { return acc + curr; }) / divisiveis3.length;
console.log("A m\u00E9dia dos n\u00FAmeros divis\u00EDveis por 3 \u00E9 ".concat(meDia.toFixed(2)));
// QUESTÃO 21
var numTresDigitos = Number(prompt("Digite um sequência de números inteiros: "));
var guardaNumeros = [];
while (numTresDigitos !== 0) {
    if (numTresDigitos >= 100) {
        guardaNumeros.push(numTresDigitos);
    }
    ;
    numTresDigitos = Number(prompt("Digite um sequência de números inteiros: "));
}
;
console.log("Foram digitados ".concat(guardaNumeros.length, " n\u00FAmeros com 3 d\u00EDgitos ou mais. Os n\u00FAmeros digitados foram: ").concat(guardaNumeros));
// QUESTÃO 22
var insiraNumeros = Number(prompt("Digites números: "));
var guardeNumeros = [];
while (insiraNumeros !== 0) {
    if (insiraNumeros >= 50 && insiraNumeros <= 100) {
        guardeNumeros.push(insiraNumeros);
    }
    ;
    insiraNumeros = Number(prompt("Digites números: "));
}
;
var media = guardeNumeros.reduce(function (acc, curr) { return acc + curr; }) / guardeNumeros.length;
console.log("Entre os n\u00FAmeros 50 e 100 voc\u00EA digitou os n\u00FAmeros ".concat(guardeNumeros));
console.log("A m\u00E9dia dos n\u00FAmeros digitados entre 50 e 100 \u00E9 ".concat(media.toFixed(2)));
// QUESTÃO 23
var entradaUsuario = Number(prompt("Digite um número: "));
var numeros = [];
while (entradaUsuario !== 0) {
    if (entradaUsuario % 2 !== 0 && entradaUsuario > 0) {
        numeros.push(entradaUsuario);
    }
    ;
    entradaUsuario = Number(prompt("Digite um número: "));
}
;
var menorNumero = Math.min.apply(Math, numeros);
console.log("Voc\u00EA digitou os seguintes valores positivos e \u00EDmpares: ".concat(numeros));
console.log("O menor valor digitado que \u00E9 positivo e \u00EDmpar \u00E9 o ".concat(menorNumero));
// QUESTÃO 24
var leiaUser = Number(prompt("Digite um número inteiro: "));
var guardaEntrada = [];
var contaPares = 0;
var contaImpares = 0;
while (leiaUser !== 0) {
    guardaEntrada.push(leiaUser);
    leiaUser = Number(prompt("Digite um número inteiro: "));
}
;
console.log("N\u00FAmero digitados: ".concat(guardaEntrada));
if (guardaEntrada.length > 2) {
    var contagemValida = guardaEntrada.slice(1, -1); //para excluir o primeiro e o último
    // só contará os número que estavam entre o primeiro e o último
    for (var _i = 0, contagemValida_1 = contagemValida; _i < contagemValida_1.length; _i++) {
        var numero = contagemValida_1[_i];
        if (numero % 2 === 0) {
            contaPares++;
        }
        else {
            contaImpares++;
        }
        ;
    }
    ;
    console.log("N\u00FAmeros considerados para a contagem: ".concat(contagemValida));
    console.log("Foram digitados ".concat(contaPares, " n\u00FAmeros pares e ").concat(contaImpares, " n\u00FAmeros \u00EDmpares."));
}
else {
    console.log("Número insuficiente de entradas para análise.");
}
;
