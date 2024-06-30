//&& - AND (E)
//|| - OR (OU)

const sum1 = 2 + 2;
const sum2 = 3 + 3;

//se sum1 E sum2... (as duas condições ttem que dar verdadeiras para dar a mensagem)
if (sum1 === 4 && sum2 === 6) {
    console.log('sum1 is 4! and sum2 is 6!');
}

//se sum1 OU sum2... (só uma das condições precisa ser verdadeira para dar a mensagem)
if (sum1 === 4 || sum2 === 6) {
    console.log('sum1 is 4! or sum2 is 6!');
}