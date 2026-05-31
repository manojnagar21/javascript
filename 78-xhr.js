const xhr = new XMLHttpRequest();
console.log(xhr);
const API_URL = "https://jsonplaceholder.typicode.com/todos";
xhr.open("GET", API_URL);
console.log(xhr.readyState);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(xhr.readyState);
        console.log(xhr.response);
        console.log(typeof xhr.response);
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(typeof data);
    }
    console.log(xhr.readyState);
}
xhr.send();
// OR
xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.readyState);
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    } else {
        console.log("something went wrong");
    }
}
xhr.onerror = () => {
    console.log("network error");
}
xhr.send();