class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static description = "static property";
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    setFullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }
    // static methods and properties can be directly called using class and not object
    static classInfo() {
        return "this is person class";
    }
}
const Person1 = new Person("Manoj", "Nagar", 36);
console.log(Person1);
console.log(Person1.eat());
// console.log(Person1.classInfo()); // error
const info = Person.classInfo();
console.log(info);
console.log(Person1.description);
console.log(Person.description);