// Сценарій: користувач замовляє піцу.
// Спочатку перевіряємо, чи працює ресторан, потім — чи є вільний кур'єр.

// const checkRestaurant = new Promise((resolve, reject) => {
//   console.log(`Перевіряємо, чи працює ресторан...`);

//   setTimeout(() => {
//     const isOpen = confirm(`Ресторан працює?`);
//     isOpen ? resolve() : reject(`Ресторан зачинено`);
//   }, 1000);
// });

// checkRestaurant
//   .then(() => {
//     console.log(`🟢 Ресторан працює`);

//     const hasCourier = confirm(`Є вільний кур'єр?`);

//     if (!hasCourier) {
//       return Promise.reject(`Немає вільних кур'єрів`);
//     }
//   })
//   .then(() => {
//     console.log(`🍕 Піцу вже везуть!`);
//   })
//   .catch((reason) => {
//     console.log(`🔴 Замовлення не прийнято: ${reason}`);
//   })
//   .finally(() => {
//     console.log(`📋 Обробку замовлення завершено`);
//   })
//   .then(() => {
//     const isRated = confirm(`Оцінити сервіс?`);

//     if (!isRated) {
//       throw `Користувач відмовився від оцінки`;
//     }

//     console.log(`⭐ Дякуємо за оцінку!`);
//   })
//   .catch((reason) => {
//     console.log(`⚪ Відгук не залишено: ${reason}`);
//   })
//   .finally(() => {
//     console.log(`👋 До зустрічі!`);
//   });

// Той самий сценарій, але на callback-ах.

// const checkRestaurant = (onSuccess, onError) => {
//   console.log(`Перевіряємо, чи працює ресторан...`);

//   setTimeout(() => {
//     const isOpen = confirm(`Ресторан працює?`);
//     isOpen ? onSuccess() : onError(`Ресторан зачинено`);
//   }, 1000);
// };

// const checkCourier = (onSuccess, onError) => {
//   const hasCourier = confirm(`Є вільний кур'єр?`);
//   hasCourier ? onSuccess() : onError(`Немає вільних кур'єрів`);
// };

// const rateService = (onSuccess, onError) => {
//   const isRated = confirm(`Оцінити сервіс?`);
//   isRated ? onSuccess() : onError(`Користувач відмовився від оцінки`);
// };

// checkRestaurant(
//   () => {
//     console.log(`🟢 Ресторан працює`);

//     checkCourier(
//       () => {
//         console.log(`🍕 Піцу вже везуть!`);
//         console.log(`📋 Обробку замовлення завершено`);

//         rateService(
//           () => {
//             console.log(`⭐ Дякуємо за оцінку!`);
//             console.log(`👋 До зустрічі!`);
//           },
//           (reason) => {
//             console.log(`⚪ Відгук не залишено: ${reason}`);
//             console.log(`👋 До зустрічі!`);
//           }
//         );
//       },
//       (reason) => {
//         console.log(`🔴 Замовлення не прийнято: ${reason}`);
//         console.log(`📋 Обробку замовлення завершено`);

//         rateService(
//           () => {
//             console.log(`⭐ Дякуємо за оцінку!`);
//             console.log(`👋 До зустрічі!`);
//           },
//           (reason) => {
//             console.log(`⚪ Відгук не залишено: ${reason}`);
//             console.log(`👋 До зустрічі!`);
//           }
//         );
//       }
//     );
//   },
//   (reason) => {
//     console.log(`🔴 Замовлення не прийнято: ${reason}`);
//     console.log(`📋 Обробку замовлення завершено`);

//     rateService(
//       () => {
//         console.log(`⭐ Дякуємо за оцінку!`);
//         console.log(`👋 До зустрічі!`);
//       },
//       (reason) => {
//         console.log(`⚪ Відгук не залишено: ${reason}`);
//         console.log(`👋 До зустрічі!`);
//       }
//     );
//   }
// );

// Сценарій: піцу готують покроково.
// Кожен крок займає час, тому кожен .then() повертає новий проміс із setTimeout.
// Наступний .then() чекає, поки попередній проміс виконається.

// const makeDough = new Promise((resolve) => {
//   console.log(`Замішуємо тісто...`);

//   setTimeout(() => {
//     resolve(`🫓 Тісто`);
//   }, 1000);
// });

// makeDough
//   .then((pizza) => {
//     console.log(`${pizza} готове`);
//     console.log(`Додаємо начинку...`);

//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`${pizza} + 🧀 сир + 🍅 томати`);
//       }, 1500);
//     });
//   })
//   .then((pizza) => {
//     console.log(`${pizza} — начинку додано`);
//     console.log(`Випікаємо...`);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const isBaked = confirm(`Піца не підгоріла?`);

//         if (isBaked) {
//           resolve(`🍕 Піца`);
//         } else {
//           reject(`Піца підгоріла`);
//         }
//       }, 2000);
//     });
//   })
//   .then((pizza) => {
//     console.log(`${pizza} готова`);
//     console.log(`Кур'єр виїхав...`);

