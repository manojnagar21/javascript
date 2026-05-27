// it is very tedious job to create first constructor function, then we add methods in protype of constructor
// and finally we call it via using new keyword
// in javascript class are fake, because the work done by class is internally the same by previous methods
// like creating constructor function, add methods to the prototype and call using the new keyword
// conver previous program (60) to class program
class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        this.firstName = firstName;
        this.lastNane = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        // return this; // automatic return this
    }
    // functions inside class are called as methods
    about() {
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    myFunc(a) { // parameterized function
        console.log(a);
    }
}
// using new keyword constructor will be called automatically and object will be created 
// and properties will be added in the object and methods will be added in prototype
// also user1 is object or also called as instance
const User1 =  new CreateUser("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User1);
console.log(User1.firstName);
console.log(User1.is18());
const aboutUser1 = User1.about();
console.log(aboutUser1);
console.log(Object.getPrototypeOf(User1));
User1.myFunc("Manoj");