// creating elements

const ul = document.querySelector('ul');
const createLi = document.createElement('li');

// adding elements

ul?.append(createLi); // adiciona o elemento criado (li) a um elemento pai (ul)

// Modifying text

const modifying = document.querySelector('list-items');

// pegando o texto do primeiro elemento buscado
//console.log(modifying?.inneText);

// pegando o conteúdo textual do primeiro elemento buscado
console.log(modifying?.textContent)

// pegando o conteúdo com o innerHtml
console.log(modifying?.innerHTML);