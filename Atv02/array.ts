// Questão 1

let numeros: number[] = [];

// Questão 2

numeros.push(1, 2, 3, 4);
console.log(numeros);

// Questão 3

console.log(numeros[1]);

// Questão 4

numeros[2] = 10;
console.log(numeros);

// Questão 5

numeros.pop();
console.log(numeros);


// Questão 6

console.log(numeros.length);

// Questão 7

let frutas: string[] = ["Maça", "Banana", "Laranja"];
console.log(frutas);

// Questão 8

console.log(frutas[0]);

// Questão 9

frutas.push("Uva");
console.log(frutas);

// Questão 10

type Aluno = {
    nome: string, 
    idade: number;
}

let aluno1: Aluno = {
    nome: "Camilla Barros",
    idade: 29,
}

let alunos: Aluno[] = [aluno1];

console.log(alunos);

// Questão 11

console.log(alunos[0].nome);

// Questão 12

let aluno2: Aluno = {
    nome: "Fulano da Silva",
    idade: 59,
};

let aluno3: Aluno = {
    nome: "Chappell Roan",
    idade: 23,
};

let aluno4: Aluno = {
    nome: "Lady Gaga",
    idade: 66,
};

alunos.push(aluno2, aluno3, aluno4);
console.log(alunos);

// Questão 13

let produtos: string[]= ["Carne", "Verdura", "Detergente", "Goiabada", "Pão doce", "Leite", "Sabonete", "óleo", "Pimenta do reino", "Feijão"];

for (let i = 0; i < produtos.length; i++){
    if(i % 2 == 0){
        console.log(produtos[i]);
    }
}