const myVar = "value3";
function myApp() {
    // const myVar = "value1";
    function myFunc() {
        // const myVar = "value2"; // if commented - will be overwritten with value1
        // if that is also commented value3
        console.log("inside myFunc " + myVar);
    }
    const myFunc2 = function() {
        console.log("inside myFunc2 " + myVar);
    }
    const myFunc3 = () => {

    }
    myFunc2();
    console.log(myVar);
    myFunc();
}
myApp();