const API = `https://6af1f8e942c6561ced38dcd0.mockapi.io/users`;

export const service = {
  get: () =>
    fetch(API)
      .then((data) => data.json())
      .catch((error) => console.log(error)),
  delete: (id) =>
    fetch(`${API}/${id}`, { method: `DELETE` })
      .then((data) => data.json())
      .catch((error) => console.log(error)),
  put: (id, payload) =>
    fetch(`${API}/${id}`, {
      method: `PUT`,
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .catch((error) => console.log(error)),
  post: (payload) =>
    fetch(API, {
      method: `POST`,
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .catch((error) => console.log(error)),
};
