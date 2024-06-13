import axios from "axios";

const BASE_URL = null ?? "http://localhost:8000/";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem("access") as string;
    console.log("Interceptor", accessToken);
    if (!accessToken) return config;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
