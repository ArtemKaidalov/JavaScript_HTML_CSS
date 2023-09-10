"TASK 1"

// const commentRef = document.querySelector('#comment')

// const receiptListRef = document.querySelector('#receipt')

// const allProductsRef= receiptListRef.querySelectorAll('h3')

// const typesQuantity = allProductsRef.length
// console.log(`Thanks, for month you bought ${typesQuantity} type products.`);

// const productItemsRef = receiptListRef.querySelectorAll('.product');

// productItemsRef.forEach((item) => {
//     const productName = item.querySelector('h3').textContent;
//     const quantity = item.querySelectorAll('div p');
//     const price = [...quantity].reduce((acc, item) => {
//         return (acc += Number(item.textContent))
//     }, 0);
//         console.log(`Products ${productName} you bought ${quantity.length} time for
//  amount ${price} dollars`
//         );
// });

"TASK 2"

// const galleryItems = [
//     {
//         preview:
//             "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//         description: "Container Haulage Freight"
//     },
//     {
//         preview:
//             "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//         description: "Aerial Beach View"
//     },
//     {
//         preview:
//             "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//         description: "Flower Blooms"
//     },
// ];
// const galleryRef = document.querySelector('.gallery');

// const imagesElements = galleryItems.map(({ preview, description }) => {
//     const element = document.createElement("img");
//     element.classList.add("image");
//     element.src = preview;
//     element.width = "160";
//     element.height = "120";
//     element.alt = description;
//     return element
// });
// galleryRef.append(...imagesElements);
// galleryRef.style.display = "flex";
// galleryRef.style.gap = "20px";
// galleryRef.style.flaxDirection = "colomn";

// const markup = galleryItems.map(
//     ({ preview, description }) =>
//         `<img class="image" src="${preview}" width="160" height="120" alt=${description}>`
// ).join("");
// galleryRef.insertAdjacentHTML("beforeend", markup);

"TASK 3"

// const alertButtonRef = document.querySelector("#alertButton");
// const alertInputRef = document.querySelector(".alertInput");
// alertButtonRef.addEventListener("click", onAlertButtonClick);
// function onAlertButtonClick(event) {
//     const message = alertInputRef.value;
//     alert(message);
// };

"TASK 4"

// const swapButtonRef = document.querySelector("#swapButton");
// const leftSwapInputRef = document.querySelector(".leftSwapInput");
// const rightSwapInputRef = document.querySelector(".rightSwapInput");

// swapButtonRef.addEventListener("click", onSwapButtonClick);

// function onSwapButtonClick(event) {
//     const acc = leftSwapInputRef.value;
//     leftSwapInputRef.value = rightSwapInputRef.value;
//     rightSwapInputRef.value = acc;
// }

"TASK 5"

// const passwordInputRef = document.querySelector(".passwordInput");
// const passwordButtonRef = document.querySelector(".passwordButton");
// passwordButtonRef.addEventListener("click", onPasswordButtonClick);
// function onPasswordButtonClick(event) {
//     if (passwordInputRef.type === "text") {
//         passwordInputRef.type = "password";
//         event.target.textContent = "Show";
//         return;
//     }
//     passwordInputRef.type = "text";
//     event.target.textContent = "Hide";
// }

"TASK 6"

// const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
// const getRandomHexColor = () => {
//     return `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
// };
// const generateBtn = document.querySelector(".generateButton");
// const clearBtn = document.querySelector(".clearButton");
// const paragrafsRef = document.querySelector(".paragrafs");

// generateBtn.addEventListener("click", onGenerateButtonClick);
// clearBtn.addEventListener("click", onClearBtnClick);

// function onGenerateButtonClick(event) {
//     const quantity = getRandomNumber();
//     console.log("quantity:", quantity);
//     let markup = "";
//     for (let index = 1; index <= quantity; index++) {
//        markup = markup.concat(
//             `<p style="color: ${getRandomHexColor()}; font size: 24px">${index}</p>`
//             );
//     }
//     console.log("markup:", markup)
//     // paragrafsRef.insertAdjacentHTML("beforeend", markup);
//     paragrafsRef.innerHTML = markup;
// }
// function onClearBtnClick(event) {
//     paragrafsRef.innerHTML = "";
// };