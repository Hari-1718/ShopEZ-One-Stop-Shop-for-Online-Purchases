import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:6003", // your backend server
  // You can add headers here if needed
});

export default instance;
