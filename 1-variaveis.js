//Declaração de variaveis

let mutavel = "variavel";
const imutavel = "variavel que não da pra mudar"

mutavel = 'variavel que da pra mudar o valor';
imutavel = 'varivael'; //da erro pq nao da pra mudar o valor

console.log(mutavel);
console.log(imutavel);

// Criação de Variáveis Simples:

//     Crie uma variável para armazenar seu nome.
//     Crie uma variável para armazenar sua idade.
//     Crie uma variável para armazenar seu país.

const name = 'Izabella';
const age = 18;
const country = 'Brasil';

// Operações com Variáveis:

//     Crie duas variáveis, a e b, e atribua a elas os valores 5 e 10, respectivamente.
//     Crie uma terceira variável c que seja a soma de a e b.

const a = 5;
const b = 10;

const c = a + b;

console.log(c);

// Concatenando Strings:

//     Crie uma variável para armazenar seu primeiro nome.
//     Crie uma variável para armazenar seu sobrenome.
//     Crie uma variável nomeCompleto que seja a junção do seu primeiro nome e sobrenome.

const firstName = 'Izabella';
const lastName = 'Prandino de Lucca';

const nomeCompleto = firstName + ' ' + lastName;
const nomeCompleto2 = `${firstName} ${lastName}`; //outra forma de somar

console.log(nomeCompleto);
// console.log(`${firstName} ${lastName}`);
console.log(nomeCompleto2);