// estilizando 

// const titulo = document.querySelector('.page-title');

// if (titulo) {
//     titulo.style.color = 'blue';
// };

// console.log(titulo);


const acessandoTexto = document.querySelector('div');
const acessandoTexto2 = document.getElementsByClassName('container-header'); // não vai ser acessado pelo innerText pq retorna uma "lista" de objetos dom

console.log(acessandoTexto?.innerText); // acessando o texto puro dentro do elemento
// usar o textContent no lugar de innerHtml quando for lidar com texto
console.log(acessandoTexto?.textContent); // para acessar todo o texto dentro do elemento, incluindo seus filhos
console.log(acessandoTexto?.innerHTML); // 

// criando um elemento 

const pegarElemento = document.querySelector('ul')
const criarElemento = document.createElement('li');

// adicionando o elemento criado
pegarElemento?.append(criarElemento);

// atribuindo texto ao elemento criado
 criarElemento.innerText = "Olá"

