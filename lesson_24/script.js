// const person = {
//   firstName: "Андрій",
//   lastName: "Шевченко",
//   yearOfBirth: 1980,

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     [this.firstName, this.lastName] = value.split(" ");
//   },

//   get age() {
//     return new Date().getFullYear() - this.yearOfBirth;
//   },
// };

// console.log(person.fullName);

// person.firstName = `Taras`;
// console.log(person.fullName);

// person.fullName = `Ivan Petrenko`;
// console.log(person.fullName);

// console.log(person.age);

// const book = {
//   id: 1,
//   name: `Example Book`,
//   year: 2024,
//   price: 19.99,
// };

// Object.defineProperty(book, "id", {
//   enumerable: false,
// });

// Object.defineProperty(book, "discount", {
//   value: 10,
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// for (const key in book) {
//   console.log(`${key}: ${book[key]}`);
// }

// console.log(book);

const userJohn = {
  name: "John Doe",
  age: 30,
  siteVistis: 20,
};

const userTaras = {
  name: "Taras Shevchenko",
  age: 30,
  siteVistis: 10,
};

const usersVists = new Map([
  [userJohn, 20],
  [userTaras, 10],
]);

// console.log(usersVists);

// --- 1. Співбесіда: об'єкт як ключ ---

// Рахуємо, скільки разів користувач відкривав модалку.
const user1 = { name: "Oleh" };
const user2 = { name: "Kate" };

const modalOpens = new Map();

const trackModalOpen = (user) => {
  modalOpens.set(user, modalOpens.has(user) ? modalOpens.get(user) + 1 : 1);
};

trackModalOpen(user1);
trackModalOpen(user1);
trackModalOpen(user2);

// console.log(modalOpens);
// console.log(modalOpens.get(user1));
// console.log(user1); // { name: 'Oleh' } — об'єкт не забруднений

// --- 2. Співбесіда: чи є в масиві дублікати? ---

// Наївно: два вкладені цикли → O(n²)
const hasDuplicatesSlow = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
};

// Оптимально: один прохід + Set, бо has() — це O(1)
const hasDuplicates = (arr) => {
  const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
};

// Ще коротше, але завжди обходить весь масив
const hasDuplicatesShort = (arr) => new Set(arr).size !== arr.length;

// console.log(hasDuplicates([1, 2, 3, 2])); // true
// console.log(hasDuplicates([1, 2, 3, 4])); // false

// OOP: incapsulation

const user = {
  name: "John Doe",
  age: 30,
  siteVistis: 20,
  getStats: function () {
    return `Name: ${this.name}, Age: ${this.age}, Site Visits: ${this.siteVistis}`;
  },
};
// console.log(user.getStats());

const animal = {
  name: "Lion",
  age: 5,
  species: "Panthera leo",
  getStats: function () {
    return `Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`;
  },
};
// console.log(animal.getStats());

// OOP: Inheritance
// Основний об'єкт
const vehicle = {
  hasWheels: true,
  describe() {
    return `Це транспортний засіб з колесами: ${this.hasWheels}`;
  },
};

const car = Object.create(vehicle);
car.type = `hachback`;
car.getType = function () {
  return `Type: ${this.type}`;
};

const audi = Object.create(car);
audi.number = `Q8`;
audi.type = `audi`;
audi.hasWheels = false;
audi.describe = function () {
  return `${vehicle.describe.call(this)} and number is ${this.number}.`;
};

// console.log(audi.describe());

// OOP: polimorphism

function getSound() {
  return `${this.type} says ${this.sound}`;
}

const cat = {
  type: `cat`,
  sound: `Meow`,
};

const dog = {
  type: `dog`,
  sound: `Woof`,
};

// console.log(getSound.call(cat));
// console.log(getSound.call(dog));

// OOP: abstraction

const abstractAnimal = {
  type: `animal`,
  getInfo: function () {
    return `Type: ${this.type}`;
  },
};

const lion = Object.create(abstractAnimal);
lion.name = `Simba`;
lion.getInfo = function () {
  return `Name: ${this.name}, ${abstractAnimal.getInfo.call(this)}`;
};

const parrot = Object.create(abstractAnimal);
parrot.name = `Kesha`;
parrot.getInfo = function () {
  return `Name: ${this.name}, ${abstractAnimal.getInfo.call(this)}`;
};

console.log(lion.getInfo());
console.log(parrot.getInfo());
