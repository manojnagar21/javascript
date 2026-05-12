// for loop
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);
for(let i = 0; i < fruits.length; i++) {
    console.log(i);
    console.log(fruits[i]);
}

// print fruits in upper case
for(let i = 0; i < fruits.length; i++) {
    console.log(i);
    console.log(fruits[i].toUpperCase());
}

// store upper case fruits in new array
let newFruits = [];
for(let i = 0; i < fruits.length; i++) {
    console.log(i);
    newFruits.push(fruits[i].toUpperCase());
}
console.log(newFruits);




// while loop
let i = 0;
while(i < fruits.length) {
    console.log(i);
    console.log(fruits[i]);
    i++;
}

// for of loop
for(let fruit of fruits) {
    console.log(fruit);
}

// for in loop
for(let index in fruits) {
    console.log(index);
    console.log(fruits[index]);
}