//FORMULARIO COM VALIDAÇÃO:
// Seleciona o campo de entrada de nome pelo seu ID 'name'
const nameInput = document.querySelector('#name');
// Seleciona o campo de entrada de email pelo seu ID 'email'
const emailInput = document.querySelector('#email');
// Seleciona o botão de envio pelo seu ID 'submit-button'
const submitButton = document.querySelector('#submit-button');

// Seleciona o elemento de mensagem de erro pela sua classe 'msg'
const errorMessage = document.querySelector('.msg');

// Seleciona o elemento da lista onde os itens serão adicionados pela sua classe 'items'
const items = document.querySelector('.items');

// Adiciona um ouvinte de evento 'click' ao botão de envio
submitButton.addEventListener('click', (e) => {
    // Previne o comportamento padrão do evento de clique
    // evitar que o formulário seja enviado
    e.preventDefault();

    // Obtém o valor do campo de entrada de nome
    const nameValue = nameInput.value;
    // Obtém o valor do campo de entrada de email
    const emailValue = emailInput.value;

    // Verifica se os campos de nome ou email estão vazios
    if (nameValue === '' || emailValue === '') {
        // Define o texto da mensagem de erro
        errorMessage.textContent = 'Please fill out the fields!';
        // Adiciona a classe 'error' ao elemento de mensagem de erro
        errorMessage.classList = 'error';

        // Remove a mensagem de erro após 3 segundos
        setTimeout(() => {
            // Limpa o texto da mensagem de erro
            errorMessage.textContent = "";
            // Remove a classe 'error' do elemento de mensagem de erro
            errorMessage.classList = "";
        }, 3000);
        // Encerra a execução da função se os campos estiverem vazios
        return;
    }

    // Cria um novo elemento de lista 'li'
    const li = document.createElement('li');
    // Adiciona a classe 'item' ao novo elemento 'li'
    li.classList = 'item';
    // Define o conteúdo HTML do novo elemento 'li' com os valores dos campos de nome e email
    li.innerHTML = `Nome: ${nameValue}<br/> Email: ${emailValue}`;

    // Adiciona o novo elemento 'li' à lista de itens
    items.appendChild(li);

    // Limpa os valores dos campos de entrada de nome e email
    nameInput.value = '';
    emailInput.value = '';
});
