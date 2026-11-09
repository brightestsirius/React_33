// CRUD - READ (GET), DELETE (DELETE), UPDATE (PUT, PATCH), CREATE (POST)

const btnGetUsers = document.querySelector(`#btnGetUsers`);
const sectionUsers = document.querySelector(`#sectionUsers`);
const userForm = document.querySelector(`#userForm`);

const API = `https://6af1f8e942c6561ced38dcd0.mockapi.io/users`;
// const API = `https://jsonplaceholder.typicode.com/users`;

// fetch
const fetchUsers = async () => {
  try {
    const request = await fetch(API);
    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchDeleteUser = async (user) => {
  try {
    const request = await fetch(`${API}/${user.id}`, { method: `DELETE` });
    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchPutUser = async (user, obj) => {
  try {
    const request = await fetch(`${API}/${user.id}`, {
      method: `PUT`,
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchPatchUser = async (user, obj) => {
  try {
    const request = await fetch(`${API}/${user.id}`, {
      method: `PATCH`,
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchPostUser = async (user) => {
  try {
    const request = await fetch(API, {
      method: `POST`,
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
// fetch

btnGetUsers.addEventListener(`click`, async () => {
  renderUsersList();
});

const renderUsersList = async () => {
  const users = await fetchUsers();

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
    handleUserDelete(user, li);
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

const handleUserDelete = async (user, li) => {
  await fetchDeleteUser(user);
  li.remove();
};

const handleChangeName = async (user, userName) => {
  const newUserName = prompt(`Enter new name`, user.name);

  const updatedUser = await fetchPutUser(user, { ...user, name: newUserName });
  userName.innerHTML = updatedUser.name;
};

const handleChangeEmail = async (user, userEmail) => {
  const newUserEmail = prompt(`Enter new email`, user.email);

  const updatedUser = await fetchPutUser(user, { email: newUserEmail });
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

  const createdUser = await fetchPostUser(user);

  let userList = document.querySelector(`#userList`);

  if (!userList) {
    renderUsersList();
  } else {
    renderUsersListItem(createdUser, userList);
  }
});
