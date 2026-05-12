// arrays

/*
data type of array - reference type
ordered collection of elements and mutable with 0 as start index
*/

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits.length); // returns number of elements in array
console.log(fruits[0]); // access first element
console.log(fruits[fruits.length - 1]); // access last element
fruits[0] = "orange";
console.log(fruits);

// reference types are also called as objects
console.log(typeof fruits);
// to identify if object is an array
console.log(Array.isArray(fruits));


let obj = {}; // this is caleed as object literal
console.log(typeof obj);
console.log(Array.isArray(obj));