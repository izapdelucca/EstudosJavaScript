//MANIPULANDO ELEMENTOS:

const items = document.querySelector('.items');

//removeu da página os items
// items.remove();

//pega o primeiro item de 'items', remove e mostra no console
// console.log(items.firstElementChild.remove());
// //pega o ultimo item de 'items', remove e mostra no console
// console.log(items.lastElementChild.remove());

//mudou o conteudo, o texto, do elemento
items.children[0].textContent = 'Item Um';
items.lastElementChild.innerHTML = '<h1>Hello world!</h1>'

const button = document.querySelector('.btn');

//muda a cor do botao para vermelho
button.style.background = 'red';

//muda a cor do texto do botao para preto
button.style.color = 'black';