function add(a, b) {
    return a + b;
}
const result = add(2, 10);
console.log(result);
console.log(add(2));

// set default value of b
function add2(a, b) {
    if(typeof b === "undefined") {
        b = 1;
    }
    return a + b;
}
console.log(add2(2, 10));
console.log(add2(2));

function add(a, b = 1) {
    return a + b;
}
console.log(add2(2, 10));
console.log(add2(2));