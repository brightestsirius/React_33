// CRUD - READ (GET), DELETE (DELETE), UPDATE (PUT, PATCH), CREATE (POST)
import { service } from "./service.js";

const btnGetUsers = document.querySelector(`#btnGetUsers`);
const sectionUsers = document.querySelector(`#sectionUsers`);
const userForm = document.querySelector(`#userForm`);

btnGetUsers.addEventListener(`click`, async () => {
  renderUsersList();
});

const renderUsersList = async () => {
  const users = await service.get();

  const ul = document.createElement(`ul`);
  ul.className = `list`;
  ul.id = `userList`;
  sectionUsers.append(ul);

  users.forEach((user) => {
    renderUsersListItem(user, ul);
  });
};

const renderUsersListItem = (user, ul) => {
  const li = document.createElement(`li`);
  li.className = `list__item`;

  const userName = document.createElement(`span`);
  userName.className = `item__name`;
  userName.innerHTML = user.name;
  li.append(userName);

  const userEmail = document.createElement(`span`);
  userEmail.className = `item__email`;
  userEmail.innerHTML = user.email;
  li.append(userEmail);

  const btnDelete = document.createElement(`button`);
  btnDelete.innerHTML = `Delete`;
  btnDelete.addEventListener(`click`, () => {
    handleUserDelete(user.id, li);
  });
  li.append(btnDelete);

  const btnChangeName = document.createElement(`button`);
  btnChangeName.innerHTML = `Change name`;
  btnChangeName.addEventListener(`click`, () => {
    handleChangeName(user, userName);
  });
  li.append(btnChangeName);

  const btnChangeEmail = document.createElement(`button`);
  btnChangeEmail.innerHTML = `Change email`;
  btnChangeEmail.addEventListener(`click`, () => {
    handleChangeEmail(user, userEmail);
  });
  li.append(btnChangeEmail);

  ul.append(li);
};

const handleUserDelete = async (id, li) => {
  await service.delete(id);
  li.remove();
};

const handleChangeName = async (user, userName) => {
  const newUserName = prompt(`Enter new name`, user.name);

  const updatedUser = await service.put(user.id, {
    ...user,
    name: newUserName,
  });
  userName.innerHTML = updatedUser.name;
};

const handleChangeEmail = async (user, userEmail) => {
  const newUserEmail = prompt(`Enter new email`, user.email);

  const updatedUser = await service.put(user.id, { email: newUserEmail });
  userEmail.innerHTML = updatedUser.email;
};

userForm.addEventListener(`submit`, async (event) => {
  event.preventDefault();

  const userFormName = document.querySelector(`#userFormName`),
    name = userFormName.value;

  const userFormEmail = document.querySelector(`#userFormEmail`),
    email = userFormEmail.value;

  const user = {
    name,
    email,
  };

  const createdUser = await service.post(user);

  let userList = document.querySelector(`#userList`);

  if (!userList) {
    renderUsersList();
  } else {
    renderUsersListItem(createdUser, userList);
  }
});
