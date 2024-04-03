import axios from "axios";
import { getAccessTokenAndTTLFromLocalStorage } from "./authUtils";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const idToken = getAccessTokenAndTTLFromLocalStorage();
      if(idToken) {
        config.headers.Authorization = `Bearer ${idToken}`;
      }
    } catch (err) {
      console.error(err);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