//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`${pizza} доставлена`);
//       }, 1000);
//     });
//   })
//   .then((result) => {
//     console.log(`🥳 ${result}!`);
//   })
//   .catch((reason) => {
//     console.log(`🔴 Замовлення скасовано: ${reason}`);
//   })
//   .finally(() => {
//     console.log(`📋 Роботу кухні завершено`);
//   });

// Статичні методи Promise: запускаємо кілька промісів одночасно.
// Допоміжна функція: готує страву за ms мілісекунд, isOk = false — страва не вдалася.

// const cook = (dish, ms, isOk = true) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isOk) {
//         resolve(dish);
//       } else {
//         reject(`${dish} не вдалося приготувати`);
//       }
//     }, ms);
//   });

// Promise.all — чекає ВСІ проміси. Повертає масив результатів у тому ж порядку.
// Якщо хоча б один відхилено — одразу йде в catch.

// Promise.all([cook(`🍕 Піца`, 2000), cook(`🥗 Салат`, 1000), cook(`🥤 Лимонад`, 500)])
//   .then((dishes) => {
//     console.log(`all: замовлення готове —`, dishes);
//   })
//   .catch((reason) => {
//     console.log(`all: 🔴 ${reason}`);
//   });

// Promise.allSettled — чекає ВСІ проміси і ніколи не відхиляється.
// Повертає масив об'єктів { status: "fulfilled", value } або { status: "rejected", reason }.

// Promise.allSettled([cook(`🍕 Піца`, 2000), cook(`🥗 Салат`, 1000), cook(`🥤 Лимонад`, 500)])
//   .then((results) => {

//     results.forEach((result) => {
//       if (result.status === `fulfilled`) {
//         console.log(`allSettled: 🟢 ${result.value}`);
//       } else {
//         console.log(`allSettled: 🔴 ${result.reason}`);
//       }
//     });
//   })

// JSON

// const user = {
//     name: `Oleg`,
//     age: 30,
//     anilamls: [`cat`, `dog`, `lion`]
// }
// console.log(user);

// const userToJSON = JSON.stringify(user);
// console.log(userToJSON);

// const JSONToUser = JSON.parse(userToJSON);
// console.log(JSONToUser);

// const age = 30;
// console.log(age);

// const ageString = "30";
// console.log(ageString);

// const year = new Date().getFullYear() + age; // 202630
// console.log(year);

// const ageToJSON = JSON.stringify(age);
// console.log(ageToJSON);

// const JSONToAge = JSON.parse(ageToJSON);
// console.log(JSONToAge);

// const xhr = new XMLHttpRequest(); // Створення нового екземпляра XHR
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true); // Налаштування запиту

// xhr.onload = function() {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     // Перевірка статусу відповіді
//     console.log('Відповідь отримано:', xhr.responseText); // Обробка відповіді від сервера
//   } else {
//     console.error('Запит не вдався:', xhr.statusText); // Обробка помилки запиту
//   }
// };

// xhr.onerror = function() {
//   console.error('Помилка запиту'); // Обробка помилки мережі
// };

// xhr.send(); // Відправлення запиту

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(response.statusText);
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

const getPosts = document.querySelector(`#getPosts`);
const postsBlock = document.querySelector(`#postsBlock`);

const getUsers = document.querySelector(`#getUsers`);
const usersBlock = document.querySelector(`#usersBlock`);

// getPosts.addEventListener(`click`, () => {
//   fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(response.statusText);
//       }
//     })
//     .then((data) => {
//       renderPosts(data);
//     })
//     .catch((error) => {
//       renderError(error);
//     });
// });

const renderPosts = (data) => {
  const ul = document.createElement(`ul`);
  postsBlock.append(ul);

  data.forEach((item) => {
    const li = document.createElement(`li`);
    li.innerHTML = item.title;

    ul.append(li);
  });
};

const renderUsers = (data) => {
  const ol = document.createElement(`ol`);
  usersBlock.append(ol);

  data.forEach((item) => {
    const li = document.createElement(`li`);
    li.innerHTML = item.name;

    ol.append(li);
  });
};

const renderPostsError = (error) => {
  const errorBlock = document.createElement(`p`);
  errorBlock.className = `error__block`;
  errorBlock.innerHTML = error;

  postsBlock.append(errorBlock);
};

const renderUsersError = (error) => {
  const errorBlock = document.createElement(`p`);
  errorBlock.className = `error__block`;
  errorBlock.innerHTML = error;

  usersBlock.append(errorBlock);
};

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then()
//     .then()
//     .catch()

// async/await

async function getData(url, resolve, reject) {
  try {
    const request = await fetch(url);
    if (request.ok) {
      const response = await request.json();
      resolve(response);
    } else {
      throw new Error(request.statusText);
    }
  } catch (error) {
    reject(error);
  } finally {
    console.log(`Finally!`);
  }
}

getPosts.addEventListener(`click`, () => {
  getData(
    `https://jsonplaceholder.typicode.com/posts`,
    renderPosts,
    renderPostsError,
  );
});

getUsers.addEventListener(`click`, () => {
  getData(
    `https://jsonplaceholder.typicode.com/users`,
    renderUsers,
    renderUsersError,
  );
});
