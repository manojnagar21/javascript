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
const [user1, user2, user3] = Users;
console.log(user1);
console.log(user2);
console.log(user3);



const [{name}, , {gender: genderVar}] = Users;
console.log(name);
console.log(genderVar);

const [, , {gender}] = Users;
console.log(genderVar);


const [{name: userName, id}, , {gender: userGenderVar}] = Users;
console.log(userName);
console.log(id);
console.log(userGenderVar);