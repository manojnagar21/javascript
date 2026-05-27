// methods are functions inside objects
const Person = {
    firstName: "Manoj",
    age: 36,
    about: function() {
        console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
        console.log(this); // "this" is returning the same object person
    }
};
console.log(Person.firstName);
console.log(Person.about);
console.log(Person.about());

// value of this is not when we write code but when we run the code i.e. at runtime
// in above code "this" is object which is calling about: function() {}
function personInfo() {
    console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
}
const Person1 = {
    firstName: "Manoj",
    age: 36,
    about: personInfo
};
const Person2 = {
    firstName: "Rohan",
    age: 37,
    about: personInfo
};
personInfo();
console.log(personInfo);
Person1.about();
Person2.about();
console.log(this); // window object - this is javascript's global object
// OR
console.log(window);
console.log(this === window);



function myFunc() {
    console.log("Hello World");
}
myFunc();
// myFunc is added in window object
window.myFunc();
console.log(window);

function myFuncNew() {
    console.log(this);
    console.log(window);
}
window.myFuncNew();
function myFunc_New() {
    "use strict";
    console.log(this);
    console.log(window);
}
myFunc_New();
/*
Mode	Value of this inside regular function
Normal	window
Strict	undefined
*/