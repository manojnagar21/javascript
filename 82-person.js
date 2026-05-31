export default class Person { // only one default export allowed in one file
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info() {
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    }
}
export class Person2 { // only one default export allowed in one file
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info() {
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    }
}