// pegando elemento pela id
var nomeBtn = document.getElementById('btn');
console.log(nomeBtn);
// pegando elemento pela classe
var listItem = document.getElementsByClassName('list-item');
console.log(listItem);
// pegando elemento pelo nome da tag
var tagItems = document.getElementsByTagName('h2');
console.log(tagItems);
// pegando pelo query selector, que pega o primeiro elemento que combina com o que foi procurado
var container = document.querySelector('h1');
console.log(container);
// pegando pelo query selector all, que pega todos os elementos que combinam com o que foi procurado
var selectorAll = document.querySelectorAll('div');
console.log(selectorAll);
