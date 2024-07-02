// questão 1

type Dados = {
    nome: string,
    idade: number,
    endereco: string,// criada na questão 3
};

let pessoa: Dados = {
    nome: "Camilla",
    idade: 29,
    endereco: "Rua engenho caraú, 87",// criada na questão 3
};

// Questão 2

console.log(`Olá, ${pessoa.nome}!`);

// Questão 3, não fazer



// Questão 4

pessoa.idade = 30;
console.log(pessoa.idade);


// Questão 5
 type Animal = {
    nome: string,
    especie: string,
    cor: string;
 };

 let gato: Animal = {
    nome: "Lorde",
    especie: "Felino",
    cor:"Preto e branco",
 };

 // Questão 6

 type Caracteristicas = {
    titulo: string,
    autor: string, 
    ano: number;
 };

 let livro: Caracteristicas = {
    titulo: "Fogo & Sangue",
    autor: "R. R. Martin",
    ano: 2017,
};

// Questão 7

console.log(`O autor do livro ${livro.titulo} é o ${livro.autor}`);

// Questão 8

livro.ano = 1998;
console.log(livro.ano);

// Questão 9, não fazer

// delete livro.titulo

// Questão 10

type Propriedades = {
    marca: string,
    modelo: string | undefined,
    ano: number;
};

let carro: Propriedades = {
    marca: "BMW",
    modelo: "Um modelo de uma BMW qualquer",
    ano: 2140,
};

console.log(`Este carro é da marca ${carro.marca}, do modelo ${carro.modelo} e do ano ${carro.ano}`);

// Questão 11

carro.modelo = undefined;