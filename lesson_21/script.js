// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
//   console.log(`Current i=${i} and sum=${sum}`);
// }

// console.log(`Final sum=${sum}`);

// let multiply = 1;
// for (let i = 1; i <= 10; i++) {
//   multiply *= i;
//   console.log(`Current i=${i} and multiply=${multiply}`);
// }

// console.log(`Final multiply=${multiply}`);

// let user = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   hobbies: ["reading", "traveling", "swimming"],
//   child: {
//     name: "Alice",
//     age: 5,
//     animal: {
//         type: "dog",
//         name: "Buddy"
//     }
//   },
// };

// for (let key in user) {
//   if (typeof user[key] === "object" && !Array.isArray(user[key])) {
//     for (let subKey in user[key]) {
//       console.log(`  ${subKey} is ${user[key][subKey]}`);
//     }
//   } else if (Array.isArray(user[key])) {
//     console.log(`${key} is ${user[key].join(", ")}`);
//   } else {
//     console.log(`${key} is ${user[key]}`);
//   }
// }

// let user = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// for (let key in user) {
//   //key === "name" | "age" | "city"
//   console.log(`${key} is ${user[key]}`);
// }

// console.log(user["name"]); // John
// console.log(user.name); // John

// console.log(user.key); // undefined
// console.log(user.age); // 30

// let animals = ["dog", "cat", "rabbit", "hamster", "parrot", "fish", "turtle"];

// for (let i = 0; i <= 6; i += 2) {
//   if (animals[i] === "rabbit") continue;
//   console.log(animals[i]); // "dog", "parrot", "turtle"
// }

// let i = 10;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// console.log(`------`);

// for (let i = 10; i < 5; i++) {
//   console.log(i);
// }

// console.log(`------`);

// let j = 10;
// do {
//   console.log(j);
//   j++;
// } while (j < 5);

// sum();

// function sum() {
//   let result = 10 + 20;
//   console.log(result);
// }

// function sum(a, b) {
//   let sumResult = a + b;
//   console.log(sumResult);
// }

// sum(10, 20);
// sum(5, 15);

// function sum(a, b) {
//   let sumResult = a + b;
//   return sumResult;
// }

// console.log(`Sum of 10 + 20 = ${sum(10, 20)}`)
// console.log(`Result of first operation: ${sum(10, 20)}`)

// let firstOperation = sum(10, 20); // 30
// console.log(`Result of first operation: ${firstOperation}`);
// console.log(`Sum of 10 + 20 = ${firstOperation}`);

// let secondOperation = sum(5, 15); // 20
// console.log(`Result of second operation: ${secondOperation}`);

// function sum(a, b) {
//   return a + b;
// }

// let sumExample = sum(10, 20);
// console.log(sumExample);

function userCard(name, yearOfBirth, animal, country = `Ukraine`) {
  let nameInfo;
  if (typeof name === "undefined") nameInfo = ``;
  else nameInfo = `My name is ${name}.`;

  let ageInfo;
  if (typeof yearOfBirth === "undefined") ageInfo = ``;
  else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - Number(yearOfBirth);

    ageInfo = `I'm ${age} years old.`;
  }

  let animalInfo;
  if (typeof animal === "undefined") animalInfo = ``;
  else animalInfo = `I have a/an ${animal}.`;

  let countryInfo = `I live in ${country}.`;

  return `${nameInfo} ${ageInfo} ${animalInfo} ${countryInfo}`;
}

let Oleg = userCard("Oleg", "1990", "dog", "Spain");
console.log(Oleg);

let Katya = userCard("Katya", "1992", undefined, "Germany");
console.log(Katya);

let Iryna = userCard("Iryna", "2000", "dog");
console.log(Iryna);

let Victor = userCard("Victor", undefined, "dog", "Poland");
console.log(Victor);
