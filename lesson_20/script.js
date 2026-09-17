// function greet() {
//   return `Hello, world form greet fn!`;
// }

// console.log(greet());

// let person = {
//   name: "Іван",
//   age: 30,
//   child: {
//     name: "Марія",
//     age: 5,
//   },
//   getInfo: function () {
//     return `Hello, world!`;
//   },
//   greetFn: greet,
//   greet,
// };

// console.log(person.getInfo());
// console.log(person);
// console.log(person.greetFn());
// console.log(person.greet());

// let person = {
//   name: "Іван",
//   role: "student",
// };
// delete person.role;

// console.log(person);
// console.log("role" in person);

// let person = {
//   name: "Іван",
//   email: "ivan@example.com",
//   role: "student",
// };

// let cat = {
//   type: "cat",
//   name: "Tom",
//   age: 3,
// };

// let lion = {
//   type: "lion",
//   name: "Simba",
//   age: 5,
//   child: {
//     type: "lion",
//     name: "Nala",
//     age: 2,
//   },
// };

// let finalCat = Object.assign({}, cat, lion, { type: "dog" });

// console.log(finalCat);
// console.log(cat);

// let firstUser = `Taras`;
// let secondUser = firstUser.toUpperCase();

// console.log(firstUser);
// console.log(secondUser);

// let firstPerson = {
//   name: "Taras",
//   age: 30,
// };

// let firstPersonToJSON = JSON.stringify(firstPerson);
// let secondPerson = JSON.parse(firstPersonToJSON);

// let secondPerson = JSON.parse(JSON.stringify(firstPerson));

// let secondPerson = structuredClone(firstPerson);
// secondPerson.name = secondPerson.name.toUpperCase();

// console.log(firstPerson);
// console.log(secondPerson);

// let animals = [`cat`, `dog`, `lion`];
// let clonedAnimals = structuredClone(animals);

// clonedAnimals[0] = `SIMBA`;

// console.log(animals);
// console.log(clonedAnimals);

// const strToNum = +"456"; // "456" стає числом 456
// const boolToStr = String(true); // true стає рядком "true"
// const numToBool = !!0;

// const num = 12345.6789;
// const numToStr = num.toString(); // Конвертує число в рядок "12345.6789"

// const strToInt = parseInt("100px"); // Конвертує рядок в ціле число 100, ігноруючи нечислові символи
// const strToFloat = parseFloat("3.14someText");

// let value = 22;

// if(value>10 && value<20){
//     console.log("This is true!");
// }

// console.log("This is after the if statement.");

// let value = 10;

// if (value >= 10) {
//   console.log("Value is greater or equal than 10");
// } else {
//   console.log("Value is not greater than 10");
// }

// console.log("This is after the if statement.");

// let value = 9;

// if (value > 10) {
//   console.log("Value is greater than 10");
// } else if (value === 10) {
//   console.log("Value is equal to 10");
// } else {
//   console.log("Value is not greater than 10");
// }

// console.log("This is after the if statement.");

// let userName = `Taras`;

// if(userName === `Taras`){
//     console.log("Hello, Taras!");
// } else if(userName === `Olena`){
//     console.log("Hello, Olena!");
// } else {
//     console.log("Hello, guest!");
// }

// switch/case

// let userName = `Taras`;

// switch (userName) {
//   case `Anton`:
//     console.log("Hello, Anton!");
//     console.log("How are you, Anton?");
//     break;
//   case `Taras`:
//     console.log("Hello, Taras!");
//     break;
//   case `Olena`:
//     console.log("Hello, Olena!");
//     break;
//   default:
//     console.log("Hello, guest!");
//     break;
// }

// condition ? trueValue : falseValue

// let age = 20;
// let canVote = (age >= 18) ? "так" : "ні";
// console.log(`Чи може особа голосувати? ${canVote}`);

// console.log(`Чи може особа голосувати? ${age >= 18 ? "так" : "ні"}`);

// condition ? (condition ? trueValue : falseValue) : (condition ? trueValue : falseValue)

// var marks = 85;
// var grade =
//   marks >= 90
//     ? "A"
//     : marks >= 80
//       ? "B"
//       : marks >= 70
//         ? "C"
//         : marks >= 60
//           ? "D"
//           : "F";

// console.log("Оцінка: " + grade);

// for (let i = 5, j=10; i >= 5 && j <= 15; i++, j=j+2) {
//   console.log(i, j);
// }

// // 5, 10
// // 6, 12
// // 7, 14

// console.log(`Loop finished.`);

// for (let i = 0; i < 10; i++) {
//     if(i === 5) break;
//     console.log(i);
// }
// console.log(`Loop finished.`);

// for (let i = 0; i < 10; i++) {
//     if(i === 5) continue;
//     console.log(i);
//     console.log(`---`);
// }
// console.log(`Loop finished.`);
