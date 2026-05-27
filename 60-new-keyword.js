function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
const User1 = new createUser("Manoj", 36);
console.log(User1);
/*
new keyword does three tasks here
1. it creates empty object this = {} and adds key value pairs
2. returns this
3. it automatically do this object.createUser(createUser.prototype)
*/
// new keyword automatically link between __proto__ and User1
// which was earlier done manually i.e. object.createUser(createUser.prototype)
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
console.log(User1.is18());
console.log(User1.about());
// new keyword will set __proto__ value equal to prototype


// final revised code
function createUser1(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this; // returns this by it's own
}
createUser1.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}
createUser1.prototype.is18 = function() {
    return this.age >= 18;
}
const User2 =  new createUser1("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User2);
console.log(User2.is18());
const aboutUser2 = User2.about();
console.log(aboutUser2);