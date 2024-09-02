// pegando elemento pela id
const nomeBtn = document.getElementById('btn');
console.log(nomeBtn);

// pegando elemento pela classe
const listItem = document.getElementsByClassName('list-item');
console.log(listItem);

// pegando elemento pelo nome da tag
const tagItems = document.getElementsByTagName('h2');
console.log(tagItems);

// pegando pelo query selector, que pega o primeiro elemento que combina com o que foi procurado
 const container = document.querySelector('h1');
 console.log(container);

// pegando pelo query selector all, que pega todos os elementos que combinam com o que foi procurado
const selectorAll = document.querySelectorAll('div');
console.log(selectorAll);