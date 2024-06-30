//CRIANDO OBJETOS

const person = {
    firstName: 'Izabella',
    lastName: 'Prandino de Lucca',
    age: 18,
    hobbies: ['Sair', 'Programar', 'Ver namorada'], 
    girlfriend: {
        name: 'Bruna',
        age: 20,
    },
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

//mesma coisa do que foi feito em cima
const {firstName: primeiroNome, lastName, age, hobbies, girlfriend: { name: girlfriendName }} = person; 

const hobbie = person.hobbies[2]; //ve o hobbie da posição 2

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(hobbie);

//person.girlfriend = 'Bruna'; // adiciona a propriedade girlfriend em person

console.log(person);
console.log(person.girlfriend.age);
console.log(girlfriendName);



const tarefas = [
    {
        id: 1,
        description: 'Estudar',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Arrumar quarto',
        isCompleted: true
    }
]

const descriptionOfLastTarefa = tarefas[2].description;

console.log(descriptionOfLastTarefa);