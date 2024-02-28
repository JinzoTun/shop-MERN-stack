import axios from 'axios';

const url = 'http://localhost:5555/product';

export const createProduct = (newProduct) => axios.post(url, newProduct);
export const fetchProduct = () => axios.get(url);
export const updateProduct = (id, updatedProduct) => axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);