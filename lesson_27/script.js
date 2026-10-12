// const numbers = [1, 2, 3];
// console.log(numbers);

// const secondItem = numbers[1];
// console.log(secondItem);

// delete numbers[1];
// console.log(numbers);
// console.log(numbers[1]);

// typeof

// const age = 10;
// console.log(typeof age);

// const numbers = [1, 2, 3];
// console.log(typeof numbers); // typeof === "array"

// const user = {
//     name: "John",
//     age: 30
// };
// console.log(typeof user);

// console.log(Array.isArray(numbers)); // true/false

// ... spread/rest operator

// const numbers = [1, 2, 3];
// // const numbersCopy = structuredClone(numbers);
// const numbersCopy = [...numbers];

// numbersCopy[0] = 100;
// console.log(numbers);
// console.log(numbersCopy);

// const data = [
//   [`cat`, `dog`],
//   [`Katya`, `Oleg`],
//   [`apple`, `banana`],
// ];
// console.log(data);

// const copiedData = structuredClone(data);
// console.log(copiedData);

// copiedData[0][0] = 100;
// console.log(data);
// console.log(copiedData);

// JSON.parse(JSON.stringify(data));

// const user = {
//     name: `Katya`,
//     age: 23
// };

// const clonedUser = {
//     ...user,
//     country: `Ukraine`,
//     age: 43,
//     child: {...user}
// }

// const secondClonedUser = structuredClone(clonedUser);

// console.log(user);
// console.log(clonedUser);

// clonedUser.child.name = `Oleg`;

// console.log(user);
// console.log(clonedUser);
// console.log(secondClonedUser);

// function hello(...rest){
//     console.log(rest);
// }

// hello(`Katya`, `Ivanova`, 23, `Ukraine`, 100, true);

// const cart = [10, 20, 30, 40];
// const animals = [`cat`, `dog`, `elephant`];

// const combined = [...cart, ...animals];
// console.log(combined);

// const elements = ['Вогонь', 'Повітря', 'Вода'];
// console.log(elements.join(` `));

// const elements = ['Вогонь', 'Повітря', 'Вода'];

// // ul -> li
// const LIs = ['<li>Вогонь</li>', '<li>Повітря</li>', '<li>Вода</li>'];
// console.log(LIs);

// console.log(LIs.join(``));
// document.write(`<ul>${LIs.join(``)}</ul>`);

// const numbers = [1, 2, 3];
// const reverseArray = [...numbers].reverse();

// console.log(reverseArray);
// console.log(numbers);

// const numbers = [3, 1, 2];
// const sortedNumbers = [...numbers].sort();

// console.log(sortedNumbers);
// console.log(numbers);

// const alpha = ['a', 'b', 'c'];
// const numeric = [1, 2, 3];
// const music = ['do', 're', 'mi'];
// const alphaNumeric = alpha.concat(numeric, music); // [...alpha, ...numeric]

// console.log(alphaNumeric);

// Object.assign();

// const firstUser = {
//     name: `First`,
//     age: 23
// }

// const secondUser = {
//     country: `UKraine`,
//     city: `Kyiv`
// }

// const thirdUser = {
//     animal: `cat`,
//     type: `lion`
// }

// const user = Object.assign({}, firstUser, secondUser, thirdUser);

// console.log(user);
// console.log(firstUser);

// const numbers = [1, 2, 3, 4, 5, `cat`, `dog`]; // -2
// const copiedNumbers = numbers.slice(-(numbers.length-3)); // structuredClone

// console.log(copiedNumbers);
// console.log(numbers);

// const userName = `Katya`;
// const copiedLetters = userName.slice(1,4);
// console.log(copiedLetters);

// splice
// const animals = [`cat`, `dog`, `elephant`, `lion`, `tiger`];
// const removedAnimals = animals.splice(1, 3, `Katya`, `Oleg`, `Inna`);

// console.log(animals);
// console.log(removedAnimals);

// const animals = ['панда', 'коала'];
// const resultPush = animals.push('броненосець', `cat`, 10, true);

// console.log(animals); // ['панда', 'коала', 'броненосець']
// console.log(resultPush);

// sort

// const animals = [`cat`, `dog`, `lion`, `tiger`, `elephant`, `bear`];

// const modifiedAnimals = structuredClone(animals)
//     .sort()
//     .slice(0, 5);

// modifiedAnimals.push(`panther`, `cheetah`);

// const slicedAnimals = modifiedAnimals.sort().slice(3);

// console.log(modifiedAnimals);
// console.log(slicedAnimals);

// const numbers = [2, 3, 4];
// const resultUnshift = numbers.unshift(`cat`, `dog`, `lion`);

// console.log(numbers);
// console.log(resultUnshift);

// const numbers = [1, 2, 3];
// const poppedNumber = numbers.pop();

// console.log(numbers);
// console.log(poppedNumber);

// forEach

// const animals = [`cat`, `dog`, `lion`, `tiger`];

// for(const animal of animals) {
//     if(animal === `lion`) continue;
//     console.log(animal);
// }

// for(let i=1; i<animals.length; i+=2){
//     console.log(animals[i]);
// }

// const resultForEach = animals
//     .forEach(function (item, index, arr) {
//         console.log(item, index, arr);
//     });

// const resultForEach = animals
//     .forEach((item, index, arr) => {
//         console.log(item, index, arr);
//     });

// const resultForEach = animals
//     .forEach((item, index, arr) => console.log(item, index, arr));

// const resultForEach = animals
//     .forEach((item) => console.log(item));

// const resultForEach = animals.forEach(item => console.log(item));

// map
// const numbers = [10, 20, 30, 40, 50];

// const doubledNumbers = [];
// for(let i=0; i<numbers.length; i++){
//     doubledNumbers.push(Math.pow(numbers[i], 2));
// }
// console.log(doubledNumbers);

// const doubledNumbers = numbers
//     .map(function (item, index, arr) {
//         return Math.pow(item, 2);
//     });

// const doubledNumbers = numbers
//     .map((item) =>{
//         return Math.pow(item, 2);
//     });

// const doubledNumbers = numbers.map((item) => Math.pow(item, 2));
// console.log(doubledNumbers);

// const animals = [`cat`, `dog`, `lion`, `tiger`];

// const modifiedAnimals = animals
//     .map(item => `<li>${item}</li>`);

// modifiedAnimals.forEach(item => console.log(item));

// const LIs = modifiedAnimals.join(``);
// console.log(LIs);
// document.write(LIs);

// Імперативний і декларативний підходи
// Імперативний підхід - Як робити щось крок за кроком?
// Декларативний підхід - Що робити, не вдаючись до деталей реалізації?
