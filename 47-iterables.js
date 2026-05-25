// things which can be applied for of loop
// i.e. string array
// string
const firstName = "Manoj";
for(let char of firstName) {
    console.log(char);
}
// array
const items = ["a", "b", "c", "d", "e"];
for(let item of items) {
    console.log(item);
}

// object is not iterable
const Users = {
    key1: "value1",
    key2: "value2"
};
for(let user of Users) {
    console.log(user);
}