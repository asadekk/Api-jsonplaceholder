import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API manzili
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;