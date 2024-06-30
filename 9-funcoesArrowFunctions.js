//FUNÇÕES

// Função que recebe dois argumentos a e b
function sum(a, b) {
    // Imprime a soma de a e b no console
    console.log(a + b);
}

// Chama a função sum com os argumentos 2 e 10
sum(2, 10);


// Função sum2 que recebe dois argumentos c e d
function sum2(c, d) {
    // Retorna a soma de c e d
    return c + d;
}

// Chama a função sum2 com os argumentos 2 e 2 e armazena o resultado em sumValue
const sumValue = sum2(2, 2);
// Imprime o valor de sumValue no console
console.log(sumValue);

//ARROW FUNCTION:

//mesma coisa que acima
// Função sumArrow que recebe dois argumentos a e b
// Esta é uma arrow function (função de seta)
const sumArrow = (a, b) => {
    // Retorna a soma de a e b
    return a + b;
}

// Função sumArrow2 que também recebe dois argumentos a e b
// Esta é uma forma mais curta de escrever uma arrow function que retorna um valor
// Útil quando a função tem apenas uma linha de código
//igual a cima, mas só pode fazer se tiver uma linha de código 
const sumArrow2 = (a, b) => a + b;
