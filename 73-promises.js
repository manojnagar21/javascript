const bucket = ["coffee", "chips", "vegetables", "rice", "salt"];
const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")) {
        resolve({value: "fried rice"});
    } else {
        reject(new Error("couldn't do it"));
    }
});
friedRicePromise.then((myFriedRice) => {
    console.log("let's eat " + myFriedRice);
}, (error) => {
    console.log(error);
});
// OR
console.log("script start");
friedRicePromise.then((myFriedRice) => {
    console.log("let's eat " + myFriedRice);
}).catch((error) => {
    console.log(error);
});
setTimeout(() => {
    console.log("Hello World");
}, 0);
for(let i = 0; i <= 100; i++) {
    console.log(Math.random(), i);
}
console.log("script end");