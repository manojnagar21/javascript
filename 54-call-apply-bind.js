// ----------call---------------
/*
1. The call() method in JavaScript lets you manually set the value of this when invoking a function
2. call() allows you to borrow the function and choose this manually.
3. call() immediately executes the function
*/
function hello() {
    console.log("Hello World");
}
hello();
hello.call();

const User1 = {
    firstName: "Manoj",
    age: 36,
    about: function() {
        console.log(this.firstName);
        console.log(this.age);
    }
};
User1.about();
const User2 = {
    firstName: "Rohan",
    age: 37
};
User1.about.call(User2); // using call method the this object can be binded to user2 object
User1.about.call();
User1.about.call(User1);

function test() {
    "use strict";
    console.log(this);
}

test();
test.call({name: "JS"});
function show() {
    console.log(this);
}
function show() {
    "use strict";
    console.log(this);
}
show.call(null);

const Person1 = {
    firstName: "Manoj",
    age: 36,
    about: function(a, b) {
        console.log(`${this.firstName} ${this.age} ${a} ${b}`);
    }
};
const Person2 = {
    firstName: "Rohan",
    age: 37
};
Person1.about.call(Person2, "Hello");
Person1.about.call(Person2, "Hello", "World");

function about(a, b) {
    console.log(`${this.firstName} ${this.age} ${a} ${b}`);
}
about.call(Person1, "Hello", "World");
about.call(Person2, "Hello", "World");

// ----------apply---------------
// same as call method the only difference is that arguments are passed in array instead of separate arguments
about.apply(Person1, ["Hello", "World"]);
about.apply(Person2, ["Hello", "World"]);

// ----------bind---------------
// bind returns a function
about.bind(Person1, "Hello", "World"); // prints nothing
about.bind(Person2, "Hello", "World"); // prints nothing
const myFunc1 = about.bind(Person1, "Hello", "World");
const myFunc2 = about.bind(Person2, "Hello", "World");
myFunc1();
myFunc2();

const UserNew = {
    firstName: "Manoj",
    age: 36,
    about: function() {
        console.log(`${this.firstName} ${this.age}`);
    }
};
UserNew.about();
const myFunc = UserNew.about;
myFunc(); // undefined undefined
const myFuncNew = UserNew.about.bind(UserNew);
myFuncNew();