//USA QUANDO QUER EXECUTAR O CÓDIGO VÁRIAS VEZES

//FOR LOOP:
for (let index = 0; index < 10; index++) {
    console.log(index);
}
//index começou com 0, o código foi executado enquanto o index for menor que 10, 
//e depois de cada execução, soma 1 ao index

/////////////////////////////////////////////////

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
//carro em cars, car vai ser o item da execução atual. Enão na primeira 
//execução vai ser a Ferrari, na segunda Tesla e assim por diante