const Person = {
    name: "Manoj",
    age: 36,
    "person hobbies": ["tv", "books", "pc games"]
};
console.log(Person);

// for in loop
for(let key in Person) {
    console.log(key);
    console.log(Person.key); // undefined
    console.log(Person[key]);
    console.log(`${key}: ${Person[key]}: ${typeof Person[key]}: ${Array.isArray(Person[key])}`);
    console.log(key, ":", Person[key], ":", typeof Person[key], ":", Array.isArray(Person[key]));
}


// Object.keys
console.log(Object.keys(Person));
console.log(typeof Object.keys(Person));
console.log(Array.isArray(Object.keys(Person)));
for(let key of Object.keys(Person)) {
    console.log(key);
    console.log(Person[key])
}