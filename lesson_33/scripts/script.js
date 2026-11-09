import {
  fetchUsers,
  fetchDeleteUser,
  fetchPutUserName,
  fetchPatchUserEmail,
  fetchPostUser,
} from "./service.js";

const btnGetUsers = document.querySelector(`#btnGetUsers`);
btnGetUsers &&
  btnGetUsers.addEventListener(`click`, () => {
    renderUsersList();
  });

const renderUsersList = async () => {
  const users = await fetchUsers();
  const sectionUsers = document.querySelector(`#sectionUsers`);

  const ul = document.createElement(`ul`);
  ul.className = `list`;
  ul.id = `userList`;
  sectionUsers.append(ul);

  users.forEach((user) => {
    renderUserItem(user, ul);
  });
};

const renderUserItem = (user, ul) => {
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
    deleteUserItem(user.id, li);
  });
  li.append(btnDelete);

  const btnChangeName = document.createElement(`button`);
  btnChangeName.innerHTML = `Change name`;
  btnChangeName.addEventListener(`click`, () => {
    changeUserName(user, li);
  });
  li.append(btnChangeName);

  const btnChangeUserEmail = document.createElement(`button`);
  btnChangeUserEmail.innerHTML = `Change email`;
  btnChangeUserEmail.addEventListener(`click`, () => {
    changeUserEmail(user, li);
  });
  li.append(btnChangeUserEmail);

  ul.append(li);
};

const deleteUserItem = async (id, li) => {
  await fetchDeleteUser(id);
  li.remove();
};

const changeUserName = async (user, li) => {
  const newName = prompt(`Enter name`, user.name);
  const updatedUser = await fetchPutUserName(user, newName);

  const userName = li.querySelector(`.item__name`);
  userName.innerHTML = updatedUser.name;
};

const changeUserEmail = async (user, li) => {
  const newEmail = prompt(`Enter email`, user.email);
  const updatedUser = await fetchPatchUserEmail(user, newEmail);

  const userEmail = li.querySelector(`.item__email`);
  userEmail.innerHTML = updatedUser.email;
};

const formCreateUser = document.querySelector(`#formCreateUser`);
formCreateUser &&
  formCreateUser.addEventListener(`submit`, async (e) => {
    e.preventDefault();

    const name = document.querySelector(`#formCreateUserName`).value;
    const email = document.querySelector(`#formCreateUserEmail`).value;

    const user = {
      name,
      email,
    };

    const createdUser = await fetchPostUser(user);
    appendUser(createdUser);
  });

const appendUser = async (user) => {
  let ul = document.querySelector(`#userList`);

  if (!ul) {
    await renderUsersList();
    ul = document.querySelector(`#userList`);
  }

  renderUserItem(user, ul);
};
