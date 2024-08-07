
# ATIVIDADE 06 - ESTRUTURA DE REPETIÇÃO "WHILE"

## Para executar o código
- abrir o arquivo index.html com o live server;
- Para realizar alterações no arquivo .ts você deve executar o arquivo index.ts com o comando <code>tsc --watch index.ts</code> no terminal;

## Fundamentos aprendidos com os exercícios
- estruturas condicionais (if/else);
- Estutura de repetição (for, while);
- template string;
- declaração de variáveis;
- operadores lógicos;
- operador ternário;
- métodos e propriedades (slice, reduce, push, pop, length, split);
- manipulação de dados;
- listas (array).

# QUESTÕES ABERTAS DA ATIVIDADE

1. Enumere as diferenças entre os comandos "for" e "while".


   Em suma, ambos são laços de repetição e se diferenciam, basicamente, pela sua flexibilidade ou rigidez de uso e estrutura.
   
   O "for" precisa de 3 elementos essenciais para ser executado: a inicialização da variável que será iterada, o estabelecimento da condição a ser verificada e a incrementação da variável. Esses elementos são essenciais por que a estrutura do "for" necessita que o número de repetições seja explicitado.

    <br>

   <code>
   for (let i = 0; i < 10; i++) {
        bloco que será executado;
   }
   </code>

    <br>

   A estrutura "while" só precisa de uma condição e de um bloco de código que deverá ser executado enquanto tal condição seja verdadeira, por que não é uma estrutura que precisa de um número de repetições pré-estabelecido.

    <br>

   <code>
        while (condição) {
            bloco de código que será executado enquanto a condição for verdadeira;
        };
    </code>

    <br>

2. Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.

   Ambos são utilizados com mais frequência para percorrer listas, realizar contagens e também podem ser usados para guardar elementos em listas com ou sem estabelecimentos de teste (if) dentro do bloco de código.
    

