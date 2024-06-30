//Truthy & Falsy

//!! - é uma maneira comum de converter um valor para um booleano. 
//checa se a variavel é verdadeira ou falsa

const x = ''; ////string vazia sempre é false
console.log(!!x); //vai checar se é true ou false

const y = 0; //0 é false
console.log(!!y);

const a = null; //null é false
const b = undefined; // undefined é false
console.log(!!a);
console.log(!!b);

const list = []; //lista vazia é true
const object = {}; // objeto vazio é true
console.log(!!list);
console.log(!!object);

if (list.length === 0) { //checa se a lista é vazia ou não, se tiver, mostra um []
    console.log(list);
}

if (list.length > 0) { //checa se tem algo na lista e mostra
    console.log(list);
}

console.log(!list); //com um ! muda o booleano, se é true, vira false, se é false, vira true