const obj1 = {
    key1: "value1",
    key2: "value2"
};
const obj2 = {
    key3: "value3",
    key4: "value4"
};
console.log(obj1);
console.log(obj2);
const objA = {...obj1, ...obj2};
console.log(objA);

const objNew = {
    key3: "value3",
    key4: "value4",
    key1: "valueUnique"
};
const objB = {...obj1, ...objNew};
console.log(objB);

const objC = {...obj1, ...obj2, key5: "value"};
console.log(objC);

const objD = {..."abcde"};
console.log(objD);

const objE = {...["a", "b", "c", "d", "e"]};
console.log(objE);