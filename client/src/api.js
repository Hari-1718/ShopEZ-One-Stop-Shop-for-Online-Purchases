import axios from 'axios';

// Set the base URL to your backend server
const api = axios.create({
  baseURL: 'http://localhost:6003',
  // You can add headers or other config here if needed
});

export default api;