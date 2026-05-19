// let and const are block scope
// var is function scope
/*
block - {

}
*/
{
    let firstName = "Manoj";
    console.log(firstName);
}
// console.log(firstName); // error

{
    let firstName = "Rohan";
    console.log(firstName);
}
// both variable firstName can exists in different blocks
let firstName = "Sohan";
console.log(firstName);

{
    var first_name = "Mohan";
}
console.log(first_name);
{
    var first_name = "Rahul";
    console.log(first_name);
}
{
    var first_name = "Suresh";
    console.log(first_name);
}
let fName = "Manoj";
function myApp() {
    if(true) {
        let fName = "Rohan";
        console.log(fName);
    }
    console.log(fName);
}
myApp();

function myApp2() {
    if(true) {
        var fName = "Rohan";
        console.log(fName);
    }
    console.log(fName);
}
myApp2();

function myApp3() {
    if(true) {
        var fName = "Rohan";
        console.log(fName);
    }
    if(true) {
        console.log(fName);
    }
    console.log(fName);
}
myApp3();