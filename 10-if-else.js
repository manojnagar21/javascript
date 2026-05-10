let age = 18;
// if
if(age >= 18) {
    console.log("yes");
}


// if else
if(age >= 19) {
    console.log("yes");
} else {
    console.log("no")
}


// ternary
let result = age >= 18 ? "yes": "no";
console.log(result);



// if else if else
let temperature = 50;
if(temperature < 0) {
    console.log("cold");
} else if(temperature < 28) {
    console.log("normal");
} else {
    console.log("hot");
}