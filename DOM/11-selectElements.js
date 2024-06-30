//DOM - Document Object Model

//O DOM(Document Object Model) é uma estrutura hierárquica que o navegador cria ao 
//carregar uma página HTML ou XML. Pense nele como uma árvore invertida: o `window` 
//é a janela do navegador, e o`document` é o topo da árvore que contém a tag raiz`html`. 
//O DOM permite que JavaScript acesse e manipule o conteúdo e a estrutura do documento.
//Ele não é parte do HTML ou do JavaScript, mas sim gerado pelo navegador. Para usar 
//JavaScript com o DOM, insira a tag `script` no HTML, preferencialmente antes do 
//fechamento da tag`body`, para garantir que os scripts sejam carregados após o conteúdo 
//principal.

/////SELECIONANDO ELEMENTOS:


//1.SELECIONA APENAS UM ELEMENTO:

//pega um elemento pelo id, nesse caso o id é 'add-user'
const addUserText = document.getElementById("add-user");

//da pra mudar o elemento, de 'Add User' se tornou:
addUserText.innerText = "Adicionar usuário";

console.log(addUserText);


//outra forma é com query, para reconhecer que é o id coloca #
const addUserText2 = document.querySelector('#add-user');

console.log(addUserText2);


//outra forma de fazer com query, entra em container e seleciona o my-form
const myForm = document.querySelector('.container #my-form');

console.log(myForm);


//seleciona o primeiro item, mesmo tendo 3 'item' no html, ele seleciona apenas um, o primeiro
const item = document.querySelector('.item');

console.log(item);


//2.SELECIONA MULTIPLOS ELEMENTOS:

//pega os 'item' apenas que estao dentro de 'items'
//esse metodo é mais recomendavel
const allItems = document.querySelectorAll('.items .item');

console.log(allItems);


//outra forma de fazer, coloca o className do html
//também não recomendável por retornar um HTMLCollection, já que não da para usar métodos de lista
const allItems2 = document.getElementsByClassName('item');
console.log(allItems2);


//outra forma, usa o nome da tag html, mas não é recomendavel pelo mesmo motivo do outro
const allItems3 = document.getElementsByTagName('li');
console.log(allItems3);