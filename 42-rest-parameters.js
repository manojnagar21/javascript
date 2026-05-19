function myApp(a, b, c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myApp(3, 4, 5);
myApp(3, 4, 5, 6, 7);


function myApp2(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c} ${typeof c} ${Array.isArray(c)}`);
    console.log(c, typeof c, Array.isArray(c));
}
myApp2(3, 4, 5);
myApp2(3, 4, 5, 6, 7);

// add all the parameters
function addAllNumbers(...numbers) {
    console.log(numbers);
    console.log(typeof numbers);
    let total = 0;
    for(let number of numbers) {
        total = total + number;
    }
    return total;
}

console.log(addAllNumbers(1, 2, 3, 4, 5));