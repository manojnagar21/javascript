let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// push
let length = fruits.push("orange"); // mutates array | add element after last index | returns length of the array
console.log(length);
console.log(fruits);

// pop
let poppedElement = fruits.pop(); // mutates array | remove last element | returns popped element
console.log(poppedElement);
console.log(fruits);

// unshift
length = fruits.unshift("orange"); // mutates array | add element before first index | returns length of the array
console.log(length);
console.log(fruits);

// shift
let removedElement = fruits.shift(); // mutates array | removes element from first index | returns removed element
console.log(removedElement);
console.log(fruits);

removedElement = [].shift(); // mutates array | removes element from first index | returns removed element
console.log(removedElement);
console.log(fruits);