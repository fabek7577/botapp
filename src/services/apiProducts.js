import axios from "axios";

const API_URL = "http://192.168.0.124:5000";

export async function fetchProducts() {
  const response = await axios
    .get(`${API_URL}/categories`)
    .then((res) => res.data)
    .catch((err) => console.log("не удалилось получить данные", err));

  return response;
}

export async function fetchCategories() {
  const response = await axios
    .get(`${API_URL}/categories/names`)
    .then((res) => res.data)
    .catch((err) => console.log("не удалилось получить данные", err));

  return response;
}
