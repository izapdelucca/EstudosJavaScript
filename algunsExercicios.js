// Função Simples:

//  Crie uma função chamada saudar que recebe um nome como argumento e imprime 
// "Olá, [nome]!".

function saudar(name) {
    console.log(`Olá, ${name}!`);
}

saudar('Izabella');

// Função com Retorno:

//  Crie uma função chamada somar que recebe dois números como argumentos e retorna a soma deles.

function somar(a, b) {
    return console.log(a + b);
}

somar(2, 8);

//ou
let resultado = somar(2, 8);

// Função com Lista:

//  Crie uma função chamada listarFrutas que recebe uma lista de frutas e imprime cada uma no console.

let frutas = ["maçã", "banana", "laranja"];

function listarFrutas(listaDeFrutas) {
    for (let i = 0; i < listaDeFrutas.length; i++) {
        console.log(listaDeFrutas[i]);
    }
}
listarFrutas(frutas);