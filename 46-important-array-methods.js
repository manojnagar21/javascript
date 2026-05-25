const numbers = [4, 2, 5, 8];
// multiply each element by 2
function multiplyByTwo(number, index) {
    console.log("index is ", index);
    console.log("multiplication is ", number * 2);
}
multiplyByTwo(numbers[0], 0);
multiplyByTwo(numbers[1], 1);
multiplyByTwo(numbers[2], 2);
multiplyByTwo(numbers[3], 3);

// OR

for(let i = 0; i < numbers.length; i++) {
    console.log("index is ", i);
    console.log("multiplication is ", numbers[i] * 2);
}

// OR

for(let i = 0; i < numbers.length; i++) {
    multiplyByTwo(numbers[i], i);
}


// -------------forEach----------------------
// forEach function takes argument as function or callback
// it passes elements and it's index

numbers.forEach((number, index) => {
    console.log("index is ", index);
    console.log("multiplication is ", number * 2); 
});

// OR

numbers.forEach((number) => { // index can be ignored
    // console.log("index is ", index);
    console.log("multiplication is ", number * 2); 
});

const Users = [
    {
        firstName: "Manoj",
        age: 36
    },
    {
        firstName: "Rohan",
        age: 37
    }
]
// print first name of each user
Users.forEach((user, index) => {
    console.log(index);
    console.log(user.firstName);
})

// OR

for(let user of Users) {
    console.log(user.firstName);
}



// -------------map----------------------
// takes input as callback function
// callback function always returns
// map method always creates a new array
const square = function(number) {
    return number * number;
}
const squareNew = function(number) {
    console.log(number * number);
}
numbers.map(square); // no output
let squareNumbers = numbers.map(square);
console.log(squareNumbers);

squareNumbers = numbers.map(squareNew); // if nothing is returned in callback function then undefined is returned
// hence it is crucial to return in callback function
console.log(squareNumbers);

squareNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squareNumbers);

squareNumbers = numbers.map((number) => {
    return number * number;
});
console.log(squareNumbers);


// index can be included in arrow function, function declaration and expression
squareNumbers = numbers.map((number, index) => {
    return `index: ${index}, ${number * number}`;
});
console.log(squareNumbers);


// create an array of first names of users
const uesrNames = Users.map((user) => {
    return user.firstName;
});
console.log(uesrNames);


// -------------filter----------------------
// print all odd numbers
const isEven = function(number) {
    return number % 2 === 0;
}
// filters callback method should always return boolean value true or false
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
const oddNumbers = numbers.filter((number) => {
    return number % 2 === 1;
});
console.log(oddNumbers);


// -------------reduce----------------------
// sum of all numbers in array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // intital value of accumulator optional
console.log(sum);


const UserCart = [
    {
        productId: 1,
        productName: "mobile",
        price: 12000
    },
    {
        productId: 2,
        productName: "laptop",
        price: 22000
    }
];
// sum of all prices in array
const total = UserCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);
console.log(total);

// -------------sort----------------------
// sort method mutates the array
const numbersNew = [5, 9, 1200, 400, 3000];
numbersNew.sort();
console.log(numbersNew);
// because javascript sorts by considering elements as string
// ascii codes
/*
"5"     - 53
"9"     - 57
"1200"  - 49
"400"   - 52
"3000"  - 51
*/


numbers.sort((a, b) => {
    return a - b; // ascending order
});
console.log(numbers);
// OR
numbers.sort((a, b) => a - b); // ascending order;
console.log(numbers);
numbersNew.sort((a, b) => a - b); // ascending order;
console.log(numbersNew);
numbersNew.sort((a, b) => b - a); // descending order;
console.log(numbersNew);
const userNames = ["manoj", "rohan", "sohan", "mohan"];
userNames.sort();
console.log(userNames);

const Products = [
    {
        productId: 1,
        productName: "p1",
        price: 300
    },
    {
        productId: 2,
        productName: "p2",
        price: 500
    }
];
// price low to high by mutating the array
Products.sort((a, b) => {
    return a.price - b.price;
});
console.log(Products);

// price low to high by cloning the array
const lowToHigh = Products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

// -------------find----------------------
// find the first occurence
const myArray = ["Hello", "cat", "dog", "lion"];
// find first occurence in array with three as string length
const answer = myArray.find(isLengthThree);
function isLengthThree(string) {
    return string.length === 3;
}
console.log(answer);

const UsersNew = [
    {
        userId: 1,
        userName: "Rohan",
    },
    {
        userId: 2,
        userName: "Sohan",
    },
    {
        userId: 3,
        userName: "Mohan",
    }
];
// find user with three as id
const result = UsersNew.find((user) => {
    return user.userId === 3;
});
console.log(result);

// -------------every----------------------
// callback function returns true or false
// every method returns true if all are callbacks are true or false
const nums = [2, 4, 6, 8, 10];
// check if all elements in array are even
const isAllNumbersEven = nums.every((num) => {
    return num % 2 === 0;
});
console.log(isAllNumbersEven);

// check if all prices in user cart array are less than 30000
const priceLower = UserCart.every((cartItem) => {
    return cartItem.price < 30000;
});
console.log(priceLower);

// -------------some----------------------
// callback function returns true or false
// some method returns true if atleast one callback is true or false
// check if at least one elements in array is even
const atLeastOneEven = nums.some((num) => {
    return num % 2 === 0;
});
console.log(atLeastOneEven);

// check if at least one product prices in user cart array is less than 15000
const atLeastPriceLower = UserCart.some((cartItem) => {
    return cartItem.price < 30000;
});
console.log(atLeastPriceLower);


// -------------fill----------------------
// mutates the original array
const arrayOfOnes = new Array(10).fill(1);
console.log(arrayOfOnes);
arrayOfOnes.fill(0, 2, 5);
console.log(arrayOfOnes);

// -------------splice----------------------
// mutates the original array
// start delete insert
const stringArray = ["a", "b", "c"];
// delete
const deleted = stringArray.splice(1, 1);
console.log(stringArray);
console.log(deleted);
// insert
const inserted = stringArray.splice(1, 0, "d");
console.log(stringArray);
// insert and delete
const insertedAndDeleted = stringArray.splice(1, 2, "d", "e");
console.log(stringArray);
console.log(insertedAndDeleted);