// CRUD - READ (GET), DELETE (DELETE), UPDATE (PUT, PATCH), CREATE (POST)
import { service } from "./service.js";
import { renderNestedList } from "./utils.js";

const btnGetUsers = document.querySelector(`#btnGetUsers`);
const sectionUsers = document.querySelector(`#sectionUsers`);
const sectionUser = document.querySelector(`#sectionUser`);
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

const updateUsersListItem = (user, li) => {
  li.innerHTML = ``;
  renderUserListItemContent(user, li);
};

const renderUsersListItem = (user, ul) => {
  const li = document.createElement(`li`);
  li.className = `list__item`;
  renderUserListItemContent(user, li);
  ul.append(li);
};

const renderUserListItemContent = (user, li) => {
  const spanUserName = document.createElement(`span`);
  spanUserName.className = `item__name`;
  spanUserName.innerHTML = user.name;
  li.append(spanUserName);

  const spanUserEmail = document.createElement(`span`);
  spanUserEmail.className = `item__email`;
  spanUserEmail.innerHTML = user.email;
  li.append(spanUserEmail);

  const btnDelete = document.createElement(`button`);
  btnDelete.innerHTML = `Delete`;
  btnDelete.addEventListener(`click`, () => {
    handleUserDelete(user, li);
  });
  li.append(btnDelete);

  const btnChangeName = document.createElement(`button`);
  btnChangeName.innerHTML = `Change name`;
  btnChangeName.addEventListener(`click`, () => {
    handleChangeName(user, spanUserName, li);
  });
  li.append(btnChangeName);

  const btnChangeEmail = document.createElement(`button`);
  btnChangeEmail.innerHTML = `Change email`;
  btnChangeEmail.addEventListener(`click`, () => {
    handleChangeEmail(user);
  });
  li.append(btnChangeEmail);

  const btnReadMore = document.createElement(`button`);
  btnReadMore.innerHTML = `Read more`;
  btnReadMore.addEventListener(`click`, () => {
    handleUserInfo(user.id);
  });
  li.append(btnReadMore);
};

const handleUserInfo = async (id, onlyIfShown = false, isDeleted = false) => {
  try {
    if (onlyIfShown && sectionUser.dataset.user !== String(id)) return;

    if (isDeleted) {
      sectionUser.innerHTML = ``;
      delete sectionUser.dataset.user;
      return;
    }

    const userInfo = await service.get(id);
    const ul = renderNestedList(userInfo);

    sectionUser.innerHTML = ``;
    sectionUser.dataset.user = id;
    sectionUser.append(ul);
  } catch (error) {
    console.log(error);
  }
};

const handleUserDelete = async (user, li) => {
  try {
    await service.delete(user.id);
    li.remove();
    handleUserInfo(user.id, true, true);
  } catch (error) {
    console.log(error);
    li.classList.add("error");
  }
};

const handleChangeName = async (user, spanUserName, li) => {
  try {
    const newUserName = prompt(`Enter new name`, user.name);

    const updatedUser = await service.put(user.id, { name: newUserName });
    updateUsersListItem(updatedUser, li);
    handleUserInfo(updatedUser.id, true);
  } catch (error) {
    console.log(error);
    spanUserName.classList.add(`error`);
  }
};

const handleChangeEmail = async (user) => {
  try {
    const newUserEmail = prompt(`Enter new email`, user.email);
    const updatedUser = await service.put(user.id, { email: newUserEmail });

    const userList = document.querySelector(`#userList`);
    if (userList) {
      userList.remove();
      renderUsersList();
    }
    handleUserInfo(updatedUser.id, true);
  } catch (error) {
    console.log(error);
  }
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
