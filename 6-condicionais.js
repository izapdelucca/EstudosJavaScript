//IF ELSE:
const sum = 1 + 2;

//diferença de == para === é que em qunado é usado 2 iguais, o js checa o valor e 
//não o tipo, então se tivesse um "2" (que seria uma string) daria true mesmo não 
//sendo um valor numerico. mas na maioria das vezes é recomendavel usar === pois
//assim ele checa o valor e o tipo 
if (sum === 2) {
    console.log("Sum is 2!");;
} else if (sum === 3) {
    console.log('Sum is 3!');
} else {
    console.log('Sum is not 2!');
}
// se (if) sum for igual a 2, executa o primeiro console.log, 
//senão (else) executa o segundo


//TERNARY OPERATOR ou OPERADOR TERNÁRIO:

// if (sum === 2) {
//     number = 2;
// } else {
//     number = 4;
// }

//mesma coisa que acima

//let variavel = condicao ? valorSeTrue : valorSeFalse;
//? - se
//: - senao
let number = sum === 2 ? 2 : 4;

console.log(number);

//SWITCH CASE

const car = 'Mercedes'

switch (car) {
    case 'Mercedes': //caso o valor da variável car for 'Mercedes', o irá para o comando do console.log
        console.log('Mercedes is beautiful!');
        break; //O break termina a execução do bloco do switch.
    case 'Ferrari': //caso o valor da variável car for 'Ferrari', o irá para o comando do console.log
        console.log('Ferrari is very red!');
        break;
    case 'Tesla': //caso o valor da variável car for 'Tesla', o irá para o comando do console.log
        console.log('Tesla is very smart!');
        break;
    default: //O bloco default é opcional é caso se nenhum dos casos anteriores corresponder ao valor da variável car.
        console.log('Unknown car brand');
        break;
}

