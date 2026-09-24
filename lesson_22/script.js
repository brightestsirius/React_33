// function userCard(name, yearOfBirth, animal, country = `Ukraine`) {
//   let nameInfo = name ? `My name is ${name}.` : ``,
//     ageInfo = yearOfBirth ? `I'm ${getAge(yearOfBirth)} years old.` : ``,
//     animalInfo = animal ? `I have a/an ${animal}.` : ``,
//     countryInfo = `I live in ${country}.`;

//   return `${nameInfo} ${ageInfo} ${animalInfo} ${countryInfo}`;
// }

// function getAge(yearOfBirth) {
//   let currentYear = new Date().getFullYear(),
//     age = currentYear - Number(yearOfBirth);
//   return age;
// }

// let OlehInfo = userCard(`Oleh`, 1990, `dog`);
// console.log(OlehInfo);

// function printArguments() {
//   console.log(arguments);

//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// printArguments("Hello", "World", "!");

// function doHomework(subject, cb) {
//   console.log(`Починаємо робити домашнє завдання з ${subject}.`);
//   cb();
// }

// doHomework("математики", function () {
//   console.log("Домашнє завдання завершено!");
// });

// function finishHomework() {
//   console.log("Finally!");
// }

// doHomework("фізики", finishHomework);

// function washDishes(callback, timer) {
//   console.log(`Початок миття посуду - закінчення через ${timer}s.`);

//   setTimeout(() => {
//     callback();
//   }, timer);
// }

// washDishes(function () {
//   console.log("Посуд вимито!");
// }, 3000);

// washDishes(function () {
//   console.log("Посуд НЕ вимито!");
// }, 2000);

// function createGreeting(greeting) {
//     return function(name) {
//         return greeting + ', ' + name + '!';
//     };
// }

// let greetHello = createGreeting('Hello'); // fn => greeting=Hello
// let greetHi = createGreeting('Hi');

// console.log(greetHello('Alice'));
// console.log(greetHello('Oleg'));

// console.log(greetHi('Bob'));
// console.log(greetHi('Taras'));

// function showPrivateVariable() {
//     var privateVar = "Я приватна змінна";
//     console.log(privateVar); // Виведе: "Я приватна змінна"
// }

// showPrivateVariable();

// (function () {
//     var privateVar = "Я приватна змінна";
//     console.log(privateVar); // Виведе: "Я приватна змінна"
// })();

// function repeat(n, action) {
//     for (var i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(3, console.log);

// function redirectToDashboard(){
//     console.log(`Redirect to dashboard`);
// }

// function redirectToLogin(){
//     console.log(`Redirect to login page`);
// }

// function isLogin(username){
//     username ? redirectToDashboard() : redirectToLogin();
// }

// isLogin(``);

// function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// let addToOne = add(1);

// console.log(addToOne(2));
// console.log(addToOne(3));

// console.log(sum(5, 5)); // Виведе: 10

// function sum(a, b) {
//     return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(10, 20));

// function createCounter() {
//     let count = 0; // Приватна змінна, доступна лише всередині createCounter

//     return function() {
//         count += 1; // Модифікуємо і повертаємо змінну count
//         return count;
//     };
// }

// var counter = createCounter(); // fn = 0

// console.log(counter()); // count=1
// console.log(counter()); // count=2
// console.log(counter()); // count=3

// function createHistory() {
//     let surname = "Sheva"; // Приватна змінна, доступна лише всередині createCounter

//     return function(name) {
//         surname += ` ${name}`; // Модифікуємо і повертаємо змінну count
//         return surname;
//     };
// }

// var historyUkraine = createHistory(); // fn = 0

// console.log(historyUkraine("Konovalets")); // surname=Sheva Konovalets
// console.log(historyUkraine("Shuhevutch")); // surname=Sheva Konovalets Shuhevutch

// function demoLet() {
//   let x = 10, y = 30;

//   if (true) {
//     let x = 20; // Це інша 'x', оскільки 'let' обмежує область видимості блоком
//     y += 2;
//     console.log(x, y); // Виведе: 20
//   }

//   console.log(x, y); // Виведе: 10, оскільки змінна 'x', оголошена всередині блоку if, тут не доступна
// }

// demoLet();

// let sum = 0;

// for(let i=0; i<10; i++){
//     sum += i;
// }

// console.log(sum);

// console.log(`Hello, World!`);

// let userName = prompt(`Enter name`, `Katya`);
// console.log(`Hello, ${userName ? userName : `user`}!`);
// console.log(`Hello, ${userName ?? `user`}!`);

// const user = {
//   name: `Taras`,
//   age: 30,
// };

// console.log(user);

// user.age = 100;
// user.name = `Katya`;
// console.log(user);

// const animals = [`cat`, `dog`, `elephant`];
// console.log(animals);

// animals[0] = `SIMBA`;
// console.log(animals);

// const ADMIN_PASSWORD = 0;

// let userPassword = Number(prompt(`Enter admin password`, 1)); // hello => NaN

// if (userPassword === ADMIN_PASSWORD) {
//   console.log(`Access granted`);
// } else {
//   console.log(`Access denied`);
// }

// const USER_SURNAME_SHEVA = `Sheva`;
// const USER_SURNAME_KONOVALETS = `Konovalets`;

// let userSurname = prompt(`Enter your surname`, `Sheva`);

// switch (userSurname) {
//   case USER_SURNAME_SHEVA:
//     console.log(`Hello, ${USER_SURNAME_SHEVA}!`);
//     break;
//   case USER_SURNAME_KONOVALETS:
//     console.log(`Hello, ${USER_SURNAME_KONOVALETS}!`);
//     break;
//   default:
//     console.log(`Hello, user!`);
//     break;
// }

// const userInfo = function (userObj) {
//   return `Name: ${userObj.name}, Age: ${userObj.age}, Country: ${userObj.country}`;
// };

const userInfo = function ({ name, age, country, child }) {
  return `Name: ${name}, Age: ${age}, Country: ${country}, Child: ${child ?? `none`}`;
};

const userTaras = {
  name: `Taras`,
  age: 30,
  country: `Ukraine`,
  city: `Lviv`,
  child: `Oleh`,
};

const userKatya = {
  name: `Katya`,
  age: 25,
  country: `Ukraine`,
  animals: [`cat`, `dog`],
};

console.log(userInfo(userTaras));
console.log(userInfo(userKatya));
