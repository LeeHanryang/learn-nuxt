import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseUrl,
});

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

function fetchProductsByKeyword(keyword) {
  if (keyword === "") {
    return instance.get("/products");
  }
  return instance.get("/products", {
    params: {
      name_like: keyword,
    },
  });
}

function fetchCartItems() {
  return instance.get("/carts");
}

function createCartItem(cartItem) {
  return instance.post("/carts", cartItem);
}

export {
  fetchProductById,
  fetchProductsByKeyword,
  fetchCartItems,
  createCartItem,
};
