import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cadastro-de-usuarios-back-end.onrender.com',
});

export default api;
