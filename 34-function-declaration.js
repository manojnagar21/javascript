function print() {
    console.log("Hello World");
}
print();

function addNumbers() {
    return 2 + 10;
}
console.log(addNumbers());
// OR
let result = addNumbers();
console.log(result);

function addTwoNumbers(a, b) {
    return a + b;
}
result = addTwoNumbers(2, 10);
console.log(result);
console.log(addTwoNumbers()); // a = undefined b = undefined
console.log(undefined + undefined);
console.log(addTwoNumbers(2)); // a = 2 b = undefined
console.log(2 + undefined);



// find if number is even
/**
 * 
 * @param {*} number 
 * @returns boolean
 */
function isEven(number) {
    // if(number % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // OR
    // if(number % 2 === 0) {
    //     return true;
    // }
    // return false;
    // OR
    return number % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(9));


// get first character of string
/**
 * 
 * @param {*} string 
 * @returns string
 */
function firstCharacter(text) {
    return text[0];
}
console.log(firstCharacter("abc"));
console.log(firstCharacter("xyz"));


// find if number is present in array
/**
 * 
 * @param {*} array 
 * @returns index number
 */
function findTarget(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(findTarget([1, 2, 3, 4, 5], 5));