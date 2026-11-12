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

const renderUsersListItem = (user, ul) => {
  const li = document.createElement(`li`);
  li.className = `list__item`;

  renderListItemContent(user, li);

  ul.append(li);
};

const renderListItemContent = (user, li) => {
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
    handleChangeName(user, li);
  });
  li.append(btnChangeName);

  const btnChangeEmail = document.createElement(`button`);
  btnChangeEmail.innerHTML = `Change email`;
  btnChangeEmail.addEventListener(`click`, () => {
    handleChangeEmail(user, userEmail);
  });
  li.append(btnChangeEmail);

  const labelMarried = document.createElement(`label`);
  labelMarried.innerHTML = `Married: `;
  const inputMarried = document.createElement(`input`);
  inputMarried.type = `checkbox`;
  inputMarried.checked = user.married;
  inputMarried.addEventListener(`change`, () => {
    handleChangeMarried(user, inputMarried, li);
  });
  labelMarried.append(inputMarried);
  li.append(labelMarried);

  const btnReadMore = document.createElement(`button`);
  btnReadMore.innerHTML = `Read more`;
  btnReadMore.addEventListener(`click`, () => {
    handleReadMore(user.id);
  });
  li.append(btnReadMore);
};

const updateUsersListItem = (user, li) => {
  li.innerHTML = ``;
  renderListItemContent(user, li);
};

const handleUserDelete = async (id, li) => {
  await service.delete(id);
  li.remove();
  handleReadMore();
};

const handleChangeName = async (user, li) => {
  try {
    const newUserName = prompt(`Enter new name`, user.name);

    const updatedUser = await service.put(user.id, {
      name: newUserName,
    });

    updateUsersListItem(updatedUser, li);
    handleReadMore(updatedUser.id);
  } catch (error) {
    console.log(error);
  }
};

const handleChangeEmail = async (user, userEmail) => {
  const newUserEmail = prompt(`Enter new email`, user.email);

  const updatedUser = await service.put(user.id, { email: newUserEmail });
  userEmail.innerHTML = updatedUser.email;
  handleReadMore(updatedUser.id);
};

userForm.addEventListener(`submit`, async (event) => {
  event.preventDefault();

  const userFormName = document.querySelector(`#userFormName`),
    name = userFormName.value;

  const userFormEmail = document.querySelector(`#userFormEmail`),
    email = userFormEmail.value;

  const userFormMarried = document.querySelector(`#userFormMarried`),
    married = userFormMarried.checked;

  const user = {
    name,
    email,
    married,
  };

  await service.post(user);

  let userList = document.querySelector(`#userList`);
  if (userList) userList.remove();
  renderUsersList();
});

const handleChangeMarried = async (user, input, li) => {
  try {
    input.disabled = true;
    const updatedUser = await service.put(user.id, { married: input.checked });
    updateUsersListItem(updatedUser, li);
    handleReadMore(user.id);
  } catch (error) {
    console.log(error);
    input.checked = !input.checked;
  } finally {
    input.disabled = false;
  }
};

const handleReadMore = async (id) => {
  if (!id) {
    sectionUser.innerHTML = ``;
    return;
  }
  try {
    const userInfo = await service.get(id);
    const list = renderNestedList(userInfo);
    sectionUser.innerHTML = ``;
    sectionUser.append(list);
  } catch (error) {
    console.log(error);
  }
};
