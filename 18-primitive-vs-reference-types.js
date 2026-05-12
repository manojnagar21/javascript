// primitive data types
/*
creates another memory location
stores in stack memory
*/
let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2);

// reference data types
/*
creates same memory location
stores in heap memory
*/
// arrays a1 is stored in heap memory
// but pointer(ptr1) holding it's address is stored in stack memory
let a1 = ["a", "b", "c"];
let a2 = a1; // creates pointer(ptr2) in stack memory holding address of a1 array in heap memory
console.log(a1);
console.log(a2);
a1.push("d");
console.log(a1); // print from it's address
console.log(a2); // print from same above address