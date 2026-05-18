const app = () => {
    const myFunc = () => {
        console.log("inside myFunc");
    }
    const addTwoNumbers = (a, b) => {
        return a + b;
    }
    const multiplyTwoNumbers = (a, b) => {
        return a * b;
    }
    console.log("inside app");
    myFunc();
    console.log(addTwoNumbers(3, 2));
    console.log(multiplyTwoNumbers(2, 10));
}
app();