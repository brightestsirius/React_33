const API = `https://6af1f8e942c6561ced38dcd0.mockapi.io/users`;
const contentType = {
  "Content-type": "application/json",
};

export const service = {
  get: (id) =>
    fetch(id ? `${API}/${id}` : API).then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }),
  delete: (id) =>
    fetch(`${API}/${id}`, { method: `DELETE` }).then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }),
  put: (id, payload) =>
    fetch(`${API}/${id}`, {
      method: `PUT`,
      body: JSON.stringify(payload),
      headers: contentType,
    }).then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }),
  post: (payload) =>
    fetch(API, {
      method: `POST`,
      body: JSON.stringify(payload),
      headers: contentType,
    }).then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }),
};
