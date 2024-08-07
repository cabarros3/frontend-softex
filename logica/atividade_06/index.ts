// QUESTÃO 3

let a = 0;

while (a < 10) {
    console.log("testando uma frase");
    a++;
};

// QUESTÃO 4

let b = 465484133;

while (b > 10) {
    console.log(b);
    b /= 35;
};

// QUESTÃO 5

let c = 0;

do {
    console.log(b);
    c++;
} 
while (c < 5);

// QUESTÃO 6

let d = 0;

while (d < 10) {
    d++
    console.log(d);
};
// QUESTÃO 7

let e = 10;

while (e > 0) {
    e--;
    console.log(e)
};
// QUESTÃO 8

let numers = 1;
let somaAoCub = 0;

while (numers < 100) {
    numers++;
    somaAoCub = numers + numers;
    console.log(`O numero ${numers} + ${numers} é igual a ${somaAoCub}`);
};


// QUESTÃO 9

let nums = 1;
let produto = 1;

while (nums <= 5) {
    produto *= nums;
    nums++;
};

console.log(`O produto dos números de 1 a 5 é: ${produto}`);
// QUESTÃO 10

let f = 0;
let calculadora = 0;

while (f < 10) {
    f++;
    calculadora = 9 * f;
    console.log(`9 X ${f} = ${calculadora}`);
};
// QUESTÃO 11

let numUser = Number(prompt("Digite uma sequência de números: "));
let guardaNums: number[] = [];


while (numUser !== 0) {
    guardaNums.push(numUser);
    numUser = Number(prompt("Digite uma sequência de números: "));
};

let maior = Math.max(...guardaNums);
let menor = Math.min(...guardaNums);
console.log(`Você digitou a seguinte sequência de números: ${guardaNums}`);
console.log(`A maior sequência de números digitada foi ${maior}`);
console.log(`A menor sequência de números digitada foi ${menor}`);


// QUESTÃO 12

let notA = Number(prompt("Digite uma nota: "));
let notaS: number[] = [];
let conta = 1;

while (notA !== -1) {
    notaS.push(notA);
    notA = Number(prompt("Digite uma nota: "));
    conta++;
};


let mediA = notaS.reduce((acc, curr) => acc + curr) / notaS.length;
console.log(`A média das notas foi ${mediA.toFixed(2)}`);

// QUESTÃO 13

let g = 0; 
let soma = 0;
let somaAoCubo = 0; 

// entrada do usuário
let entradaUser = prompt("Digite uma sequência de números inteiros: ");
let digitos = entradaUser?.split(""); 
console.log(digitos);

if (digitos !== undefined) {
    while (g < digitos.length) {
        let digito = Number(digitos[g]);
        soma += digito;
        somaAoCubo = Math.pow(soma, 3);
        g++;
    };
};

console.log(`O laço de repetição foi executado ${g} vezes`);
console.log(`A soma dos dígitos é ${soma}`);
console.log(`A soma dos dígitos ao cubo é ${somaAoCubo}`);

// QUESTÃO 14

let h = 1;

while (h <= 100) {
    if (h % 2 !== 0) {
        console.log(h);
    }
    h++;
};


// QUESTÃO 15

let j = 1;

while (j <= 50) {
    if (j % 3 !== 0) {
        console.log(j);
    };
    j++;
};


// QUESTÃO 16

let nota = Number(prompt("Digite uma nota: "));
let notas: number[] = [];
notas.push(nota);

let contador = 1;
let aprovado: number = 0
let reprovado: number = 0

while (contador < 5) {
    nota = Number(prompt("Digite uma nota: "));
    notas.push(nota);
    contador++;
};

for (let i = 0; i < notas.length; i++){
    if (notas[i] >= 7){
        aprovado++
    } else {
        reprovado++
    };
};

console.log(`Nessa turma, ${aprovado} alunos foram aprovados e ${reprovado} alunos foram reprovados`);
// QUESTÃO 17

let leiaUsr = Number(prompt("Digite um número inteiro: "));

let contaPar = 0;

while (leiaUsr !== 0) {
    
    if (leiaUsr % 2 === 0) {
        contaPar++;
    } else {
        break;
    };

    leiaUsr = Number(prompt("Digite um número inteiro: "));
};

console.log(`Foram digitados ${contaPar} números pares antes que um número ímpar fosse digitado`);

// QUESTÃO 18

