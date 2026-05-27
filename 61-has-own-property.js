function createUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this; // returns this by it's own
}
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
const User1 =  new createUser("Manoj", "Nagar", "manojnagar21@gmail.com", 37, "Mumbai");
console.log(User1);
console.log(User1.is18());
const aboutUser1 = User1.about();
console.log(aboutUser1);
// to print all the keys in user1
for(let key in User1) {
    console.log(key); // it also prints the keys from prototype
}
// to avoid prototype keys
for(let key in User1) {
    if(User1.hasOwnProperty(key)) {
        console.log(key);
    }
}