function hello() {
    console.log("Hello World");
}
hello();
// in javascript functions are also objects
// i.e. functions can be treated as functions only as well as objects
// to get function name
console.log(hello.name);
// add properties to function
hello.myOwnProperty = "property";
console.log(hello.myOwnProperty);


// functions provide us free space which is an object and that object is called as prototype
// protypes are only provided by functions
console.log(hello.prototype); // it has only one property called as constructor and it's value is same as function
if(hello.prototype) {
    console.log("yes");
} else {
    console.log("no");
}
const obj = {
    key1: "value1"
}; // objects don't have prototypes
if(obj.prototype) {
    console.log("yes");
} else {
    console.log("no");
}
const number = [1, 2, 3, 4, 5]; // arrays don't have prototypes
if(number.prototype) {
    console.log("yes");
} else {
    console.log("no");
}
hello.prototype.abc = "abc";
console.log(hello.prototype);

hello.prototype.xyz = "xyz";
console.log(hello.prototype);

hello.prototype.sing = function() {
    return "singing song";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());

// __proto__ and prototype has no connections but we can create connection between them