// axiosConfig.js

import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export const APIs = {
  // Update product routes
  getAllProductsApi: "products",
  addProductApi: "products",
  getProductByIdApi: (id) => `products/${id}`,
  updateProductApi: (id) => `products/${id}`,
  deleteProductApi: (id) => `products/${id}`,
};

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "/",
  },
});

const request = () => {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const HttpRequest = {
  getAllProductsApi() {
    return request().get(`${BASE_URL}${APIs.getAllProductsApi}`);
  },

  addProductApi(product) {
    return request().post(`${BASE_URL}${APIs.addProductApi}`, JSON.stringify(product));
  },

  getProductByIdApi(id) {
    return request().get(`${BASE_URL}${APIs.getProductByIdApi(id)}`);
  },

  updateProductApi(id, updatedProduct) {
    return request().put(`${BASE_URL}${APIs.updateProductApi(id)}`, JSON.stringify(updatedProduct));
  },

  deleteProductApi(id) {
    return request().delete(`${BASE_URL}${APIs.deleteProductApi(id)}`);
  },
};
