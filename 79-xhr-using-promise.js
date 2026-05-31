const API_URL = "https://jsonplaceholder.typicode.com/todos";
function sendRequest(method, API_URL) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, API_URL);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error("something went wrong"));
            }
        }
        xhr.onerror = function() {
            reject(new Error("something went wrong"));
        }
        xhr.send();
    });
}
const response = sendRequest("GET", API_URL);
console.log(response);
response.then((res) => {
    const data = JSON.parse(res);
    return data;
}).then(data => {
    console.log(data);
    console.log(data[3]);
    console.log(data[3].id);
    const id = data[3].id;
    return id;
}).then(id => {
    console.log(id);
    const API_URL_NEW = `${API_URL}/${id}`;
    console.log(API_URL_NEW);
    return sendRequest("GET", API_URL_NEW);
}).then(newResponse => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
}).catch(error => {
    console.log(error);
})