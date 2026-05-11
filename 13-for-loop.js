// print number 0 to 9
for(let i = 0; i <= 9; i++) {
    console.log(i);
}
// console.log(i); // error because of let scope
// OR

let i = 0;
for(; i <= 9; i++) {
    console.log(i);
}
console.log(i);



// sum of n natural numbers
let num = 10;
let total = 0;
for(let i = 1; i <= num; i++) {
    total = total + i;
}
console.log(total);