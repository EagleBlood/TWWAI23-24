class Animal {
    name: string;

    constructor(name: string)
    {
        this.name = name;
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Hau hau!\n\r");
    }
}

class Cat extends Animal{
    makeSound() {
        console.log("Miau miau!\n\r");
    }
}

const dog = new Dog("Burek");
const cat = new Cat("Filemon");

console.log("Zadanie 4\n\r");
console.log(`Pies ${dog.name} robi `);
dog.makeSound();

console.log(`Kot ${cat.name} robi `);
cat.makeSound();