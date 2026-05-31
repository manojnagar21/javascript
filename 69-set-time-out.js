// ------------setTimeOut-------------
// console.log("script start");
// setTimeout(() => {
//     console.log("Hello World");
// }, 1000);
// console.log("script end");


// console.log("script start");
// setTimeout(() => {
//     console.log("Hello World");
// }, 0);
// for(let i = 0; i < 100; i++) {
//     console.log(i);
// }
// console.log("script end");

// console.log("script start");
// const id = setTimeout(() => {
//     console.log("Hello World");
// }, 0);
// for(let i = 0; i < 100; i++) {
//     console.log(i);
// }
// console.log("settimeout id is " + id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script end");

// ------------setInterval-------------
// console.log("script start");
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 1000);
// console.log("script end");

console.log("script start");
const id = setInterval(() => {
    let total = 0;
    for(let i = 0; i < 1000000000; i++) {
        total = total + i;
    }
    console.log(total);
    console.log(Math.random());
    clearInterval(id);
}, 500);
console.log("script end");
console.log(id);