const User = {
    firstName: "Manoj",
    age: 36,
    about: function() { // using function expression
        console.log(`${this.firstName} ${this.age}`);
    }
};
User.about();
// OR
const UserNew = {
    firstName: "Manoj",
    age: 36,
    about() { // no key value pair
        console.log(`${this.firstName} ${this.age}`);
    }
};
UserNew.about();

const User1 = {
    firstName: "Manoj",
    age: 36,
    about: () => { // using arrow function
        console.log(this);
        console.log(`${this.firstName} ${this.age}`);
    }
};
User1.about(); // there is no this object in arrow function of it's own but arrow function takes this object from it's surrounding
// in this case this object is not user1 but one level up i.e. window object
// arrow functions this object cannot be changed
User1.about.call(User1);