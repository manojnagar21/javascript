const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//     heading1.textContent = "Heading1";
//     heading1.style.color = "green";
//     setTimeout(() => {
//         heading2.textContent = "Heading2";
//         heading2.style.color = "red";
//         setTimeout(() => {
//             heading3.textContent = "Heading3";
//             heading3.style.color = "blue";
//             setTimeout(() => {
//                 heading4.textContent = "Heading4";
//                 heading4.style.color = "purple";
//                 setTimeout(() => {
//                     heading5.textContent = "Heading5";
//                     heading5.style.color = "pink";
//                     setTimeout(() => {
//                         heading6.textContent = "Heading6";
//                         heading6.style.color = "violet";
//                         setTimeout(() => {
//                             heading7.textContent = "Heading7";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

function changeText(element, text, color, time, onSuccess, onFailure) {
    setTimeout(() => {
        if(element) {
            element.textContent = text;
            element.style.color = color;
            if(onSuccess) {
                onSuccess();
            }
        } else {
            // console.log("element does not exists");
            if(onFailure) {
                onFailure();
            }
        }
    }, time);
}
changeText(heading1, "one", "green", 1000, () => {
    console.log("Hello World");
    changeText(heading2, "two", "red", 2000, () => {
        console.log("Hello World");
        changeText(heading3, "three", "blue", 2000, () => {
            console.log("Hello World");
            changeText(heading4, "four", "purple", 1000, () => {
                console.log("Hello World");
                changeText(heading5, "five", "pink", 2000, () => {
                    console.log("Hello World");
                    changeText(heading6, "six", "violet", 3000, () => {
                        console.log("Hello World");
                        changeText(heading7, "seven", "brown", 1000, () => {
                            console.log("Hello World");
                        }, () => {
                            console.log("element does not exists");
                        });
                    }, () => {
                        console.log("element does not exists");
                    });
                }, () => {
                    console.log("element does not exists");
                });
            }, () => {
                console.log("element does not exists");
            });
        }, () => {
            console.log("element does not exists");
        });
    }, () => {
        console.log("element does not exists");
    });
}, () => {
    console.log("element does not exists");
});