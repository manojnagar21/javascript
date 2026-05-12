const arr = ["a", "b", "c"];
let a = arr[0];
let b = arr[1];
console.log(a);
console.log(b);

// OR

let [c, d] = arr;
console.log(c);
console.log(d);
c = "c";
console.log(c);

// using const
const [e, f] = arr;
console.log(a);
console.log(f);
// e = "e"; // error


let [g, h, i, j] = arr;
console.log(g);
console.log(h);
console.log(i);
console.log(j);

let [k, , m] = arr;
console.log(k);
console.log(m);

let newArray = arr.slice(2);
let [n, o] = arr;
console.log(n);
console.log(o);
console.log(newArray);


// OR

let [p, q, ...new_array] = arr;
console.log(p);
console.log(q);
console.log(new_array);