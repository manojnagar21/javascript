/*
objects store key value pairs
objects don't have index
objects are reference data type
*/
const Person = {
    name: "abc",
    name: "Manoj", // later key overwrites the value
    age: 36,
    hobbies: ["tv", "books", "pc games"]
};
console.log(Person);
console.log(typeof Person);
console.log(Person.name); // keys or properties can be accesed by dot(.) operator