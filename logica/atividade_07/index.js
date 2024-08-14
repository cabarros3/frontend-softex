// QUESTÃO 1
console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é mãe do aprendizado");
console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é mãe do aprendizado");
console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é mãe do aprendizado");
// QUESTÃO 2
function criarFrases() {
    console.log("Estudar é muito bom");
    console.log("Paciência e persistência");
    console.log("Revisão é mãe do aprendizado");
}
criarFrases();
criarFrases();
criarFrases();
// QUESTÃO 3
function soma1(num1, num2) {
    console.log(num1 + num2);
}
soma1(10, 15);
soma1(10, 20);
soma1(30, 50);
soma1(50, 50);
// QUESTÃO 4
function soma2(num3, num4) {
    return num3 + num4;
}
;
var teste1 = soma2(10, 15);
console.log(teste1);
var teste2 = soma2(10, 20) + soma2(30, 50);
console.log(teste2);
console.log(soma2(50, 50));
// QUESTÃO 5 
function soma(a, b) {
    return a + b;
}
;
console.log(soma(4, 3));
// QUESTÃO 6
function isPar(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
console.log(isPar(3));
// QUESTÃO 7
function mediaNotas(nota1, nota2, nota3) {
    var resultado = (nota1 + nota2 + nota3) / 3;
    return resultado.toFixed(2);
}
;
console.log("A m\u00E9dia dos n\u00FAmeros \u00E9 ".concat(mediaNotas(8, 5, 9)));
// QUESTÃO 8
function imc(peso, altura) {
    var calcula = peso / (Math.pow(altura, 2));
    console.log(calcula.toFixed(2));
}
;
imc(83, 1.65);
// QUESTÃO 9
function calculaDesconto(valor, porcento) {
    var desconto = (porcento / 100) * valor;
    console.log("O seu desconto \u00E9 de R$ ".concat(desconto));
    var calculo = valor - desconto;
    console.log("O valor do produto com o desconto \u00E9 ".concat(calculo));
}
calculaDesconto(1000, 20);
// QUESTÃO 10
function calcularImpostoRenda(salarioBruto) {
    var salariofinal = 0;
    if (salarioBruto <= 1903.98) {
        console.log("Você está isento.");
    }
    else if (salarioBruto <= 2826.65) {
        var a = (salarioBruto - 1903.98) * 0.075;
        salariofinal = salarioBruto - a;
        console.log("Sal\u00E1rio Bruto: ".concat(salarioBruto, ". Ser\u00E1 descontado do seu sal\u00E1rio ").concat(a.toFixed(2), " e voc\u00EA receber\u00E1 ").concat(salariofinal.toFixed(2)));
    }
    else if (salarioBruto <= 3751.05) {
        var imposto7_5 = (2826.65 - 1903.98) * 0.075;
        var b = imposto7_5 + (salarioBruto - 2826.65) * 0.15;
        salariofinal = salarioBruto - b;
        console.log("Sal\u00E1rio Bruto: ".concat(salarioBruto, ". Ser\u00E1 descontado do seu sal\u00E1rio ").concat(b.toFixed(2), " e voc\u00EA receber\u00E1 ").concat(salariofinal.toFixed(2)));
    }
    else if (salarioBruto <= 4664.68) {
        var imposto7_5 = (2826.65 - 1903.98) * 0.075;
        var imposto15 = (3751.05 - 2826.65) * 0.15;
        var c = imposto7_5 + imposto15 + (salarioBruto - 3751.05) * 0.225;
        salariofinal = salarioBruto - c;
        console.log("Sal\u00E1rio Bruto: ".concat(salarioBruto, ". Ser\u00E1 descontado do seu sal\u00E1rio ").concat(c.toFixed(2), " e voc\u00EA receber\u00E1 ").concat(salariofinal.toFixed(2)));
    }
    else {
        var imposto7_5 = (2826.65 - 1903.98) * 0.075;
        var imposto15 = (3751.05 - 2826.65) * 0.15;
        var imposto22_5 = (4664.68 - 3751.05) * 0.225;
        var d = imposto7_5 + imposto15 + imposto22_5 + (salarioBruto - 4664.68) * 0.275;
        salariofinal = salarioBruto - d;
        console.log("Sal\u00E1rio Bruto: ".concat(salarioBruto, ". Ser\u00E1 descontado do seu sal\u00E1rio ").concat(d.toFixed(2), " e voc\u00EA receber\u00E1 ").concat(salariofinal.toFixed(2)));
    }
    ;
}
calcularImpostoRenda(1500.00); // Deve retornar 0.0
calcularImpostoRenda(2500.00); // Deve retornar um valor calculado com base na faixa de 7,5%
calcularImpostoRenda(3500.00); // Deve retornar um valor calculado com base nas faixas de 7,5% e 15%
calcularImpostoRenda(4500.00); // Deve retornar um valor calculado com base nas faixas de 7,5%, 15% e 22,5%
calcularImpostoRenda(5000.00); // Deve retornar um valor calculado com base em todas as faixas
// QUESTÃO 11
function mediaArredondada(num) {
    var soma = num.reduce(function (a, b) { return a + b; });
    var media = soma / num.length;
    var resultado = Math.round(media);
    console.log("A m\u00E9dia arredondada das notas ".concat(num, " \u00E9:  ").concat(resultado));
}
;
mediaArredondada([9.5, 6.4, 7.4, 6.0]);
// QUESTÃO 12
var digitosPares = [];
var digitosImpares = [];
function contaDigitos(entrada) {
    var digitos = entrada.split("");
    for (var i = 0; i < digitos.length; i++) {
        var digito = Number(digitos[i]);
        if (digito % 2 === 0) {
            console.log("O digito ".concat(digito, " \u00E9 par"));
            digitosPares.push(digito);
        }
        else if (digito % 2 !== 0) {
            console.log("O digito ".concat(digito, " \u00E9 \u00EDmpar"));
            digitosImpares.push(digito);
        }
        ;
    }
    ;
}
;
function somaDigitos() {
    var somaDigitosP = digitosPares.reduce(function (a, b) { return a + b; }, 0);
    var somaDigitosI = digitosImpares.reduce(function (a, b) { return a + b; }, 0);
    if (somaDigitosP > 0) {
        console.log("A soma dos d\u00EDgitos pares \u00E9 ".concat(somaDigitosP));
    }
    if (somaDigitosI > 0) {
        console.log("A soma dos d\u00EDgitos \u00EDmpares \u00E9 ".concat(somaDigitosI));
    }
    ;
}
;
console.log("Antes de contar dígitos:");
contaDigitos("396485");
console.log("Depois de contar dígitos, antes de somar:");
console.log("Dígitos pares:", digitosPares);
console.log("Dígitos ímpares:", digitosImpares);
somaDigitos();
var listaAlunos = [
    { nome: "joão", nota: 9.4 },
    { nome: "camilla", nota: 10 },
    { nome: "Bianca", nota: 6.4 },
    { nome: "clarissa", nota: 7.0 },
];
function mediaAluno(alunos) {
    var somaNotas = alunos.reduce(function (a, aluno) { return a + aluno.nota; }, 0);
    var media = somaNotas / alunos.length;
    return media;
}
;
function listarAlunos(alunos) {
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var aluno = alunos_1[_i];
        console.log("A nota do aluno ".concat(aluno.nome, " \u00E9 ").concat(aluno.nota));
    }
    ;
}
var media = mediaAluno(listaAlunos);
listarAlunos(listaAlunos);
console.log("A m\u00E9dia das notas dos alunos \u00E9 ".concat(media.toFixed(2)));
// QUESTÃO 14
function calcularIdade(nascimento) {
    var idade = 2024 - nascimento;
    console.log("A idade de uma pessoa que nasceu no ano ".concat(nascimento, " \u00E9 ").concat(idade, " anos."));
}
;
calcularIdade(1994);
// QUESTÃO 15
function gerarTabuada(numero) {
    console.log("Tabuada de ".concat(numero, ": "));
    for (var i = 1; i <= 10; i++) {
        var calcular = numero * i;
        console.log("".concat(numero, " X ").concat(i, " = ").concat(calcular));
    }
    ;
}
;
gerarTabuada(3);
// QUESTÃO 16
// primeira parte: gerando e guardando número aleatório
function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
;
var aleatorio = gerarAleatorio(1, 100);
// segunda parte: criar a função advinheNumero
function advinheNumero() {
    var tentativas = Number(prompt("Digite um número de tentativas: "));
    var i = 1;
    while (i <= tentativas) {
        var entradaUser = Number(prompt("Digite um número: "));
        if (entradaUser < aleatorio) {
            alert("Você tentou um número muito baixo");
        }
        else if (entradaUser > aleatorio) {
            alert("Você tentou um número muito alto");
        }
        else if (entradaUser === aleatorio) {
            alert("Voc\u00EA acertou! Parab\u00E9ns!!! Voc\u00EA utilizou ".concat(i, "/").concat(tentativas, " tentativas."));
            break;
        }
        else {
            alert("Entrada inválida");
        }
        ;
        i++;
    }
    ;
}
;
advinheNumero();
alert("O n\u00FAmero aleat\u00F3rio \u00E9 ".concat(aleatorio));
function verificaPropriedade(objeto, entrada) {
    if (objeto.nome === entrada) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
console.log(verificaPropriedade({ nome: "camilla" }, "Olá"));
// QUESTÃO 18
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    var margemLucroPorcento = margemLucro / 100;
    var valorMargeLucro = valorCusto * margemLucroPorcento;
    console.log(valorMargeLucro);
    var precoVenda = valorCusto + valorMargeLucro + valorFrete;
    console.log("O pre\u00E7o de venda do produto \u00E9 ".concat(precoVenda));
}
;
calcularPrecoProduto(100, 20, 15);
// QUESTÃO 19
function verificaFrase(frase) {
    var palavras = frase.split(" ");
    var palavraLonga = "";
    //let conteChar = fraseSep.map(palavra => palavra.length)
    //console.log(conteChar);
    for (var _i = 0, palavras_1 = palavras; _i < palavras_1.length; _i++) {
        var palavra = palavras_1[_i];
        if (palavra.length > palavraLonga.length) {
            palavraLonga = palavra;
        }
        ;
    }
    ;
    alert("A palavra mais longa tem ".concat(palavraLonga.length, " caracteres"));
    return palavraLonga;
}
;
var frase = prompt("Digite uma frase: ");
if (frase != undefined) {
    var palavraMaisLonga = verificaFrase(frase);
    alert("A palavra mais longa \u00E9: ".concat(palavraMaisLonga));
}
;
// QUESTÃO 20
function listaPalavras(arrayPalavras) {
    // definindo medidas
    var comprimento = Math.max.apply(Math, arrayPalavras.map(function (palavra) { return palavra.length; }));
    var largura = comprimento + 4;
    var borda = "*".repeat(largura);
    // redenrizando quadrado
    console.log(borda);
    for (var _i = 0, arrayPalavras_1 = arrayPalavras; _i < arrayPalavras_1.length; _i++) {
        var palavra = arrayPalavras_1[_i];
        var espacosLados = comprimento - palavra.length;
        var linha = "* ".concat(palavra, " ").concat(' '.repeat(espacosLados), "*");
        console.log(linha);
    }
    ;
    console.log(borda);
}
listaPalavras(['olá', 'meu', 'nome', 'é', 'camilla']);
// QUESTÃO 21
var quantidade = Number(prompt("Quantas palavras quer inserir: "));
var plavrasDigitadas = [];
function digitaPalavras() {
    var i = 0;
    while (i < quantidade) {
        var novaPalavra = prompt("Digite uma palavra: ");
        if (novaPalavra) {
            plavrasDigitadas.push(novaPalavra);
        }
        ;
        i++;
    }
    ;
}
;
digitaPalavras();
function verificaMaisLongas(palavrasArray) {
    var palavrasLongas = [];
    for (var _i = 0, palavrasArray_1 = palavrasArray; _i < palavrasArray_1.length; _i++) {
        var palavra = palavrasArray_1[_i];
        if (palavra.length > 5) {
            palavrasLongas.push(palavra);
        }
    }
    return palavrasLongas;
}
;
var palavras = verificaMaisLongas(plavrasDigitadas);
alert("As palavras maislongas s\u00E3o: ".concat(palavras));
var livrosArray = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1988 },
    { titulo: "A culpa é das estrelas", autor: "John Green", ano: 2014 },
    { titulo: "Quem é você, Alasca?", autor: "John Green", ano: 2005 },
    { titulo: "Orgulho e preconceito", autor: "Jane Austen", ano: 1813 },
    { titulo: "Cidade de papel", autor: "John Green", ano: 2008 },
];
function retornaAutor(arrayLivros) {
    var mesmoAutor = [];
    for (var _i = 0, arrayLivros_1 = arrayLivros; _i < arrayLivros_1.length; _i++) {
        var livro = arrayLivros_1[_i];
        if (livro.autor === "John Green") {
            mesmoAutor.push(livro.titulo);
        }
    }
    return mesmoAutor;
}
var livros = retornaAutor(livrosArray);
console.log("Os livros do mesmo autor s\u00E3o: ".concat(livros.join(', ')));
var pessoas = [
    { nome: "Camilla", idade: 29 },
    { nome: "João", idade: 27 },
    { nome: "Jéssica", idade: 32 },
    { nome: "Antonio", idade: 20 },
    { nome: "Severina", idade: 71 },
    { nome: "Roberto", idade: 48 },
];
function verificaMaiVelho(pessoas) {
    var pessoaMaisVelha = pessoas[0];
    for (var _i = 0, pessoas_1 = pessoas; _i < pessoas_1.length; _i++) {
        var pessoa = pessoas_1[_i];
        if (pessoa.idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoa;
        }
        ;
    }
    ;
    return pessoaMaisVelha.nome;
}
;
var pessoaVelha = verificaMaiVelho(pessoas);
console.log("A pessoas mais velha \u00E9 ".concat(pessoaVelha));
var carros = [
    { marca: "BMW", modelo: "BMW X6 M Competition", ano: 2024 },
    { marca: "BMW", modelo: "BMW X5", ano: 1999 },
    { marca: "Fiat", modelo: "Cronos", ano: 2022 },
    { marca: "Fiat", modelo: "Uno", ano: 2000 },
    { marca: "Fiat", modelo: "Argo", ano: 2021 },
    { marca: "Fiat", modelo: "Pulse", ano: 2019 },
];
function verificaFabricacao(carrosArray) {
    var carrosAno = [];
    for (var _i = 0, carrosArray_1 = carrosArray; _i < carrosArray_1.length; _i++) {
        var carro = carrosArray_1[_i];
        if (carro.ano > 2010) {
            carrosAno.push(carro);
        }
        ;
    }
    ;
    return carrosAno;
}
;
var carrosAno = verificaFabricacao(carros);
var detalhesCarrosAno = carrosAno.map(function (carro) { return "".concat(carro.marca, " ").concat(carro.modelo, " (").concat(carro.ano, ")"); }).join(', ');
console.log("Os carros fabricados ap\u00F3s 2010 s\u00E3o: ".concat(detalhesCarrosAno));
// QUESTÃO 25
var pegaNum = prompt("Digite um número inteiro com mais de dois dígitos: ");
var invertido = pegaNum === null || pegaNum === void 0 ? void 0 : pegaNum.split("").reverse().join(""); // usando os método/propriedades split, reverse e join.
console.log("O n\u00FAmero ".concat(pegaNum, " invertido \u00E9 ").concat(invertido));
function inverter(palavra) {
    var invertida = palavra.split("").reverse().join("");
    console.log("A string \"".concat(palavra, "\" invertida fica \"").concat(invertida, "\""));
}
;
inverter("Camilla");
