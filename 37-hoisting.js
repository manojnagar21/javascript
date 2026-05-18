// this works only in case of function declaration
hello(); // works before function declaration
function hello() {
    console.log("Hello World");
}
hello();

// hello2(); // error in case of function expression with let const and var
const hello2 = function() {
    console.log("Hello World");
}




// hello2(); // error in case of function expression with let const and var
const hello3 = () => {
    console.log("Hello World");
}
// this behaviour is called as hoisting

console.log(hello4); // undefined
var hello4 = "Hello World";
console.log(hello4);

// console.log(hello5); // error
const hello5 = "Hello World";
console.log(hello5);