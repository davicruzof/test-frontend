import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  timeout: 10000,
});

export default api;
