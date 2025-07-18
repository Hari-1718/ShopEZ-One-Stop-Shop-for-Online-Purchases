import axios from 'axios';
import express from 'express';

// Set the base URL to your backend server
const api = axios.create({
  baseURL: 'http://localhost:6002',
  // You can add headers or other config here if needed
});

// Ensure the backend endpoint exists
api.get('/api/banner')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

const router = express.Router();

router.get('/api/banner', (req, res) => {
  res.json({ banner: "Banner data" });
});

export default api;