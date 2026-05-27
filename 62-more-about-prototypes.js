let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.fill(1, 2, 4));
// these methods are not from arrays as we have not created these methods
// but these methods are being retrieved from prototype
// prototype is only available for functions
// but let numbers = [1, 2, 3, 4, 5]; doesn't seems to be a function
// answer - internally javascript creates array like this
// let numbers = new Array(1, 2, 3, 4, 5);
// here Array is a constructor function
let numbersNew = new Array(1, 2, 3, 4, 5);
console.log(numbersNew);
console.log(numbersNew.fill(1, 2, 4));
// the output of both looks like array but prototype is an object
// reason - arrays in javascript are also objects
console.log(Array.prototype); // for let numbersNew = new Array(1, 2, 3, 4, 5);
console.log(Object.getPrototypeOf(numbers)); // for let numbers = [1, 2, 3, 4, 5];

function hello() {
    console.log("Hello World");
}
// the output of function hello prototype is an object
// but for Array.prototype or Object.getPrototypeOf(numbers) the prototype is an array
console.log(hello.prototype);
console.log(Array.isArray(Array.prototype));
console.log(Array.isArray(hello.prototype));

// we can change the prototype
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);