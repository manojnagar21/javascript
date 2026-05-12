const Person = {
    name: "Manoj",
    age: 36,
    hobbies: ["tv", "books", "pc games"]
};
console.log(Person);
Person.gender = "male";
console.log(Person);
console.log(Person["name"]); // keys or properties can be accesed by [] square brackets


// by default keys are stores as string
const PersonNew = {
    "name": "Manoj",
    "age": 36,
    "hobbies": ["tv", "books", "pc games"]
};
console.log(Person);
console.log(Person["name"]);