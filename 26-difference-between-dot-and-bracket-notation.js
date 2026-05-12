const Person = {
    name: "Manoj",
    age: 36,
    // person hobbies: ["tv", "books", "pc games"], // error - spaces not allowed-without-quotes
    "person hobbies": ["tv", "books", "pc games"]
};
console.log(Person);
// console.log(Person.person hobbies); // error
console.log(Person["person hobbies"]);

const key = "email"
Person.key = "a@bcd.com"; // unexpected results - makes key as property not email
console.log(Person);
Person["key"] = "a@bcd.com"; // unexpected results - makes key as property not email
console.log(Person);
Person[key] = "a@bcd.com";
console.log(Person);