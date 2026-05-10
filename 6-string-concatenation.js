let string1 = "Manoj";
let string2 = "Nagar";
let fullName = string1 + " " + string2;
console.log(fullName);

let s1 = 10;
let s2 = "5";
console.log(s1 + s2);
console.log(typeof(s1 + s2));
console.log(+s1 + +s2);
console.log(typeof(+s1 + +s2));


// template string
let age = 36;
let firstName = "Manoj";
let aboutMe = "My name is " + firstName + " and my age is " + age;
console.log(aboutMe);


// using template string
aboutMe = `My name is ${firstName} and my age is ${age}`;

console.log(aboutMe);