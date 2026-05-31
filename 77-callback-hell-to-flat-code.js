const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
function changeText(element, text, color, time, onSuccess, onFailure) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element) {
                element.textContent = text;
                element.style.color = color;
                resolve("done");
            } else {
                // console.log("element does not exists");
                reject("element not found");
            }
        }, time);
    });
}
const returnedPromise = changeText(heading1, "one", "green", 1000);
returnedPromise.then((data) => {
    console.log(data);
    return changeText(heading2, "two", "red", 2000);
}).then((data) => {
    console.log(data);
    return changeText(heading3, "three", "blue", 2000);
}).then((data) => {
    console.log(data);
    return changeText(heading4, "four", "purple", 1000);
}).then((data) => {
    console.log(data);
    return changeText(heading5, "five", "pink", 2000);
}).then((data) => {
    console.log(data);
    return changeText(heading6, "six", "violet", 3000);
}).then((data) => {
    console.log(data);
    return changeText(heading7, "seven", "brown", 1000);
}).catch((error) => {
    console.log(error);
});