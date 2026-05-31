function myFunc() {
    console.log("function is doing some task 1");
}
function myFunc2() {
    console.log("function is doing some task 2");
}
// to run functions one after another - solution 1
myFunc();
myFunc2();
// to run functions one after another - solution 2
function myFunc3(callback) {
    console.log("function is doing some task 3");
    callback();
}
function myFunc4() {
    console.log("function is doing some task 4");
}
myFunc3(myFunc4);
// OR
myFunc3(function() {
    console.log("function is doing some task 4");
});
// OR
myFunc3(() => {
    console.log("function is doing some task 4");
});

function getTwoNumbers(number1, number2) {
    console.log(number1);
    console.log(number2);
}
getTwoNumbers(5, 7);

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
function getTwoNumbers2(number1, number2, onSuccess, onFailure) {
    console.log(number1);
    console.log(number2);
    if(typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    } else {
        // console.log("wrong data types");
        onFailure();
    }
}
getTwoNumbers2(5, 7, addTwoNumbers, () => {
    console.log("wrong data types");
});
// OR
getTwoNumbers2(5, 7, (number1, number2) => {
    console.log(number1 + number2);
}, () => {
    console.log("wrong data types");
});