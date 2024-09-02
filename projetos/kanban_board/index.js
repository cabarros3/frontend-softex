// estilizando 
// const titulo = document.querySelector('.page-title');
// if (titulo) {
//     titulo.style.color = 'blue';
// };
// console.log(titulo);
var acessandoTexto = document.querySelector('div');
var acessandoTexto2 = document.getElementsByClassName('container-header'); // não vai ser acessado pelo innerText pq retorna uma "lista" de objetos dom
console.log(acessandoTexto === null || acessandoTexto === void 0 ? void 0 : acessandoTexto.innerText); // acessando o texto puro dentro do elemento
// usar o textContent no lugar de innerHtml quando for lidar com texto
console.log(acessandoTexto === null || acessandoTexto === void 0 ? void 0 : acessandoTexto.textContent); // para acessar todo o texto dentro do elemento, incluindo seus filhos
console.log(acessandoTexto === null || acessandoTexto === void 0 ? void 0 : acessandoTexto.innerHTML); // 
// criando um elemento 
var pegarElemento = document.querySelector('ul');
var criarElemento = document.createElement('li');
// adicionando o elemento criado
pegarElemento === null || pegarElemento === void 0 ? void 0 : pegarElemento.append(criarElemento);
// atribuindo texto ao elemento criado
criarElemento.innerText = "Olá";
