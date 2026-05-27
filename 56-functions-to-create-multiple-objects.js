const User = {
    firstName: "Manoj",
    lastName: "Nagar",
    email: "manojnagar21@gmail.com",
    age: 36,
    address: "Mumbai",
    about: function() {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function() {
        return this.age >= 18;
    }
};
const a = User.about();
console.log(a);

// Q 1) how to make more objects with different properties
// answer :-    1. function that creates objects
//              2. add key value pairs
//              3. return that object
function createUser(firstName, lastName, email, age, address) {
    const User = {};
    User.firstName = firstName;
    User.lastName = lastName;
    User.email = email;
    User.age = age;
    User.address = address;
    User.about = function() {
        return `${this.firstName} is ${this.age} years old`;
    }
    User.is18 = function() {
        return this.age >= 18;
    }
    return User;
}
const User1 =  createUser("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User1);
console.log(User1.is18());
const aboutUser1 = User1.about();
console.log(aboutUser1);

// limitations
/*
every time creating new user will create two methods about() and is18() and keeps on storing in memory
but these method definitions are same for every user created
*/

// revised code
function createUser1(firstName, lastName, email, age, address) {
    const User = {};
    User.firstName = firstName;
    User.lastName = lastName;
    User.email = email;
    User.age = age;
    User.address = address;
    User.about = userMethods.about; // methods are stored separately and only reference is being sent in create user function
    User.is18 = userMethods.is18; // problem - but method must exist in user methods object before assigning here
    return User;
}
const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function() {
        return this.age >= 18;
    }
}
const User2 =  createUser("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User2);
console.log(User2.is18());
const aboutUser2 = User2.about();
console.log(aboutUser2);