const Person = {
    firstName: "Manoj",
    gender: "male"
}
function getDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.age);
}
getDetails(Person);

// with parameter destructuring

function getDetails2({firstName, gender}) {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
getDetails(Person)