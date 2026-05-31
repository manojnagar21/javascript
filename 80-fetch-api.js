const API_URL = "https://jsonplaceholder.typicode.com/todos";
const response = fetch(API_URL);
console.log(response);
response.then((res) => {
    console.log(res);
    // console.log(res.json());
    if(res.ok) {
        return res.json();
    } else {
        throw new Error("something went wrong");
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("inside catch");
    console.log(error);
});
// fetch rejects only in case of network related error
// in case of wrong url output is empty json {}


API_URL_POST = "https://jsonplaceholder.typicode.com/posts";
fetch(API_URL_POST, {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
}).then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("something went wrong");
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("inside catch");
    console.log(error);
});
// if wrong url and new error line commented the output is undefined
// if no error throw then no catch will run