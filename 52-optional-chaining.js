const User = {
    firstName: "Manoj",
    // address: {
    //     houseNumber: "1234"
    // }
};
console.log(User?.firstName); // if user exists (i.e. not undefined or null) then only access firstName or return undefined without proceeding for firstName
console.log(User?.address);
console.log(User?.address?.houseNumber);