// call/apply/bind

// const getInfo = function (firstArg, secondArg) {
//   for (let key in this) {
//     if (typeof this[key] !== "function") console.log(`${key}: ${this[key]}`);
//   }

//   console.log(firstArg);
//   console.log(secondArg);
// };

// const user = {
//   name: "Katya",
//   age: 25,
//   city: "Kyiv",
//   getName: function(){
//     return this.name;
//   }
// };

// const animal = {
//   type: "lion",
//   name: `Simba`,
//   voice: `roar`,
// };

// call
// getInfo.call(user, `*** Before data ***`, `*** After data ***`);
// getInfo.call(animal, 100, `End.`);

// apply
// getInfo.apply(user, [`*** Before data ***`, `*** After data ***`]);
// getInfo.apply(animal, [100, `End.`]);

// bind
// const getInfoUser = getInfo.bind(user);
// getInfoUser(`first user arg`, `second user arg`);
// getInfoUser(100, 200);

// const getInfoUserFirst = getInfo.bind(user, `FIRST ARG`);
// getInfoUserFirst(`second`);
// getInfoUserFirst(200);

// const finalUserInfo = getInfo.bind(user, `first`, `second`);
// finalUserInfo();

// OOP

// const father = {
//   surname: "Sheva",
//   country: `Ukraine`,
//   getInfo: function () {
//     for (let key in this) {
//       if (typeof this[key] !== "function" && child.hasOwnProperty(key))
//         console.log(`${key}: ${this[key]}`);
//     }
//   },
// };

// const child = Object.create(father);
// child.name = "Katya";
// child.age = 25;

// child.getInfo();

// console.log(father);
// console.log(child);

// class

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get country() {
    return this._country || `Ukraine`;
  }

  set country(value) {
    this._country = value;
  }

  get age() {
    return new Date().getFullYear() - this.year;
  }

  getInfo() {
    return `This book is ${this.title} by ${this.author}, published in ${this.year}.`;
  }

  getAuthor() {
    return `The author of ${this.title} is ${this.author}.`;
  }

  getYear() {
    return `This book was published in ${this.year}.`;
  }

  getPublishData() {
    return `${this.title} was published ${this.age} years ago.`;
  }
}

const HarryPotter = new Book(`Harry Potter`, `J.K. Rowling`, 1997);
const LordOfTheRings = new Book(`Lord of the Rings`, `J.R.R. Tolkien`, 1954);
const TheHobbit = new Book(`The Hobbit`, `J.R.R. Tolkien`, 1937);

// console.log(HarryPotter);
// console.log(LordOfTheRings);
// console.log(TheHobbit);

// console.log(HarryPotter.getInfo());
// console.log(HarryPotter.getAuthor());
// console.log(HarryPotter.getYear());

// console.log(HarryPotter.getPublishData());

// console.log(HarryPotter.country);
// HarryPotter.country = `USA`;
// console.log(HarryPotter.country);

// let x = new Number(10);
// console.log(x);

// let str = new String(`Hello, world!`);
// console.log(str);

// console.log(str[0]);
// console.log(str.length);
// console.log(str.charAt(1))

// const grandfather = {
//   surname: "Sheva",
// };

// const father = Object.create(grandfather);
// father.name = "Ivan";
// father.country = `Ukraine`;

// const child = Object.create(father);
// child.name = "Katya";

// console.log(child);
// console.log(child.name);
// console.log(child.country);

// console.log(father.surname);
// console.log(child.surname);

class Grandfather{
    constructor(surname) {
        this.surname = surname;
    }
}

const GrandFatherSheva = new Grandfather("Shevchenko");
// console.log(GrandFatherSheva);

class Father extends Grandfather {
    constructor(surname, name, country){
        super(surname);
        this.name = name;
        this.country = country;
    }
}

const FatherAndriy = new Father("Shevchenko", "Andriy", "Ukraine"); // {}
// console.log(FatherAndriy);

class Child extends Father {
    constructor(surname, name, country, age){
        super(surname, name, country);
        this.age = age;
    }
}

const ChildKatya = new Child("Shevchenko", "Katya", "Ukraine", 10);
// console.log(ChildKatya);

class Country{
    constructor(){
        this.nationality = `Ukraine`;
        this.uniCode = `UA`;
    }

    getNationality(){
        return `The nationality is ${this.nationality}.`;
    }

    getUniCode(){
        return `The Unicode of this country is ${this.uniCode}.`;
    }
}

class City extends Country {
    constructor(){
        super();
        this.city = `Kyiv`;
    }

    getCityInfo(){
        return `The city is ${this.city}.`;
    }
}

class Street extends City {
    constructor(street){
        super();
        this.street = street;
    }

    getStreetInfo(){
        return `The street is ${this.street}.`;
    }
}

const StreetShevchenko = new Street("Shevchenko Street");
console.log(StreetShevchenko);