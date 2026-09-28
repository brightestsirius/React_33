//  1. Як швидко отримати масив унікальних значень?
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
// [1, 2, 3, 4, 5]

// 2. Set — перевірити, чи є дублікати
const numbers = [1, 2, 3, 4, 2];
const hasDuplicates = new Set(numbers).size !== numbers.length;
console.log(hasDuplicates);
// true

// 3. Знайти дублікати
const numbers = [1, 2, 3, 2, 4, 3, 5];
const uniqueNumbers = new Set();
const duplicates = new Set();

for (const number of numbers) {
  if (uniqueNumbers.has(number)) {
    duplicates.add(number);
  } else {
    uniqueNumbers.add(number);
  }
}

console.log(duplicates);
// Set(2) { 2, 3 }

// 4. Зберігати користувача за його ID
const users = new Map();

users.set(101, {
  name: "Anna",
  age: 25
});

users.set(102, {
  name: "John",
  age: 30
});

console.log(users.get(101));
// { name: "Anna", age: 25 }

// 5. Чи може об’єкт бути ключем у Map? – так
const user1 = {
  name: "Anna"
};

const user2 = {
  name: "John"
};

const roles = new Map();

roles.set(user1, "admin");
roles.set(user2, "user");

console.log(roles.get(user1));
// admin

console.log(roles.get(user2));
// user