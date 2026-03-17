const API = "http://localhost:8082/inventario-app/products";

const getToken = () => localStorage.getItem("token");

export const getProducts = async () => {
  const response = await fetch(API, {
    headers: { "Authorization": `Bearer ${getToken()}` }
  });
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    body: JSON.stringify(product)
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: { "Authorization": `Bearer ${getToken()}` }
  });
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    body: JSON.stringify(product)
  });
  return response.json();
};