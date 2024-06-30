//LOOP: USA QUANDO QUER EXECUTAR O CÓDIGO VÁRIAS VEZES

///////FOR LOOP:

for (let index = 0; index < 10; index++) {
    console.log(index);
}
//index começou com 0, o código foi executado enquanto o index for menor que 10, 
//e depois de cada execução, soma 1 ao index


const cars = ['Ferrari', 'Tesla', 'Mercedes'];

//começou o loop com i = 0, e vai executar o loop enquanto i for menor do que o tamanho 
//do array cars, e depois de cada execução soma 1 no i, até alcançar o numero de elementos
// que tem na lista de carros e parar o loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);//mostra no console cars na posição i
}


//FOR OF:
for (let car of cars) {
    console.log(car);
}

//para cada carro, na lista/array de carros, mostra no console o carro


//FOR EACH:
cars.forEach(function (car) {
    console.log(car);
})

//essa função vai ser executada para cada item no array, então para cada 
//carro em cars, car vai ser o item da execução atual. Então na primeira 
//execução vai ser a Ferrari, na segunda Tesla e assim por diante


//FOR IN:
const person = {
    name: 'Adriana',
    age: 50,
}
//Este é um loop for...in, que itera sobre todas as propriedades enumeráveis de um objeto.
//property é uma variável que, em cada iteração do loop, irá conter o nome de uma 
//propriedade do objeto person.
for (property in person) {
    console.log(person[property]); // imprime no console o valor da propriedade atual.
}
//Na primeira iteração, property será 'name'. Portanto, person[property] é o mesmo que 
//person['name'], que é 'Adriana'. Isso será impresso no console.
//Na segunda iteração, property será 'age'.Portanto, person[property] é o mesmo que 
//person['age'], que é 50. Isso também será impresso no console.


///////WHILE: executa determinado código, enquanto uma condição passada for verdadeira

let index = 0;

while (index < 10) {
    console.log('index é menor do que 10!');
    // index = index + 1;
    // index += 1;

    //mesma coisa que acima
    index++;
}


// Iterando sobre uma Lista:

//     Use um loop for para iterar sobre a lista frutas e imprimir cada fruta no console.

const frutas = ['maçã', 'banana', 'laranja'];

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element);
}