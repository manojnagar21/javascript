let a1 = ["a", "b", "c"];
let a2 = a1.slice(0).concat(["c", "d", "e"]);
console.log(a1);
console.log(a2);

let b1 = ["a", "b", "c"];
let b2 = [].concat(b1, ["c", "d", "e"]);
console.log(b1);
console.log(b2);

let c1 = ["a", "b", "c"];
let c2 = [...c1, "c", "d", "e"];
console.log(c1);
console.log(c2);

// OR

let d1 = ["a", "b", "c"];
let newAdd = ["c", "d", "e"];
let d2 = [...d1, ...newAdd];
console.log(d1);
console.log(d2);