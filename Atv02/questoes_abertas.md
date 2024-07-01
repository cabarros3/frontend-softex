# Defina o que é uma variável na programação?

- Variável é um espaço da memória do computador utilizado para armazenar, acessar e modificar valores ou "expressões" por um tempo determinado.

# Escreva com as suas palavras a diferença entre as declarações const, let e var e como elas podem ser aplicadas na prática.

- Const: uma constante é uma variável de leitura, que uma vez declarada não pode mais ter atribuição e declaração no decorrer do código. Deve ser inicializada com um valor.

uso na prática do const

```
// criando uma constante cujo valor não será alterado
// em typescript declarando com o tipo number

const pi: number = 3.14

```

- Var: é uma variável de escopo global, ou seja, pode ser atribuída e reatribuída no decorrer do código e que mão fica "presa" ao escopo de um bloco específico. Pode ou não ser inicializada com um valor.

uso na prática do var

```
// criando uma variável cujo valor pode ser alterado de forma global, independente do escopo
// em typescript declarando com o tipo string

var a: string = "Dinheiro"

if (a.length > 0) {
    console.log("Esta variável não está vazia e a seguir terá um novo valor");
    a = "money";
    console.log(a);
};

```

- Let: é uma variável de escopo local, ou seja, pode ser atribuída e reatribuída dentro do bloco específico a que pertence. Pode ou não ser inicializada com um valor.


uso na prática do let

```
// criando uma variável cujo valor pode ser alterado de forma local, dependendo do escopo
// em typescript declarando com o tipo string

let b: string = "Dinheiro"

if (b.length > 0) {
    console.log("Esta variável não está vazia");
    let x = "money";
};

console.log(x); // apresenta erro, pois x foi declarada dentro do bloco do if

```

# Explique a diferença entre as variáveis do tipo objeto e lista.

- Variaveis do tipo objeto: são variáveis que essencialmente agrupam dados e informações que possuem características em comum, criam uma variável contextualizada.
- Variaveis do tipo Array (lista): são variáveis que essencialmente agrupam dados e informação que tem sentido sozinhas, dados e informações que idependem do contexto. Arrays (listas) podem conter um conjunto de objetos.