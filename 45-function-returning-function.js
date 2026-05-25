function myFunc() {
    return "a";
    return {"name": "Manoj", age: 36};
    return [1, 2, 3, 4, 5];
    return 5;
}

let answer = myFunc();
console.log(answer);




function myFunc2() {
    function hello() {
        console.log("Hello World");
    }
    return hello;
}
answer = myFunc2();
console.log(answer());
answer();



function myFunc3() {
    // function hello() {
    //     return "Hello World";
    // }
    // return hello;
    // OR
    return function() {
        return "Hello World";
    }
    return hello;
}
answer = myFunc3();
console.log(answer);
console.log(answer());
answer();