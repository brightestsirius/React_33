export const fetchUsers = async () => {
  try {
    const request = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeleteUser = async (id) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: `DELETE`,
      },
    );
    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPutUserName = async (user, newName) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: `PUT`,
        body: JSON.stringify({ ...user, name: newName }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPatchUserEmail = async (user, newEmail) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: `PATCH`,
        body: JSON.stringify({ email: newEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostUser = async (user) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users`,
      {
        method: `POST`,
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!request.ok) throw new Error(request.statusText);

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
