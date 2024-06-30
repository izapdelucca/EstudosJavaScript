//Programação Orientada a Objetos:

//as classes no javascript são basicamente impressoras de objetos a gente consegue definir
// uma entidade, por exemplo, uma pessoa, e imprimir um objeto dessa entidade

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullNAme() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    //pode ser um metodo estatico, já que nao usa nenhum dado da pessoa, por exemplo, o 
    //getFullName, usa o first e lastname, entao a classe precisa ser instanciada para 
    //assinalar o first e last name, mas o speak nao precisa usar nada.
    static speak() {
        console.log('Hello World!');
    }
}

//instaciar person
const person = new Person('Jane', 'Silva', 40);

console.log(person); //mostra os objetos de person

person.getFullNAme(); //mostra o nome completo

Person.speak(); //por ser um metodo static, tem que chamar a classe


//HERANÇA:
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

//quando se extende uma classe, no caso Dog tem acesso a todos os métodos que a classe Animal
class Dog extends Animal {
    constructor(name) {
        super(name) //super chama o constructor de Animal, passando o name na constructor animal
    }

    //esse speak vai sobrescrever o outro
    speak() {
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal('Simba');
const dog = new Dog("Bob");

animal.speak();
dog.speak(); 