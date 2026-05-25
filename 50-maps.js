/*
1. map is an iterable
2. store data in ordered fashion
3. store key value pair (like objects)
4. duplicate keys are not allowed like objects
5. objects can have only string or symbol as key
6. in maps you can use anything as key like array number string
*/
// in object key is either string or symbol
const Person = {
    firstName: "Manoj",
    age: 36,
    1: "one"
};
for(let key in Person) {
    console.log(typeof key); // string string string (key 1 is considered as string)
}
console.log(Person[1]);
console.log(Person["1"]); // 1 is adjusted to the string "1"


const PersonMap = new Map();
console.log(PersonMap);
// set method is used to add key value pairs
PersonMap.set("firstName", "Manoj");
PersonMap.set("age", 36);
console.log(PersonMap);
// the difference between object and mapn is that map key can be of any type
PersonMap.set(1, "one");
console.log(PersonMap);
// access values using keys
console.log(PersonMap.firstName); // undefined
console.log(PersonMap["firstName"]); // undefined
// use get method to access values using keys
console.log(PersonMap.get("firstName"));
console.log(PersonMap.get("1")); // undefined
console.log(PersonMap.get(1)); // no quotes

// keys method is used to get all the keys in map
console.log(PersonMap.keys());

for(let key of PersonMap.keys()) {
    console.log(key);
    console.log(typeof key);
}
// array as key
PersonMap.set([1, 2, 3], "one two three");
// object literal as key
PersonMap.set({1: "one"}, "one");
console.log(PersonMap);
for(let key of PersonMap.keys()) {
    console.log(key);
    console.log(typeof key);
}


// for of loop for map (iterable) not for objects
// for in loop for objects

for(let key of PersonMap) {
    console.log(key);
    console.log(typeof key);
    console.log(Array.isArray(key));
}
for(let [key, value] of PersonMap) { // use destructure to get key value
    console.log(key);
    console.log(value);
}

const PersonNew = new Map([["firstName", "Manoj"], ["age", 36], [1, "one"]]);
console.log(PersonNew);

const Person1 = {
    id: 1,
    firstName: "Manoj"
};
const Person2 = {
    id: 2,
    firstName: "Rohan"
};
// add additional information in Person1 object but some where  also using map
const UserInfo = new Map();
UserInfo.set(Person1, {age: 36, gender: "male"}); // here key and value both are objects
console.log(UserInfo);
console.log(Person1.id);
console.log(UserInfo.get(Person1));
console.log(UserInfo.get(Person1).age);
UserInfo.set(Person2, {age: 37, gender: "male"});
console.log(UserInfo.get(Person2));
console.log(UserInfo.get(Person2).age);