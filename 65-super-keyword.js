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
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is running at speed of ${this.speed} kmph`;
    }
}
const Dog1 = new Dog("tommy", 2, 40);
console.log(Dog1);
console.log(Dog1.eat());
console.log(Dog1.isCute());
console.log(Dog1.isSuperCute());
console.log(Dog1.run());