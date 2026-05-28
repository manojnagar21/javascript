class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isCute() {
        return true;
    }
    isSuperCute() {
        return this.age <= 1;
    }
}
const Animal1 = new Animal("tom", 2);
console.log(Animal1);
console.log(Animal1.eat());
console.log(Animal1.isCute());
console.log(Animal1.isSuperCute());

// create a dog class
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isCute() {
        return true;
    }
    isSuperCute() {
        return this.age <= 1;
    }
}
const Dog1 = new Dog("tommy", 1);
console.log(Dog1);
console.log(Dog1.eat());
console.log(Dog1.isCute());
console.log(Dog1.isSuperCute());

// create a dog class using inheritance
class DogNew extends Animal {
    
}
const DogNew1 = new DogNew("tommy", 3);
console.log(DogNew1);
console.log(DogNew1.eat());
console.log(DogNew1.isCute());
console.log(DogNew1.isSuperCute());