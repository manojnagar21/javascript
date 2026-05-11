for(let i = 1; i <= 10; i++) {
    if(i === 2) {
        break;
    }
    console.log(i);
}
console.log("end");


for(let i = 1; i <= 10; i++) {
    if(i === 2) {
        continue;
    }
    console.log(i);
}
console.log("end");