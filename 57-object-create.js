const obj1 = {
    k1: "v1",
    k2: "v2"
};
const obj2 = {
    k3: "v3"
}
console.log(obj1.k1);
console.log(obj2.k3);
console.log(obj2.k1);
// find a way to find k1 in obj2 i.e. obj2.k1
// if not found then find k1 in obj1 i.e, obj1.k1

// how to create empty object
// solution 1
const obj3 = {
    k1: "v1",
    k2: "v2"
};
const obj4 = {};
obj4.k3 = "v3";
console.log(obj4.k3);

// solution 2
const obj5 = Object.create(obj1);
console.log(obj5);
obj5.k3 = "v3";
console.log(obj5.k3);
console.log(obj5.k2); // if k2 not found in obj5 then find k2 in obj1
obj5.k2 = "unique";
console.log(obj5.k2); // since k2 exists in obj5 hence it won't look in obj1 for k2
console.log(obj5); // check [[prototype]] or __proto__
// check [[prototype]] or __proto__ is different from prototype
console.log(obj5.__proto__);
// in above example obj5's proto is being set equal to obj1 reference or address
// obj5.__proto__ is also called as dunder or proto chaining


// solve the problem in previous code (56)
function createUser(firstName, lastName, email, age, address) {
    const User = Object.create(userMethods);
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

const User1 =  createUser("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User1);
console.log(User1.is18());
const aboutUser1 = User1.about();
// about() and is18() are being called from __proto__ object
console.log(aboutUser1);