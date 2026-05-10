// trim method removes white spaces from start and end of the string

let firstName = "  Manoj  ";
firstName.trim();
console.log(firstName); // no change because strings are immutable in JavaScript
console.log(firstName.length);

let newString = firstName.trim();
console.log(newString);
console.log(newString.length);

// OR

firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

// toUpperCase method returns new string with letters in capital case

console.log(firstName.toUpperCase());

// toLowerCase method returns new string with letters in capital case

console.log(firstName.toLowerCase());

// slice(startIndex, endIndex)

newString = firstName.slice(0, 3); // endIndex = 3 - 1 = 2

console.log(newString);

newString = firstName.slice(1); // startIndex = 1 endIndex = length - 1
console.log(newString);

newString = firstName.slice(undefined, 1); // startIndex = 0 endIndex = 1 - 1 = 0
console.log(newString);