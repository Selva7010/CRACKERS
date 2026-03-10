import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/api",
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
      
});

// Add token automatically
Api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default Api;