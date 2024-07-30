// QUESTÃO 5

for (let i = 0; i <10; i++) {
    console.log("teste uma frase!")
};

// QUESTÃO 6

for (let i = 0; i <10; i++) {
    console.log(i)
};

// QUESTÃO 7

for (let i = 0; i <10; i++) {
    if (i == 5) {
        break;
    };
    console.log(i)
};

// QUESTÃO 8

for (let i = 0; i <10; i++) {
    if (i == 5) {
        continue;
    };
    console.log(i)
};

// QUESTÃO 9

let nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];

for (let n of nomes) {
    console.log(n);
};

// QUESTÃO 10

for (let index = 1; index < 10; index++) {
    console.log(index);
};

// QUESTÃO 11


for (let index = 10; index >= 0; index--) {
    console.log(index);
};


// QUESTÃO 12

for (let numeros = 1; numeros <= 100; numeros++){
    let soma = numeros + numeros;
    console.log(`O numero ${numeros} + ${numeros} é igual a ${soma}`);
};

// QUESTÃO 13

console.log("Lista de todos os números pares de 1 a 50: ");

for (let i = 1; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};

// QUESTÃO 14

console.log("Lista com o produto dos números de 1 a 5: ");

for (let i = 1; i < 5; i++) {
    console.log(i * i);
};

// QUESTÃO 15

console.log("Tabuada de 7: ");

for (let i = 0; i <= 10; i++) {
    let calculadora = 7 * i;
    console.log(`7 X ${i} = ${calculadora}`);
};

// QUESTÃO 16

const notas: number[] = [];
for (let i = 1; i <= 5; i++){
    let nota = Number(prompt("Digite uma nota: "));
    notas.push(nota);
};
console.log(notas);
// let media = (notas[0] + notas[1] + notas [2] + notas[3] + notas[4]) / 5; 
let somaNotas = notas.reduce((acc, curr) => acc + curr, 0); // usando o .reduce() que transforma os valores de um array em um único valor.
let m = somaNotas / 5; 
console.log(`A média das notas é ${m.toFixed(2)}`);


// QUESTÃO 17

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    };
};

// QUESTÃO 18

const guardaNums: number[] = []

for (let i = 1; i <= 10; i++) {
    let leiaNum = Number(prompt("Digite o número: "));
    guardaNums.push(leiaNum);
};
let maiorNum = Math.max(...guardaNums)
console.log(`O maior número digitado é o número ${maiorNum}`); // ""..." Expande o array em argumentos individuais

// QUESTÃO 19

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    };
};

// QUESTÃO 20

const mediasAlunos: number[] = []
let contAprovados: number = 0;

for (let i = 1; i <= 5; i++) {
    let leiaMedia = Number(prompt("Digite a média do aluno(a): "));
    mediasAlunos.push(leiaMedia);
};

console.log(mediasAlunos);

for (let i = 0; i < mediasAlunos.length; i++) {
    if (mediasAlunos[i] >= 7) { 
       contAprovados++
    };
};

console.log(`${contAprovados} alunos foram aprovados.`);

// QUESTÃO 21

let entradaUsuario = prompt("Digite um número inteiro de dois dígitos: ");
let soma: number = 0;

if (entradaUsuario !== undefined) {
    let digitos = entradaUsuario?.split("");
    if (digitos !== undefined) {
        for (let i = 0; i < digitos?.length; i++) {
            const digito: number = Number(digitos[i]);
            soma += digito;
        }
        console.log(`A soma entre os digitos do número inteiro digitado é ${soma}`);
    };
};

// QUESTÃO 22

let leiInteiro = Number(prompt("Digite um número inteiro: "));
const guardaDivisores: number[] = [];

for (let i = 0; i <= leiInteiro; i++) {
    if (leiInteiro % i === 0) {
        guardaDivisores.push(i);
    };
};

console.log(`O divisores de ${leiInteiro} são: ${guardaDivisores}`);

// QUESTÃO 23

const alturas: number[] = []

for (let i = 1; i <= 5; i++) {
    let leiaAltura = Number(prompt("Digite a altura da pessoa: "));
    alturas.push(leiaAltura);
};

let somaAlturas = alturas.reduce((acc, curr) => acc + curr, 0); // usando o .reduce() que transforma os valores de um array em um único valor.
let media = somaAlturas / 5; 
console.log(`A média das alturas é ${media.toFixed(2)}`);

// QUESTÃO 24 

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ")
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    } else {
        console.log(i)
    };
};

// QUESTÃO 25

let entradaUser = prompt("Digite um número inteiro com mais de dois dígitos: ");
const digitosPares: number[] = []

if (entradaUser !== undefined) {
    let digitos = entradaUser?.split("");
    if (digitos !== undefined) {
        for (let i = 0; i < digitos?.length; i++) {
            const digito: number = Number(digitos[i]);
            if (digito % 2 === 0) {
                console.log(`O digito ${digito} é par`)
                digitosPares.push(digito);
            };
        };
        
    };
};

let somaDigitos = digitosPares.reduce((acc, curr) => acc + curr, 0); // usando o .reduce() que transforma os valores de um array em um único valor.
if (somaDigitos > 0) {
    console.log(`A soma dos dígitos pares é ${somaDigitos}`);
} else {
    console.log("Como todos digitos são ímpares, não foi possível realizar a soma.");
};

// QUESTÃO 26

let pegaNum = prompt("Digite um número inteiro com mais de dois dígitos: ");

let invertido = pegaNum?.split("").reverse().join(""); // usando os método/propriedades split, reverse e join.

console.log(`O número ${pegaNum} invertido é ${invertido}`);