let leiaU = Number(prompt("Digite um número inteiro: "));

let contaPars = 0;
let contaImpars = 0;

while (leiaU !== 0) {
    
    if (leiaU % 2 === 0) {
        contaPars++;
    } else {
        contaImpars++;
    };

    leiaU = Number(prompt("Digite um número inteiro: "));
};

console.log(`Foram digitados ${contaPars} números pares e ${contaImpars} números ímpares.`);

// QUESTÃO 19

let leia = Number(prompt("Digite um número inteiro: "));

let conta2 = 0;
let conta3 = 0;
let conta5 = 0;

while (leia !== 0) {
    
    if (leia % 2 === 0) {
        conta2++;
    } else if (leia % 3 === 0) {
        conta3++;
    } else if (leia % 5 === 0) {
        conta5++
    };

    leia = Number(prompt("Digite um número inteiro: "));
};

console.log(`Foram digitados ${conta2} números que são divisíveis por 2, ${conta3} números divisíveis por 3 e ${conta5} divisíveis por 5`);
// QUESTÃO 20

let userNums = Number(prompt("Digite um número inteiro"));
let divisiveis3: number[] = []

while (userNums !== 0) {
       
    if (userNums % 3 === 0) {
        divisiveis3.push(userNums)
    };

    userNums = Number(prompt("Digite um número inteiro"));
};

console.log(`Os números digitados divisíveis por 3 são: ${divisiveis3}`);
let meDia = divisiveis3.reduce((acc, curr) => acc + curr) / divisiveis3.length;
console.log(`A média dos números divisíveis por 3 é ${meDia.toFixed(2)}`);
// QUESTÃO 21

let numTresDigitos = Number(prompt("Digite um sequência de números inteiros: "));
let guardaNumeros: number[] = []

while (numTresDigitos !== 0) {
    if (numTresDigitos >= 100) {
        guardaNumeros.push(numTresDigitos);
    };

    numTresDigitos = Number(prompt("Digite um sequência de números inteiros: "));
};

console.log(`Foram digitados ${guardaNumeros.length} números com 3 dígitos ou mais. Os números digitados foram: ${guardaNumeros}`);
// QUESTÃO 22

let insiraNumeros = Number(prompt("Digites números: "));
let guardeNumeros: number[] = [];

while (insiraNumeros !== 0) {
    
    if (insiraNumeros >= 50 && insiraNumeros <= 100) {
        guardeNumeros.push(insiraNumeros)
    };
    
    insiraNumeros = Number(prompt("Digites números: "));
};

let media = guardeNumeros.reduce((acc, curr) => acc + curr) / guardeNumeros.length;
console.log(`Entre os números 50 e 100 você digitou os números ${guardeNumeros}`);
console.log(`A média dos números digitados entre 50 e 100 é ${media.toFixed(2)}`);
// QUESTÃO 23

let entradaUsuario = Number(prompt("Digite um número: "));
const numeros: number[] = [];

while (entradaUsuario !== 0) {
    if (entradaUsuario % 2 !== 0 && entradaUsuario > 0) {
        numeros.push(entradaUsuario);
    };

    entradaUsuario = Number(prompt("Digite um número: "));
};

let menorNumero = Math.min(...numeros);
console.log(`Você digitou os seguintes valores positivos e ímpares: ${numeros}`);
console.log(`O menor valor digitado que é positivo e ímpar é o ${menorNumero}`);
// QUESTÃO 24

let leiaUser = Number(prompt("Digite um número inteiro: "));
let guardaEntrada: number[] = [];
let contaPares = 0;
let contaImpares = 0;

while (leiaUser !== 0) {
    guardaEntrada.push(leiaUser);
    leiaUser = Number(prompt("Digite um número inteiro: "));
};

console.log(`Número digitados: ${guardaEntrada}`);

if (guardaEntrada.length > 2) {
  
    const contagemValida = guardaEntrada.slice(1, -1); //para excluir o primeiro e o último
    // só contará os número que estavam entre o primeiro e o último
    for (let numero of contagemValida) {
        if (numero % 2 === 0) {
            contaPares++;
        } else {
            contaImpares++;
        };
    };

    console.log(`Números considerados para a contagem: ${contagemValida}`);
    console.log(`Foram digitados ${contaPares} números pares e ${contaImpares} números ímpares.`);
} else {
    console.log("Número insuficiente de entradas para análise.");
};
