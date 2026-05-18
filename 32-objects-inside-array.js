const Users = [
    {
        id: 1,
        name: "Manoj",
        gender: "male"
    },
    {
        id: 2,
        name: "Rohan",
        gender: "male"
    },
    {
        id: 1,
        name: "Sohan",
        gender: "male"
    }
];
console.log(Users);
for(let user of Users) {
    console.log(user);
    console.log(user.id);
    console.log(user.name);
    console.log(user.gender);
}