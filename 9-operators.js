// typeof operator to get the data type

let age = 36;
console.log(typeof age);

let firstName = "Manoj";
console.log(typeof firstName);

// arithmetic operators
let a = 5;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
// post increment and decrement
a++;
console.log(a);
a--
console.log(a);
// pre increment and decrement
console.log(++a);
console.log(--a);


// assignment operators
let c = 5;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c *= 5;
console.log(c);
c /= 5;
console.log(c);
c *= 5;
console.log(c);
c %= 5;
console.log(c);


// logical assignment operators
let d = 5;
let e = 10;
d &&= e; // d && (d = e) // d is truthy, so d becomes e
console.log(d);
d = false;
d ||= e; // d || (d = e) // d is false, so d becomes e
console.log(d);
d = null;
d ??= e; // d && (d = e) // d is null or undefined, so d becomes e
console.log(d);


// comparison operators
let x = 5;
console.log(x);
let y = "5";
console.log(y);
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > 5);
console.log(x >= 5);
console.log(x < 5);
console.log(x <= 5);