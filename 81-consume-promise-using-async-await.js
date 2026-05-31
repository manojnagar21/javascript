const API_URL = "https://jsonplaceholder.typicode.com/todos";
async function getPosts() { // by default returns promise
    const response = await fetch(API_URL);
    console.log(response);
    if(!response.ok) {
        throw new Error("something went wrong");
    }
    const data = await response.json();
    console.log(data);
    return data;
}
const returned = getPosts();
console.log(returned);
getPosts().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("inside catch");
    console.log(error);
})