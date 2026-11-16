// CRUD - READ (GET), CREATE (POST), UPDATE (PUT), DELETE (DELETE)
const API = `https://6af1f8e942c6561ced38dcd0.mockapi.io/books`;
const headers = {
  "Content-type": "application/json",
};

const request = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
};

export const service = {
  get: (id) => request(id ? `${API}/${id}` : API),
  post: (payload) =>
    request(API, { method: `POST`, headers, body: JSON.stringify(payload) }),
  put: (id, payload) =>
    request(`${API}/${id}`, { method: `PUT`, headers, body: JSON.stringify(payload) }),
  delete: (id) => request(`${API}/${id}`, { method: `DELETE` }),
};
