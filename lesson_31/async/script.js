// const startInterval = document.querySelector("#startInterval"),
//   stopInterval = document.querySelector("#stopInterval");

// let intervalId;

// startInterval.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Tick`);
//   }, 1000);
// });

// stopInterval.addEventListener(`click`, () => {
//   clearInterval(intervalId);
// });

// console.log(`Before timeout`);

// let timeoutResult;

// setTimeout(() => {
//   timeoutResult = `Timeout executed`;
//   afterTimeout(timeoutResult);
// }, 1000);

// const afterTimeout = (result) => {
//   console.log(result);
//   secondCB();
// };

// const secondCB = () => {
//   console.log(`Second callback executed`);
//     thirdCB();
// };

// const thirdCB = () => {
//   console.log(`Third callback executed`);
// };

// node.contains(otherNode);

// for (let i = 0; i < 100; i++) {
//   console.log(`loop`);
// }

// console.log(`After timeout`);

// const getUserList = () => {
//     console.log(`Get user list...`);
//     return [`User1`, `User2`, `User3`];
// }

// const sortUserList = (userList) => {
//     console.log(`Sorting user list...`);
//     mapUserList(userList);
// }

// const mapUserList = (userList) => {
//     console.log(`Mapping user list...`);
// }

// setTimeout(() => {
//     const userList = getUserList();
//     sortUserList(userList);
// }, 2000)

// const loadData = new Promise((resolve, reject) => {
//   console.log('Завантаження даних почалося');
//   setTimeout(() => {
//     // Симулюємо успішне завершення асинхронної операції
//     resolve('Дані успішно завантажені');
//     // reject('Помилка завантаження даних');
//   }, 2000);
// });

// loadData
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     });

// 🟢🔴🥳

// const loadData = new Promise((resolve, reject) => {
//   console.log("Артист дає обіцянку через 2сек дати інфу про концерт");
//   setTimeout(() => {
//     resolve("Концерт відбудеться");
//     // reject(`Концерт скасовано`);
//   }, 2000);
// });

// loadData
//   .then((result) => {
//     console.log(`🟢 ${result}`);
//   })
//   .then(() => {
//     console.log(`🥳 Готуємось до концерту`);
//   })
//   .then(() => {
//     console.log(`🎉 Концерт почався`);
//   })
//   .then(()=>{
//     console.log(`💃 Танці після концерту`);
//   })
//   .catch((result) => {
//     console.log(`🔴 ${result}`);
//   })
//   .then(() => {
//     console.log(`🟢 Нічого страншного`);
//     return Promise.reject();
//   })
//   .catch(() => {
//     console.log(`🔴 Артист збанкрутував`);
//     return Promise.reject();
//   })
//   .catch(() => {
//     console.log(`🔴 Артист не прийшов`);
//   });

const promiseConcert = new Promise((resolve, reject) => {
  console.log("Артист дає обіцянку через 1сек дати інфу про концерт");

  setTimeout(() => {
    const confirmResult = confirm("Чи відбудеться концерт?");
    confirmResult ? resolve() : reject();
  }, 1000);
});

promiseConcert
  .then(() => {
    console.log(`🟢 Концерт відбудеться`);
    const confirmResult = confirm("Концерт буде в Києві?");
    if (confirmResult === false) {
      return Promise.reject();
    }
  })
  .finally(() => {
    console.log(`🔵 First finally block executed`);
  })
  .then(() => {
    console.log(`🟢 Концерт буде в Києві`);
    const confirmedResult = confirm("Вартість концерту <1000 грн?");
    if (confirmedResult === false) {
      return Promise.reject();
    }
  })
  .then(() => {
    console.log(`🟢 Вартість концерту <1000 грн, концерту бути!`);
  })
  .catch(() => {
    console.log(`🔴 Концерт скасовано`);
  })
  .finally(() => {
    console.log(`🔵 Концертна інформація оброблена`);
  })
  .finally(() => {
    console.log(`🔵 Додаткова обробка завершена`);
  });
