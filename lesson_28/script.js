// const numbers = [10, -10, -20, 17, 5];

// const positiveNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         positiveNumbers.push(numbers[i]);
//     }
// }

// const positiveNumbers = numbers
//     .filter(function(item, index, arr){
//         return item>0
//     })

// const positiveNumbers = numbers.filter((item) => item > 0);
// console.log(positiveNumbers);

// const numbers = [10, -10, -20, 17, 5];

// const isEveryPositive = numbers.every(item => item>0);
// const isSomePositive = numbers.some(item => item>0);

// console.log(isEveryPositive); // false
// console.log(isSomePositive); // true

// map, filter
// forEach
// every, some

// filter.map.forEach

// const numbers = [10, -10, -20, 17, 5];

// const positiveSquares = numbers
//     .filter(item => item>0)
//     .map(item => Math.pow(item, 2));

// const numbers = [10, -10, -20, 17, 5];

// let sum = 0;

// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);

// const sum = numbers.reduce(
//     function(result, item, index, arr){
//         return result + item;
//     }, 0);

// const sum = numbers.reduce((result, item) => result + item, 0);
// console.log(sum);

// const data = [10, 20, -10].filter(item => item>0).map(item => Math.pow(item, 2));
// const html = `hello ${10+20} ${data.join(', ')}`;

// const now = new Date();
// console.log(now);

// const year = now.getFullYear();
// console.log(year);

// console.log("Script started");

// setTimeout(() => {
//   console.log("Hello after 1 second"); // async
// }, 0);

// console.log("Script ended");

// for(){...}

// console.log(window);

// window.open();

// DOM

// const button = document.getElementById("openExample");
// console.log(button);

// setTimeout(() => {
//   button.innerHTML = `New text`;
// }, 3000);

// const linkToGoogle = document.getElementById("linkToGoogle");
// console.log(linkToGoogle);

// linkToGoogle.href = "https://ithillel.ua/";

// const menuItemsCollection = document.getElementsByClassName("menu__item");
// console.log(menuItemsCollection);

// const menuItems = [...menuItemsCollection];
// console.log(menuItems);
// menuItems.forEach((item) => console.log(item));

// const liItemsCollection = document.getElementsByTagName(`li`);
// console.log(liItemsCollection);

// const button = document.querySelector(`#openExample`);
// console.log(button);

// const li = document.querySelector(`.menu__item`);
// console.log(li);

// const liItems = document.querySelectorAll(`.menu__item`);
// console.log(liItems);

// const menuItems = document.querySelectorAll(`#menu .menu__item`);
// console.log(menuItems);

// const navigationItems = document.querySelectorAll(`#navigation .menu__item`);
// console.log(navigationItems);

// const googleLinks = document.querySelectorAll(`a[href="https://google.com"]`); // []
// console.log(googleLinks);

// googleLinks.forEach((item) => {
//   item.innerHTML = `<i>Google UA</i>`;
//   item.href = "https://google.com.ua/";
// });

// const openExample = document.querySelector("#openExample"); // null
// console.log(openExample);

// if(openExample){
//   openExample.innerHTML = `New text`;
// }

// const paragraphText = document.querySelector(`.text`);
// console.log(paragraphText);
// console.log(paragraphText.className); // "text highlight"

// setTimeout(() => {
//   paragraphText.className = paragraphText.className.replace(`highlight`, ``); // "text "
// }, 3000);

// setTimeout(() => {
//   paragraphText.className = `${paragraphText.className} secondary`;
// }, 4000);

// console.log(paragraphText.classList);

// setTimeout(() => {
//   paragraphText.classList.remove(`highlight`);
// }, 3000);

// setTimeout(() => {
//   paragraphText.classList.add(`secondary`);
// }, 4000);

// // toggle
// setTimeout(() => {
//   paragraphText.classList.toggle(`highlight`);
// }, 5000);

// setTimeout(() => {
//   paragraphText.classList.toggle(`highlight`);
// }, 6000);

// const isHighlighted = paragraphText.classList.contains(`highlight`);

// if(isHighlighted){
//     paragraphText.classList.remove(`highlight`);
// }

const parent = document.querySelector(`#parent`);
const removingParagraph = document.querySelector(`#removing`);

setTimeout(() => {
  parent.removeChild(removingParagraph);
}, 2000);
