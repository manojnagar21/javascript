function ricePromise() {
    const bucket = ["coffee", "chips", "vegetables", "rice", "salt"];
    const friedRicePromise = new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")) {
            resolve({value: "fried rice"});
        } else {
            reject(new Error("couldn't do it"));
        }
    });
    return friedRicePromise;
}
ricePromise().then((myFriedRice) => {
    console.log("let's eat " + myFriedRice);
}).catch((error) => {
    console.log(error);
});