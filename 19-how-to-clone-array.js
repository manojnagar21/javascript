let a1 = ["a", "b", "c"];
let a2 = a1;
console.log(a1);
console.log(a2);
console.log(a1 === a2);
console.log(a1 == a2);

// create different arrays in heap memory with different memory addresses with having different pointers in stack memory
let b1 = ["a", "b", "c"];
let b2 = ["a", "b", "c"];
console.log(b1);
console.log(b2);
console.log(b1 === b2);
console.log(b1 == b2);

// create different arrays in heap memory with different memory addresses with having different pointers in stack memory
let c1 = ["a", "b", "c"];
let c2 = c1.slice(0); // 0 to end
console.log(c1);
console.log(c2);
console.log(c1 === c2);
console.log(c1 == c2);

// create different arrays in heap memory with different memory addresses with having different pointers in stack memory
let d1 = ["a", "b", "c"];
let d2 = [].concat(d1);
console.log(d1);
console.log(d2);
console.log(d1 === d2);
console.log(d1 == d2);

let e1 = ["a", "b", "c"];
let e2 = [...e1]; // spraed operator
console.log(e1);
console.log(e2);
console.log(e1 === e2);
console.log(e1 == e2);


// fast - slice method
// popular - rest operator