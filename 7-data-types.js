// Primitive data types
/*
    1. string i.e. "Manoj"
    2. number i.e. 2, 4, 5.6
    3. booleans i.e true, false
    4. undefined
    5. null
    6. BigInt
    7. Symbol
*/

// number

let age = 36;
console.log(typeof age);

// string

let firstName = "Manoj";
console.log(typeof firstName);

// convert number to string

console.log(age + "");
console.log(typeof (age + ""));

// OR

age = String(age);
console.log(typeof age);

// convert string to number

let myString = "36";
myString = +myString;
console.log(typeof myString);

// OR

age = Number(age);
console.log(typeof age);


// undefined
let f_Name;
console.log(typeof f_Name);

// const some_variable; // error

// null

let myVar = null;
console.log(myVar);
console.log(typeof myVar);


// BigInt
let myNum = 123;
console.log(myNum);
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(123456789012345678);
// OR
myNumber = BigInt(123);
// OR
myNumber = 123n
console.log(myNumber);
console.log(BigInt(123) + 12n);
// console.log(BigInt(123) + 12); // 

// booleans
let isNumber = true;
console.log(isNumber);
let isString = false;
console.log(isString);