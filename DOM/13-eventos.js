//EVENTOS:

// Seleciona o botão de envio pelo seu ID 'submit-button'
const submitButton = document.querySelector('#submit-button');

const myForm = document.querySelector('#my-form');

// Seleciona o campo de entrada de nome pelo seu ID 'name'
const nameInput = document.querySelector('#name');
// Seleciona o campo de entrada de email pelo seu ID 'email'
const emailInput = document.querySelector('#email');

const conteudoItem = document.querySelector('.items');

const body = document.querySelector('body');

// Adiciona um ouvinte de evento 'click' ao botão de envio
submitButton.addEventListener('click', function (event) {
    // Previne o comportamento padrão do evento de clique
    //evitar que o formulário seja enviado
    event.preventDefault();

    // Imprime o objeto do evento no console
    console.log(event);
    // Imprime a mensagem 'clicked' no console
    console.log('clicked');

    // Obtém o valor do campo de entrada de nome e armazena em nameValue
    // Nota: 'ariaValueMax' deve ser 'value' para obter o valor digitado no campo
    //faz aparecer o q digitar no input no console
    const nameValue = nameInput.value;
    // Imprime o valor do campo de entrada de nome no console
    console.log(nameValue);

    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        return alert('Please fill out all the fields!');
    }

    myForm.style.background = 'red';

    //faz o conteudo do input de name, ir para o item um
    conteudoItem.children[0].textContent = nameValue;
    // outra forma:
    // conteudoItem.firstElementChild.textContent = nameValue;
    conteudoItem.children[1].textContent = emailValue;

    body.style.background = 'white';
})

// Adiciona um ouvinte de evento 'change' ao campo de entrada de nome
nameInput.addEventListener('change', function (e) {
    // Imprime o valor atual do campo de entrada de nome no console
    console.log(e.target.value);
})


