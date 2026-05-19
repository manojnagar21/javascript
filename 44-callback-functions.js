function myFunc(a) {
    console.log("Hello World");
    console.log(a);
    a();
}
// myFunc([1, 2, 3, 4, 5]);
// myFunc("abcde");
// myFunc({"name": "Manoj"})
// a can be anything - array number string object function

function myFunc2() {
    console.log("inside myFunc2");
}

// myFunc(myFunc2());
myFunc(myFunc2); // it is called as callback function

function greet(name) {
    console.log("inside greet");
    console.log(`Hello ${name}`);
}
function main(callback) {
    callback();
    callback("Manoj");
}
main(greet);