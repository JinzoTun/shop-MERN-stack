import axios from 'axios';

const url = 'http://localhost:5555/product';
const authUrl = 'http://localhost:5555/auth';

export const createProduct = (newProduct) => axios.post(url, newProduct);
export const fetchProduct = () => axios.get(url);
export const updateProduct = (id, updatedProduct) => axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => axios.post(`${authUrl}/login`, formData);
export const signUp = (formData) => axios.post(`${authUrl}/signup`, formData);
export const logout = () => axios.get(`${authUrl}/logout`);
