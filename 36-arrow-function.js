const myFunc = () => {
    console.log("Hello World");
}
myFunc();

const addTwoNumbers = (a, b) => {
    return a + b;
}
console.log(addTwoNumbers(2, 10));

// check if number is even
// const isEven = (number) => {
//     return number % 2 === 0;
// }
// OR
// const isEven = number => { // if one parameter only present
//     return number % 2 === 0;
// }
// OR
const isEven = number => number % 2 === 0; // if one line in function
console.log(isEven(12));