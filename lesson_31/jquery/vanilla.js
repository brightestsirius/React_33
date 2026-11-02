// 1. Click + toggleClass
document.querySelector(`#toggleBtn`).addEventListener(`click`, function () {
  this.classList.toggle(`active`);
});

// 2. Show / hide
document.querySelector(`#hideBtn`).addEventListener(`click`, () => {
  const box = document.querySelector(`.box`);
  box.style.display = box.style.display === `none` ? `` : `none`;
});

// 3. Text + css
const title = document.querySelector(`.title`);
title.textContent = `Hello from vanilla JS`;
title.style.color = `green`;

// 4. Each over elements
document.querySelectorAll(`.list li`).forEach((li, index) => {
  li.textContent = `${index + 1}. ${li.textContent}`;
});

// 5. Each over array + append
const users = [`John`, `Anna`, `Mike`];
const usersList = document.querySelector(`.users`);

users.forEach((user) => {
  usersList.insertAdjacentHTML(`beforeend`, `<li>${user}</li>`);
});

// 6. Form: val + preventDefault
const input = document.querySelector(`#username`);
const usernames = document.querySelector(`.usernames`);

document.querySelector(`#userForm`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  if (input.value) usernames.insertAdjacentHTML(`beforeend`, `<li>${input.value}</li>`);
  input.value = ``;
});
