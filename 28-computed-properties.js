const key1 = "object key 1";
const key2 = "object key 2";
const value1 = "my value 1";
const value2 = "my value 2";

const obj = {
    key1: value1,
    key2: value2
};
console.log(obj); // unexpected output

const obj1 = {
    [key1]: value1,
    [key2]: value2
};
console.log(obj1);

// OR



const obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;
console.log(obj2);