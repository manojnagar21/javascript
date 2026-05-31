const myPromise = Promise.resolve(5);
myPromise.then((value) => {
    console.log(value);
});
// OR
Promise.resolve(5).then((value) => {
    console.log(value);
});
// then method always returns a promise
function myPromise2() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
}
myPromise2().then((value) => {
    console.log(value);
    value = value + "bar";
    // return value;
    // OR
    return Promise.resolve(value);
}).then((val) => {
    console.log(val);
});