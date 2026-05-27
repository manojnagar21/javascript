const obj1 = {
    key1: "value1",
    key2: "value2"
};
const obj2 = obj1; // both objects share same memory location
obj1.key3 = "value3";
console.log(obj1);
console.log(obj2);
// solution
const obj3 = {...obj1};
obj3.key4 = "value4";
console.log(obj1);

console.log(obj3);
// OR
const obj4 = Object.assign({}, obj1); // add obj key value pairs with empty object
obj4.key5 = "value5";
console.log(obj1);
console.log(obj4);