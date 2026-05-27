function createUser(firstName, lastName, email, age, address) {
    const User = Object.create(createUser.prototype);
    User.firstName = firstName;
    User.lastName = lastName;
    User.email = email;
    User.age = age;
    User.address = address;
    return User;
}
console.log(createUser.prototype);
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
console.log(createUser.prototype);
const User1 =  createUser("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User1);
console.log(User1.is18());
const aboutUser1 = User1.about();
console.log(aboutUser1);