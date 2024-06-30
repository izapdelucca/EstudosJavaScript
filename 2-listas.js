// Criação e Acesso a Listas:

//     Crie uma lista chamada frutas contendo as frutas: maçã, banana e laranja.
//     Acesse o segundo item da lista e armazene em uma variável chamada frutaPreferida.

//0        //1      //2
const frutas = ['maçã', 'banana', 'laranja'];

frutaPreferida = frutas[1];

// console.log(frutas);
// console.log(frutaPreferida);


// Adicionando e Removendo Itens:

//     Adicione "uva" à lista frutas.
//     Remova o primeiro item da lista.

frutas.push("uva"); //adiciona "uva" ao array
frutas.shift(frutas[0]); //apaga o elemento da posição 0 do array

// console.log(frutas);


//Testando outros comandos

frutas.unshift(frutas[1]); //adiciona este elemento no array e move pro inicio da lista
frutas.pop(); //remove o ultimo elemento do array

frutas[2] = 'pitaya'; //muda o elemento da posição 2 pra pitaya

const indexOfFruta = frutas.indexOf('banana'); //mostra a posição de 'banana' no array

const sortFruta = frutas.sort(); //ordena alfabeticamente o array frutas

const lenghtFruta = frutas.length; //mostra o tamanho do array

//const words = frutas.split(','); //separa o array, nesse caso sempre que tiver uma virgula pula a linha

console.log(frutas);
console.log(indexOfFruta);
console.log(frutas.indexOf('banana')); //mostra no console a posição de 'banana' no array
console.log(sortFruta);
console.log(lenghtFruta);
// console.log(words);


//Métodos mais usados de listas: map, filter, reduce:

const numbers = [1, 2, 3, 4, 5, 6];

//MAP:
const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2;
})

console.log(numbersMultipliedByTwo);

//FILTER:
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
})

console.log(evenNumbers);

//REDUCE:
const sumOfNumbers = numbers.reduce(function (number, accuulator) {
    return accuulator + number;
}, 0)

//explicação: accumulator inicial igual a 0, number igual a 1
// 0 + 1 = 1
// accumalor virou 1, accumulator 1 + 2, igual a 3, accumalor virou 3

console.log(sumOfNumbers);