// const child = document.querySelector(".child");
// const parent = document.querySelector(".parent");

// setTimeout(() => {
//   parent.removeChild(child);
// }, 2000);

// createElement

// const parent = document.querySelector(".parent");

// const child = document.createElement("div");
// child.className = "child";
// child.innerHTML = `<h1>Title</h1><h2>Description</h2>`;

// console.log(child);

// parent.appendChild(child);

// function handleClick() {
//   console.log("Button clicked");
// };

// const clickMe = document.querySelector(`#clickMe`);
// clickMe.onclick = handleClick;

// const body = document.querySelector("body");
// const clonedBtn = clickMe.cloneNode(true);
// clonedBtn.innerHTML = `Another btn`;
// clonedBtn.className = `clonedBtn testBtn`;
// clonedBtn.onclick = handleClick;

// body.appendChild(clonedBtn);

// const article = document.querySelector(".article"); // null
// const items = [`First item`, `Second item`, `Third item`];

// const ul = document.createElement("ul");
// if (article) article.appendChild(ul);

// const listItenFirst = document.createElement("li");
// listItenFirst.innerHTML = `First item`;
// ul.appendChild(listItenFirst);

// const listItemSecond = document.createElement("li");
// listItemSecond.innerHTML = `Second item`;
// ul.appendChild(listItemSecond);

// const listItemThird = document.createElement("li");
// listItemThird.innerHTML = `Third item`;
// ul.appendChild(listItemThird);

// items.forEach((item) => {
//   const li = document.createElement("li");
//   li.innerHTML = item;
//   li.className = "list-item";
//   li.onclick = function(){
//     console.log(item);
//   }

//   ul.appendChild(li);
// });

// ul.innerHTML = items
//   .map((item) => `<li class="list-item">${item}</li>`)
//   .join("");

// const listItems = document.querySelectorAll(".list-item");
// console.log(listItems);

// listItems.forEach(item => {
//     item.onclick = function(){
//         console.log(item.innerHTML);
//     }
// })

// const clickMe = document.querySelector("#clickMe");
// console.log(clickMe);

// const btnClick = () => console.log("Button clicked");

// clickMe.onclick = btnClick;
// clickMe.onclick = () => console.log("Another btn clicked");

// clickMe.ondblclick = function(){
//     console.log("Button double clicked");
// }

// const clickMe = document.querySelector("#clickMe");

// const btnClick = () => {
//     console.log("Button clicked");
//     clickMe.removeEventListener(`click`, btnClick);
//     clickMe.addEventListener(`click`, btnSecondClick);
// };

// const btnSecondClick = () => console.log("Second button click");

// clickMe.addEventListener(`click`, btnClick);

// clickMe.addEventListener(`click`, function () {
//   console.log("Statistics click");
// });

// clickMe.addEventListener(`click`, btnClick);

// const clickMe = document.querySelector("#clickMe");

// clickMe.addEventListener(`click`, function (event) {
//   console.log(event);
//   console.log(event.target);
// });

// clickMe.addEventListener(`keydown`, function (event) {
//   console.log(event);
// });

// const first = document.querySelector(".first");

// first.addEventListener(`click`, function (event) {
//     console.log(event);
//     console.log(event.target);

//     if(event.target === first){
//         console.log("Clicked on the first div");
//     }
// });

// const linkGoogle = document.querySelector("#linkGoogle");

// linkGoogle.addEventListener(`click`, function (event) {
//   event.preventDefault();

//   const userAnswer = confirm("Do you want to go to Google?");
//   if(userAnswer){
//     // window.location.href = "https://www.google.com";
//     window.open("https://www.google.com", "_blank");
//   }
// });

// const links = document.querySelectorAll(".link");

// links.forEach((item) => {
//   item.addEventListener(`click`, function (event) {
//     event.preventDefault();

//     // item === event.target

//     const siteName = item.innerHTML.split(" ")[2];
//     const userAnswer = confirm(`Do you want to go to ${siteName}?`);
//     if (userAnswer) {
//       window.open(item.href, "_blank");
//     }
//   });
// });

// const userForm = document.querySelector("#userForm");

// userForm.addEventListener(`submit`, function (event) {
//   event.preventDefault();

//   console.log(`Form analyzing`);
// });

// const clickMe = document.querySelector("#clickMe");

// clickMe.addEventListener(`keydown`, function (event) {
//   console.log(event);

//   if(event.key === "Tab"){
//     console.log("Tab key pressed");
//   }
// });

// document.addEventListener(`keydown`, function (event) {
//   console.log(event);
// });

// window.addEventListener(`resize`, function (event) {
//   console.log(event.type, window.innerWidth, window.innerHeight);
// });

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const body = document.querySelector("body");

body.addEventListener(`click`, function () {
  console.log("Body clicked");
});

first.addEventListener(`click`, function (event) {
  event.stopPropagation();
  console.log("First div clicked");
});

second.addEventListener(`click`, function (event) {
  event.stopPropagation();
  console.log("Second div clicked");
});

third.addEventListener(`click`, function (event) {
  event.stopPropagation();
  console.log("Third div clicked");
});
