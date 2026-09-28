let data = [
  {
    name: "Oleh",
    age: 34,
    contacts: {
      email: "oleh@mail.com",
      phones: ["+380501112233", "+380971112233"],
    },
    pets: [
      { type: "dog", name: "Patron" },
      { type: "cat", name: "Tom" },
    ],
  },
  {
    name: "Kateryna",
    age: 28,
    contacts: {
      email: "kate@mail.com",
      social: {
        telegram: "@kate",
        instagram: "@kate.photo",
      },
    },
    pets: [],
  },
];

function isNested(value) {
  return typeof value === "object" && value !== null;
}

function printList(data, indent = "") {
  for (let key in data) {
    let value = data[key];

    if (isNested(value)) {
      console.log(`${indent}${key}:`);
      printList(value, indent + "\t");
    } else {
      console.log(`${indent}${key}: ${value}`);
    }
  }
}

// printList(data);

const checkAge = (age) => {
  if (age < 18) {
    throw new Error("Вік має бути 18 або більше");
  }
  console.log("Вік підтверджено");
};

// try {
//   checkAge(16);
// } catch (error) {
//   console.error(error.message);
// }

// console.log(`Next function`);

const safeDivision = (numerator, denominator) => {
  try {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed");
    }
    console.log(numerator / denominator);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Attempted division operation completed");
  }
};

// safeDivision(10, 0);
// safeDivision(10, 2);

// const sum = function(a,b){
//     return a+b;
// }

const sum = (a, b) => a + b;
const multiplyTen = (a) => a * 10;

const userInfo = (name, yearOfBirth) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - Number(yearOfBirth);

  return `Name: ${name}, Age: ${age}`;
};

// console.log(sum(3, 4));
// console.log(multiplyTen(3));
// console.log(userInfo("Oleh", 1990));

// const gnName = () => ({..});

// const getUser = (name, surname, yearOfBirth) => {
//   return {
//     name: name,
//     fullName: `${name} ${surname}`,
//     yearOfBirth: yearOfBirth,
//   };
// };

// const getUser = (name, surname, yearOfBirth) => ({
//   name,
//   fullName: `${name} ${surname}`,
//   yearOfBirth,
// });

// console.log(getUser("Oleh", "Shevchenko", 1990));

// const getArray = function () {
//   return [...arguments];
// };

// let cat = `cat`,
//   dog = `dog`,
//   lion = `lion`,
//   elephant = `elephant`;

// const catArray = getArray(cat, lion);
// const dogElephantArray = getArray(dog, elephant);

// console.log(catArray);
// console.log(dogElephantArray);

const printHello = () => "Hello";
// console.log(printHello());

// let userTaras = {
//   name: `Taras`,
//   surname: `Shevchenko`,
//   getFullName: function () {
//     return `Hello, my name is ${this.name} ${this.surname}`;
//   },
// };

// console.log(userTaras.getFullName());

// const person = {
//   name: "Андрій",
//   surname: "Шевченко",
//   greet: function () {
//     console.log(`Привіт, мене звати ${this.surname}`);
//   },
// };

// setTimeout(person.greet, 1000);

const getFullName = function () {
  return `Hello, my name is ${this.name} ${this.surname}`;
};

const getUserCourse = function () {
  return `Student ${this.name} at this course`;
};

const getCourseName = function (course) {
  return `Student ${this.name} is enrolled in the course: ${course}`;
};

const getUserInfo = function (country = `Ukraine`, city = `Kharkiv`) {
  return `User ${this.name} is from ${city}, ${country}`;
};

let userTaras = {
  name: `Taras`,
  surname: `Shevchenko`,
};

let userKatya = {
  name: `Katya`,
  surname: `Shypovska`,
};

let userIryna = {
  name: `Iryna`,
  surname: `Hrihorieva`,
};

// call/apply/bind

// console.log(getFullName.call(userTaras));
// console.log(getFullName.call(userKatya));

// console.log(userIryna.getCourseName("JavaScript"));
// console.log(userIryna.getCourseName("React"));

// console.log(getCourseName.call(userIryna, "JavaScript"));
// console.log(getCourseName.call(userKatya, "React"));

// console.log(getUserInfo.call(userTaras, `Poland`, `Warsaw`));
// console.log(getUserInfo.call(userKatya));

// console.log(getFullName.apply(userTaras));
// console.log(getUserInfo.apply(userTaras, [`Geramny`, `Dresden`]));

// const getFullNameTaras = getFullName.bind(userTaras);
// console.log(getFullNameTaras());

// const getTarasUkraineInfo = getUserInfo.bind(userTaras, `Ukraine`);

// console.log(getTarasUkraineInfo(`Odesa`));
// console.log(getTarasUkraineInfo(`Chernihiv`));
