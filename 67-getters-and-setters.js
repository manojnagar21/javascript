class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // fullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // set firstName and lastName from fullName
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setFullName(fullName) {
        const [a, b] = fullName.split(" ");
        this.firstName = a;
        this.lastName = b;
    }
}
const Person1 = new Person("Manoj", "Nagar", 36);
console.log(Person1);

// console.log(Person1.fullName()); // for calling methods we need parenthesis
console.log(Person1.fullName); // it prints function
// but if we want to use method as property i.e. console.log(Person1.fullName);
console.log(Person1.firstName); // for calling properties we don't need parenthesis
// solution - just add keyword get in front of method
console.log(Person1.fullName); // now fullName is treated as a property
console.log(Person1.firstName);
console.log(Person1.lastName);
// to change firstName and lastName after creating object use setName method
Person1.setName("Rohan", "Sharma");
console.log(Person1.firstName);
console.log(Person1.lastName);
// OR
Person1.firstName = "Manoj";
Person1.lastName = "Nagar";
console.log(Person1.firstName);
console.log(Person1.lastName);
// using fullName property to change firstName and lastName
// i.e. Person1.fullName = "Rohan Sharma";
console.log(Person1);
console.log(Person1.fullName);
const Person2 = new Person("Rohan", "Sharma", 36);
console.log(Person2);
Person2.fullName = "Manoj Nagar";
console.log(Person2.fullName);
Person2.setFullName(Person2.fullName);
Person2.setFullName("Manoj Nagar");
console.log(Person2.fullName);
console.log(Person2);