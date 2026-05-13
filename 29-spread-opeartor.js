const a1 = ["a", "b", "c"];
const a2 = ["c", "d", "e"];
const newArray = [...a1, ...a2];
console.log(newArray);

const new_array = [..."abcde"]; // string is iterable
console.log(new_array);